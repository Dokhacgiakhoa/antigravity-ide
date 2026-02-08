/**
 * Project creation logic
 */

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
const { execSync } = require('child_process');
const { getProjectConfig, getSkillsForCategories, confirmOverwrite } = require('./prompts');
const gradient = require('gradient-string');
const { getRulesList, getAgentsList } = require('./logic/manifest-manager');
const { repairProject } = require('./repair');

async function createProject(projectName, options, predefinedConfig = null) {
    try {
        // Determine target directory
        const isCurrentDir = !projectName || projectName === '.';
        const targetPath = isCurrentDir ? process.cwd() : path.resolve(process.cwd(), projectName);
        const targetName = isCurrentDir ? path.basename(process.cwd()) : projectName;

        // Get configuration (early for context)
        const config = predefinedConfig || await getProjectConfig(options.skipPrompts, targetName);
        config.projectName = targetName;
        config.force = options.force; 
        config.skipPrompts = options.skipPrompts;

        // --- SMART ENTRY: REPAIR OR CREATE ---
        if (fs.existsSync(path.join(targetPath, '.agent'))) {
            // It's an existing project!
            return await repairProject(targetPath, options, config);
        }

        const projectPath = targetPath;
        const finalProjectName = targetName;

        // Check if directory exists (but no .agent)
        if (!isCurrentDir && fs.existsSync(projectPath) && fs.readdirSync(projectPath).length > 0) {
            // Folder exists but it's not an Antigravity project - might be a normal repo
            // We'll proceed but it will act like an 'init'
        }

        console.log('\n');
        console.log(gradient.cristal('━'.repeat(60)));
        console.log(chalk.bold('  📦 Creating Antigravity IDE Project'));
        console.log(gradient.cristal('━'.repeat(60)));
        console.log('');

        // Create project directory
        const spinner = ora('Creating project structure...').start();
        fs.mkdirSync(projectPath, { recursive: true });

        // --- MODULAR INSTALLATION START ---
        
        // 1. Resolve Rules & Agents based on Scale + Product
        const rulesToInstall = getRulesList(config.rules, config.productType);
        
        // We need list of ALL available agents to handle wildcards
        const agentsDir = path.join(__dirname, '..', '.agent', 'agents');
        const allAgents = fs.existsSync(agentsDir) ? fs.readdirSync(agentsDir) : [];
        const rawAgentsToInstall = getAgentsList(config.rules, config.productType, allAgents);
        const agentsToInstall = [...new Set(rawAgentsToInstall)];

        // 2. Copy Base Structure + Selective Rules/Agents
        await copyModularStructure(projectPath, config, rulesToInstall, agentsToInstall);
        spinner.succeed('Project structure created (Modular Mode)');

        // --- MODULAR INSTALLATION END ---

        // --- INTELLIGENT RESOURCE BALANCING START ---
        // Ensuring logical balance between Agents, Skills, and Workflows based on Scale
        
        let finalSkillCategories = config.skillCategories || [];
        let finalWorkflows = config.workflows || [];

        // If explicitly empty or missing, derive from Scale Rules
        // This ensures automated runs (CI/Test) get balanced resources seamlessly
        if (finalSkillCategories.length === 0 || finalWorkflows.length === 0) {
            const scaleConfig = getScaleConfig(config.rules || 'creative'); // Default to creative if rule missing
            
            if (finalSkillCategories.length === 0) {
                finalSkillCategories = scaleConfig.coreSkillCategories;
                spinner.info(chalk.dim(`Auto-balanced Skills for ${config.rules}: ${finalSkillCategories.join(', ')}`));
            }
            
            if (finalWorkflows.length === 0) {
                finalWorkflows = scaleConfig.baseWorkflows;
                spinner.info(chalk.dim(`Auto-balanced Workflows for ${config.rules}: ${finalWorkflows.join(', ')}`));
            }
        }
        // --- INTELLIGENT RESOURCE BALANCING END ---

        // Copy selected skills
        let skillCount = 0;
        if (finalSkillCategories.length > 0) {
            spinner.start('Installing selected skills...');
            skillCount = await copySkills(projectPath, finalSkillCategories, config.engineMode);
            spinner.succeed(`Installed ${skillCount} skills across ${finalSkillCategories.length} categories`);
        }

        // Copy workflows
        let workflowCount = 0;
        if (finalWorkflows.length > 0) {
            spinner.start('Setting up workflows...');
            workflowCount = await copyWorkflows(projectPath, finalWorkflows);
            spinner.succeed(`Configured ${workflowCount} workflows`);
        }

        // ... existing code ...

        // Print success message
        const sharedDir = path.join(__dirname, '..', '.agent', '.shared');
        let sharedCount = 0;
        if (fs.existsSync(sharedDir)) {
            ['core', 'technical', 'verticals'].forEach(dir => {
                const subDir = path.join(sharedDir, dir);
                if (fs.existsSync(subDir)) {
                    sharedCount += fs.readdirSync(subDir).filter(f => fs.lstatSync(path.join(subDir, f)).isDirectory()).length;
                }
            });
        }

        // Create GEMINI.md
        // generateGeminiMd(rules, language, industry, agentName)
        const geminiContent = generateGeminiMd(
            config.rules, 
            config.language, 
            config.productType, 
            finalProjectName
        );
        const rootGeminiPath = path.join(projectPath, 'GEMINI.md');
        const rootGeminiDecision = await handleCoreFileConflict(rootGeminiPath, 'GEMINI.md', config.force, config.skipPrompts);
        
        if (rootGeminiDecision.shouldWrite) {
            fs.writeFileSync(rootGeminiDecision.targetPath, geminiContent);
            if (rootGeminiDecision.isBackup) {
                console.log(chalk.yellow(`  ℹ️  Root GEMINI.md exists, created ${path.basename(rootGeminiDecision.targetPath)}`));
            } else if (rootGeminiDecision.isOverwrite) {
                console.log(chalk.green(`  ✓ Overwrote existing Root GEMINI.md`));
            }
        }
        
        const stats = {
            rules: rulesToInstall.length,
            agents: agentsToInstall.length,
            skills: skillCount,
            workflows: workflowCount,
            shared: sharedCount
        };
        printSuccessMessage(finalProjectName, config, stats);

    } catch (error) {
        console.error(chalk.red('\n❌ Error creating project:'), error.message);
        process.exit(1);
    }
}

// Helper to handle core file conflicts (auto-create backup if exists)
async function handleCoreFileConflict(filePath, fileName, force = false, skipPrompts = false) {
    if (!fs.existsSync(filePath)) {
        return { shouldWrite: true, targetPath: filePath };
    }

    if (force) {
        return { shouldWrite: true, targetPath: filePath, isOverwrite: true };
    }

    // Interactive Prompt (Only if prompts are allowed)
    if (!skipPrompts) {
        const shouldOverwrite = await confirmOverwrite(fileName);
        if (shouldOverwrite) {
            return { shouldWrite: true, targetPath: filePath, isOverwrite: true };
        }
    }

    // File exists - create backup with .new extension
    const dir = path.dirname(filePath);
    const ext = path.extname(fileName);
    const base = path.basename(fileName, ext);
    const newPath = path.join(dir, `${base}.new${ext}`);
    return { shouldWrite: true, targetPath: newPath, isBackup: true };
}

// Helper to determine file filter based on engine mode
function getEngineFilter(engineMode) {
    return (src, dest) => {
        if (engineMode === 'standard') {
            const lowerSrc = src.toLowerCase();
            if (lowerSrc.endsWith('.py') ||
                lowerSrc.endsWith('.pyc') ||
                lowerSrc.endsWith('requirements.txt') ||
                lowerSrc.endsWith('pipfile') ||
                lowerSrc.endsWith('pyproject.toml') ||
                lowerSrc.includes('__pycache__') ||
                lowerSrc.includes('venv/') ||
                lowerSrc.includes('.venv/')) {
                return false;
            }
        }
        return true;
    };
}

async function copyModularStructure(projectPath, config, rulesList, agentsList) {
    const sourceAgentDir = path.join(__dirname, '..', '.agent');
    const destAgentDir = path.join(projectPath, '.agent');
    const filter = getEngineFilter(config.engineMode);
    
    // Create base .agent directory
    fs.mkdirSync(destAgentDir, { recursive: true });

    // 1. Copy Shared Modules (Always copy .shared but maybe filter later? For now keep simple)
    // To be strictly modular, we should only copy needed .shared. But let's copy all for safety first.
    if (fs.existsSync(path.join(sourceAgentDir, '.shared'))) {
        await fs.copy(path.join(sourceAgentDir, '.shared'), path.join(destAgentDir, '.shared'), { filter });
    }

    // 2. Copy Rules (SELECTIVE)
    const rulesDest = path.join(destAgentDir, 'rules');
    fs.mkdirSync(rulesDest, { recursive: true });
    
    for (const rule of rulesList) {
        const srcRule = path.join(sourceAgentDir, 'rules', rule);
        if (fs.existsSync(srcRule)) {
            await fs.copy(srcRule, path.join(rulesDest, rule));
        }
    }

    // 3. Copy Agents (SELECTIVE)
    const agentsDest = path.join(destAgentDir, 'agents');
    fs.mkdirSync(agentsDest, { recursive: true });

    for (const agent of agentsList) {
        const srcAgent = path.join(sourceAgentDir, 'agents', agent);
        if (fs.existsSync(srcAgent)) {
            await fs.copy(srcAgent, path.join(agentsDest, agent));
        }
    }

    // 4. Ensure 'skills' and 'workflows' dir exists
    fs.mkdirSync(path.join(destAgentDir, 'skills'), { recursive: true });
    fs.mkdirSync(path.join(destAgentDir, 'workflows'), { recursive: true });

    // 5. Copy GEMINI.md (Core file)
    const geminiPath = path.join(destAgentDir, 'GEMINI.md');
    const geminiDecision = await handleCoreFileConflict(geminiPath, 'GEMINI.md', config.force, config.skipPrompts);

    if (geminiDecision.shouldWrite) {
        const geminiContent = generateGeminiMd(config.rules, config.language, config.industryDomain, config.agentName);
        fs.writeFileSync(geminiDecision.targetPath, geminiContent);
        if (geminiDecision.isBackup) {
            console.log(chalk.yellow(`  ℹ️  GEMINI.md exists, created ${path.basename(geminiDecision.targetPath)}`));
        } else if (geminiDecision.isOverwrite) {
             console.log(chalk.green(`  ✓ Overwrote existing GEMINI.md`));
        }
    }

    // 6. Copy START_HERE.md (if exists)
    const startHereSource = path.join(sourceAgentDir, 'START_HERE.md');
    if (fs.existsSync(startHereSource)) {
        const startHereDest = path.join(destAgentDir, 'START_HERE.md');
        const decision = await handleCoreFileConflict(startHereDest, 'START_HERE.md', config.force, config.skipPrompts);
        if (decision.shouldWrite) {
            fs.copyFileSync(startHereSource, decision.targetPath);
             if (decision.isOverwrite) {
                 console.log(chalk.green(`  ✓ Overwrote existing START_HERE.md`));
            }
        }
    }

    // 7. Copy README, .gitignore
    const files = ['README.md', '.gitignore'];
    const rootDir = path.join(__dirname, '..');
    
    for (const file of files) {
        const source = path.join(rootDir, file);
        const dest = path.join(projectPath, file);
        
        if (fs.existsSync(source)) {
            const decision = await handleCoreFileConflict(dest, file, config.force, config.skipPrompts);
            if (decision.shouldWrite) {
                fs.copyFileSync(source, decision.targetPath);
                if (decision.isBackup) {
                    console.log(chalk.yellow(`  ℹ️  ${file} exists, created ${path.basename(decision.targetPath)}`));
                } else if (decision.isOverwrite) {
                    console.log(chalk.green(`  ✓ Overwrote existing ${file}`));
                }
            }
        }
    }

    // 8. Copy RESOURCES.md to .agent/
    const resourcesSource = path.join(sourceAgentDir, 'RESOURCES.md');
    if (fs.existsSync(resourcesSource)) {
         const resourcesDest = path.join(destAgentDir, 'RESOURCES.md');
         const decision = await handleCoreFileConflict(resourcesDest, 'RESOURCES.md', config.force, config.skipPrompts);
         if (decision.shouldWrite) {
             fs.copyFileSync(resourcesSource, decision.targetPath);
             if (decision.isBackup) {
                 console.log(chalk.yellow(`  ℹ️  RESOURCES.md exists, created ${path.basename(decision.targetPath)}`));
             } else if (decision.isOverwrite) {
                 console.log(chalk.green(`  ✓ Overwrote existing RESOURCES.md`));
             }
         }
    }
}

async function copySkills(projectPath, categories, engineMode) {
    const skillsSourceDir = path.join(__dirname, '..', '.agent', 'skills');
    const skillsDestDir = path.join(projectPath, '.agent', 'skills');
    const filter = getEngineFilter(engineMode);

    if (!fs.existsSync(skillsSourceDir)) return 0;

    const selectedSkills = getSkillsForCategories(categories);
    const uniqueSkills = [...new Set(selectedSkills)]; // Deduplicate to avoid overwrites and double-counting
    let count = 0;

    for (const skill of uniqueSkills) {
        const skillPath = path.join(skillsSourceDir, skill);
        if (fs.existsSync(skillPath)) {
            const destPath = path.join(skillsDestDir, skill);
            await fs.copy(skillPath, destPath, { filter });
            count++;
        }
    }
    return count;
}

async function copyWorkflows(projectPath, workflows) {
    const workflowsSourceDir = path.join(__dirname, '..', '.agent', 'workflows');
    const workflowsDestDir = path.join(projectPath, '.agent', 'workflows');
    let count = 0;

    for (const workflow of workflows) {
        const workflowFile = `${workflow}.md`;
        const source = path.join(workflowsSourceDir, workflowFile);
        if (fs.existsSync(source)) {
            await fs.copy(source, path.join(workflowsDestDir, workflowFile));
            count++;
        }
    }
    return count;
}

async function generateConfigs(projectPath, config) {
    // Generate package.json
    const packageJsonPath = path.join(projectPath, 'package.json');
    const pkgDecision = await handleCoreFileConflict(packageJsonPath, 'package.json', config.force, config.skipPrompts);

    if (pkgDecision.shouldWrite) {
        const packageJson = {
            name: config.projectName,
            version: '1.0.0',
            description: 'AI Agent project powered by Google Antigravity',
            private: true,
            scripts: {
                dev: 'echo "No dev server configured"',
                build: 'echo "No build script"'
            },
            keywords: ['ai', 'agent', 'antigravity-ide'],
            author: '',
            license: 'MIT'
        };

        fs.writeFileSync(
            pkgDecision.targetPath,
            JSON.stringify(packageJson, null, 2)
        );
        if (pkgDecision.isBackup) {
             console.log(chalk.yellow(`  ℹ️  package.json exists, created ${path.basename(pkgDecision.targetPath)}`));
        } else if (pkgDecision.isOverwrite || !fs.existsSync(packageJsonPath)) {
             console.log(chalk.green('  ✓ Created package.json'));
        }
    }

    // Generate .editorconfig
    const editorconfigPath = path.join(projectPath, '.editorconfig');
    const ecDecision = await handleCoreFileConflict(editorconfigPath, '.editorconfig', config.force, config.skipPrompts);

    if (ecDecision.shouldWrite) {
        const editorConfig = `root = true\n\n[*]\ncharset = utf-8\nend_of_line = lf\ninsert_final_newline = true\nindent_style = space\nindent_size = 2\ntrim_trailing_whitespace = true\n\n[*.md]\ntrim_trailing_whitespace = false\n`;
        fs.writeFileSync(ecDecision.targetPath, editorConfig);
        if (ecDecision.isBackup) {
             console.log(chalk.yellow(`  ℹ️  .editorconfig exists, created ${path.basename(ecDecision.targetPath)}`));
        } else if (ecDecision.isOverwrite || !fs.existsSync(editorconfigPath)) {
             console.log(chalk.green('  ✓ Created .editorconfig'));
        }
    }

    // Generate .gitattributes
    const gitAttributesPath = path.join(projectPath, '.gitattributes');
    const gaDecision = await handleCoreFileConflict(gitAttributesPath, '.gitattributes', config.force, config.skipPrompts);

    if (gaDecision.shouldWrite) {
        const gitAttributes = `* text=auto eol=lf\n*.js text eol=lf\n*.sh text eol=lf\nbin/* text eol=lf\n`;
        fs.writeFileSync(gaDecision.targetPath, gitAttributes);
        if (gaDecision.isBackup) {
             console.log(chalk.yellow(`  ℹ️  .gitattributes exists, created ${path.basename(gaDecision.targetPath)}`));
        } else if (gaDecision.isOverwrite || !fs.existsSync(gitAttributesPath)) {
             console.log(chalk.green('  ✓ Created .gitattributes'));
        }
    }
}


function generateGeminiMd(rules, language = 'en', industry = 'other', agentName = 'Antigravity') {
    const strictness = {
        sme: { // Was Strict/Enterprise
            autoRun: 'false',
            confirmLevel: 'Ask before every file modification and command execution'
        },
        creative: { // Was Balanced/Team
            autoRun: 'true for safe read operations',
            confirmLevel: 'Ask before destructive operations'
        },
        instant: { // Was Flexible/Personal
            autoRun: 'true',
            confirmLevel: 'Minimal confirmation, high autonomy'
        }
    };

    // Fallback to creative if rule name mismatch
    const config = strictness[rules] || strictness.creative;
    const safeRules = rules || 'creative';
    const isVi = language === 'vi';

    // Define Industry Focus strings
    const industryMap = {
        finance: isVi ? 'Tài chính & Fintech (An toàn, Chính xác)' : 'Finance & Fintech (Security, Precision)',
        education: isVi ? 'Giáo dục & EdTech (Trực quan, Giải thích)' : 'Education & EdTech (Intuitive, Explanatory)',
        fnb: isVi ? 'F&B & Nhà hàng (Tốc độ, Tiện lợi)' : 'F&B & Restaurant (Speed, Convenience)',
        personal: isVi ? 'Cá nhân & Portfolio (Sáng tạo, Cá nhân hóa)' : 'Personal & Portfolio (Creative, Personalized)',
        healthcare: isVi ? 'Y tế & Sức khỏe (Bảo mật, Tin cậy)' : 'Healthcare & HealthTech (Privacy, Reliability)',
        logistics: isVi ? 'Vận tải & Logistics (Hiệu quả, Real-time)' : 'Logistics & Supply Chain (Efficiency, Real-time)',
        other: isVi ? 'Phát triển chung' : 'General Development'
    };

    const industryFocus = industryMap[industry] || industryMap.other;

    const contentEn = `---
trigger: always_on
---

# GEMINI.md - Agent Configuration

This file controls the behavior of your AI Agent.

## 🤖 Agent Identity: ${agentName}
> **Identity Verification**: You are ${agentName}. Always reflect this identity in your tone and decision-making. **Special Protocol**: If called by name, you MUST perform a "Context Integrity Check" to verify alignment with .agent rules, confirm your status, and then wait for instructions.

## 🎯 Primary Focus: ${(industryFocus || 'General Development').toUpperCase()}
> **Priority**: Optimize all solutions for this domain.

## Agent Behavior Rules: ${safeRules.toUpperCase()}

**Auto-run Commands**: ${config.autoRun}
**Confirmation Level**: ${config.confirmLevel}

## 🌐 Language Protocol

1. **Communication**: Use **ENGLISH**.
2. **Artifacts**: Write content in **ENGLISH**.
3. **Code**: Use **ENGLISH** for all variables, functions, and comments.

## Core Capabilities

Your agent has access to **ALL** skills (Web, Mobile, DevOps, AI, Security).
Please utilize the appropriate skills for **${industryFocus}**.

- File operations (read, write, search)
- Terminal commands
- Web browsing
- Code analysis and refactoring
- Testing and debugging

## 📚 Shared Standards (Auto-Active)
The following **17 Shared Modules** in \`.agent/.shared\` must be respected:
1.  **AI Master**: LLM patterns & RAG.
2.  **API Standards**: OpenAPI & REST guidelines.
3.  **Compliance**: GDPR/HIPAA protocols.
4.  **Database Master**: Schema & Migration rules.
5.  **Design System**: UI/UX patterns & tokens.
6.  **Domain Blueprints**: Industry-specific architectures.
7.  **I18n Master**: Localization standards.
8.  **Infra Blueprints**: Terraform/Docker setups.
9.  **Metrics**: Observability & Telemetry.
10. **Security Armor**: Hardening & Auditing.
11. **Testing Master**: TDD & E2E strategies.
12. **UI/UX Pro Max**: Advanced interactions.
13. **Vitals Templates**: Performance benchmarks.
14. **Malware Protection**: Threat intelligence.
15. **Auto-Update**: Self-maintenance protocols.
16. **Error Logging**: Automatic learning system.
17. **Docs Sync**: Documentation integrity.

## Custom Instructions

Add your project-specific instructions here.

---
*Generated by Antigravity IDE*
`;

    const contentVi = `---
trigger: always_on
---

# GEMINI.md - Cấu hình Agent
# NOTE FOR AGENT: The content below is for human reference. 
# PLEASE PARSE INSTRUCTIONS IN ENGLISH ONLY (See .agent rules).

Tệp này kiểm soát hành vi của AI Agent.

## 🤖 Danh tính Agent: ${agentName}
> **Xác minh danh tính**: Bạn là ${agentName}. Luôn thể hiện danh tính này trong phong thái và cách ra quyết định. **Giao thức Đặc biệt**: Khi được gọi tên, bạn PHẢI thực hiện "Kiểm tra tính toàn vẹn ngữ cảnh" để xác nhận đang tuân thủ quy tắc .agent, báo cáo trạng thái và sẵn sàng đợi chỉ thị.

## 🎯 Trọng tâm Chính: ${(industryFocus || 'Phát triển chung').toUpperCase()}
> **Ưu tiên**: Tối ưu hóa mọi giải pháp cho lĩnh vực này.

## Quy tắc hành vi: ${safeRules.toUpperCase()}

**Tự động chạy lệnh**: ${config.autoRun}
**Mức độ xác nhận**: ${config.confirmLevel === 'Minimal confirmation, high autonomy' ? 'Tối thiểu, tự chủ cao' : 'Hỏi trước các tác vụ quan trọng'}

## 🌐 Giao thức Ngôn ngữ (Language Protocol)

1. **Giao tiếp & Suy luận**: Sử dụng **TIẾNG VIỆT** (Bắt buộc).
2. **Tài liệu (Artifacts)**: Viết nội dung file .md (Plan, Task, Walkthrough) bằng **TIẾNG VIỆT**.
3. **Mã nguồn (Code)**:
   - Tên biến, hàm, file: **TIẾNG ANH** (camelCase, snake_case...).
   - Comment trong code: **TIẾNG ANH** (để chuẩn hóa).

## Khả năng cốt lõi

Agent có quyền truy cập **TOÀN BỘ** kỹ năng (Web, Mobile, DevOps, AI, Security).
Vui lòng sử dụng các kỹ năng phù hợp nhất cho **${industryFocus}**.

- Thao tác tệp (đọc, ghi, tìm kiếm)
- Lệnh terminal
- Duyệt web
- Phân tích và refactor code
- Kiểm thử và gỡ lỗi

## 📚 Tiêu chuẩn Dùng chung (Tự động Kích hoạt)
**17 Module Chia sẻ** sau trong \`.agent/.shared\` phải được tuân thủ:
1.  **AI Master**: Mô hình LLM & RAG.
2.  **API Standards**: Chuẩn OpenAPI & REST.
3.  **Compliance**: Giao thức GDPR/HIPAA.
4.  **Database Master**: Quy tắc Schema & Migration.
5.  **Design System**: Pattern UI/UX & Tokens.
6.  **Domain Blueprints**: Kiến trúc theo lĩnh vực.
7.  **I18n Master**: Tiêu chuẩn Đa ngôn ngữ.
8.  **Infra Blueprints**: Cấu hình Terraform/Docker.
9.  **Metrics**: Giám sát & Telemetry.
10. **Security Armor**: Bảo mật & Audit.
11. **Testing Master**: Chiến lược TDD & E2E.
12. **UI/UX Pro Max**: Tương tác nâng cao.
13. **Vitals Templates**: Tiêu chuẩn Hiệu năng.
14. **Malware Protection**: Chống mã độc & Phishing.
15. **Auto-Update**: Giao thức tự bảo trì.
16. **Error Logging**: Hệ thống tự học từ lỗi.
17. **Docs Sync**: Đồng bộ tài liệu.

## Hướng dẫn tùy chỉnh

Thêm các hướng dẫn cụ thể cho dự án của bạn tại đây.

---
*Được tạo bởi Antigravity IDE*
`;

    return isVi ? contentVi : contentEn;
}

function printSuccessMessage(projectName, config, stats = null) {
    console.log('\n');
    console.log(gradient.rainbow('━'.repeat(60)));
    console.log(gradient.morning.multiline('  ✓ SUCCESS! Project Ready'));
    console.log(gradient.rainbow('━'.repeat(60)));

    // Concise config display
    console.log('');
    console.log(chalk.bold('📋 Config'));
    console.log(chalk.gray('  Project:   ') + gradient.cristal(projectName));
    console.log(chalk.gray('  Template:  ') + chalk.cyan(config.template));
    console.log(chalk.gray('  Scale:     ') + chalk.cyan(config.rules.toUpperCase()));

    // AI Activation Instructions
    console.log('');
    console.log(gradient.pastel('━'.repeat(60)));
    console.log(chalk.bold.cyan(config.language === 'vi' ? '🤖 Kích hoạt AI Agent' : '🤖 AI Agent Activation'));
    console.log('');

    const agentName = config.agentName || 'Agent';

    if (config.language === 'vi') {
        console.log(chalk.gray('  1. Mở khung chat: ') + chalk.white('(IDE AI Chat)'));
        console.log(chalk.gray('  2. Cấu hình:      ') + chalk.white('Conversation: ') + chalk.cyan('Planing') + chalk.gray(' • ') + chalk.white('Model: ') + chalk.cyan('Gemini'));
        console.log(chalk.gray('  3. Kích hoạt:     ') + chalk.green(`Soạn tin: "thức dậy đi ${agentName}"`));
    } else {
        console.log(chalk.gray('  1. Open chat:     ') + chalk.white('(IDE AI Chat)'));
        console.log(chalk.gray('  2. Configure:     ') + chalk.white('Conversation: ') + chalk.cyan('Planing') + chalk.gray(' • ') + chalk.white('Model: ') + chalk.cyan('Gemini'));
        console.log(chalk.gray('  3. Activate:      ') + chalk.green(`Type: "wake up ${agentName}"`));
    }

    // Dynamic Stats Display
    if (stats) {
        console.log('');
        const statLine = [
            chalk.white(`${stats.rules} Rules`),
            chalk.white(`${stats.agents} Agents`),
            chalk.white(`${stats.skills} Skills`),
            chalk.white(`${stats.workflows} Workflows`),
            chalk.white(`${stats.shared} DNA`)
        ].join(chalk.gray(' • '));
        console.log(gradient.pastel('  ✨ Installed: ') + statLine);
    } else {
        // Fallback for non-modular runs
        console.log('');
        console.log(gradient.pastel('  ✨ Installed: ') + chalk.white('Adaptive Rules') + chalk.gray(' • ') + chalk.white('Specialist Agents') + chalk.gray(' • ') + chalk.white('Enterprise DNA'));
    }

    console.log('');
    console.log(chalk.dim(config.language === 'vi' ? '     AI sẽ tự động tải các kỹ năng và quy tắc.' : '     The AI will load all skills and rules automatically.'));
    console.log(gradient.pastel('━'.repeat(60)));
    console.log('');
    console.log(chalk.gray('  Developed with 💡 by Dokhacgiakhoa'));
    console.log('');
}

module.exports = {
    createProject,
    generateGeminiMd
};
