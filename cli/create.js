/**
 * Project creation logic
 */

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
const { execSync } = require('child_process');
const { getProjectConfig, getSkillsForCategories } = require('./prompts');
const MANIFEST = require('./manifest');
const gradient = require('gradient-string');

async function createProject(projectName, options) {
    try {
        // Determine target directory
        const isCurrentDir = !projectName || projectName === '.';
        const targetName = isCurrentDir ? path.basename(process.cwd()) : projectName;

        // Get configuration (pass targetName if specifically provided/determined as CWD target)
        // If isCurrentDir is true, we pass '.' to prompts to tell it to skip the name question
        const config = await getProjectConfig(options.skipPrompts, isCurrentDir ? targetName : projectName);

        // Resolve final project path
        const projectPath = isCurrentDir ? process.cwd() : path.resolve(process.cwd(), config.projectName);
        const finalProjectName = config.projectName;

        // Check if directory exists (only if NOT current dir)
        if (!isCurrentDir && fs.existsSync(projectPath)) {
            console.error(chalk.red(`\n❌ Directory "${finalProjectName}" already exists.\n`));
            process.exit(1);
        }

        console.log('\n');
        console.log(gradient.cristal('━'.repeat(60)));
        console.log(chalk.bold('  📦 Creating Google Antigravity Project'));
        console.log(gradient.cristal('━'.repeat(60)));
        console.log('');

        // Create project directory
        const spinner = ora('Creating project structure...').start();
        fs.mkdirSync(projectPath, { recursive: true });

        // Copy base structure
        await copyBaseStructure(projectPath, config);
        spinner.succeed('Project structure created');

        // Copy selected skills
        if (config.template !== 'minimal') {
            spinner.start('Installing selected skills...');
            await copySkills(projectPath, config.skillCategories, config.engineMode);
            spinner.succeed(`Installed ${config.skillCategories.length} skill categories`);
        }



        // Generate configuration files
        spinner.start('Generating configuration files...');
        await generateConfigs(projectPath, config);
        spinner.succeed('Configuration files created');

        // Initialize git
        spinner.start('Initializing git repository...');
        try {
            execSync('git init', { cwd: projectPath, stdio: 'ignore' });
            spinner.succeed('Git repository initialized');
        } catch (error) {
            spinner.warn('Git initialization skipped (git not found)');
        }

        // Print success message
        printSuccessMessage(finalProjectName, config);

    } catch (error) {
        console.error(chalk.red('\n❌ Error creating project:'), error.message);
        process.exit(1);
    }
}

// Helper to handle core file conflicts (auto-create backup if exists)
function handleCoreFileConflict(filePath, fileName) {
    if (!fs.existsSync(filePath)) {
        return { shouldWrite: true, targetPath: filePath };
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
        // If mode is 'standard' (Node.js focus), exclude Python files
        if (engineMode === 'standard') {
            const lowerSrc = src.toLowerCase();
            // Exclude Python source, compiled files, and package configs
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
        // 'advanced' mode (or others) includes everything
        return true;
    };
}

async function copyBaseStructure(projectPath, config) {
    const sourceAgentDir = path.join(__dirname, '..', '.agent');
    const destAgentDir = path.join(projectPath, '.agent');
    const filter = getEngineFilter(config.engineMode);
    const operationMode = config.operationMode || 'pro';
    const modeConfig = MANIFEST[operationMode];

    // Create base .agent directory
    fs.mkdirSync(destAgentDir, { recursive: true });

    // Copy 'docs' directory to project root
    const sourceDocsDir = path.join(__dirname, '..', 'docs');
    const destDocsDir = path.join(projectPath, 'docs');
    if (fs.existsSync(sourceDocsDir)) {
        await fs.copy(sourceDocsDir, destDocsDir);
    }

    // Copy common directories
    const commonDirs = []; // .shared and skills now filtered by manifest
    for (const dir of commonDirs) {
        const src = path.join(sourceAgentDir, dir);
        const dest = path.join(destAgentDir, dir);
        if (fs.existsSync(src)) {
            await fs.copy(src, dest, { filter });
        }
    }

    // Copy filtered directories: rules, agents, workflows, skills, .shared, core, scripts
    const filteredDirs = ['rules', 'agents', 'workflows', 'skills', '.shared', 'core', 'scripts'];
    for (const folder of filteredDirs) {
        const globalFolder = path.join(sourceAgentDir, folder);
        const localFolder = path.join(destAgentDir, folder);
        
        if (!fs.existsSync(localFolder)) fs.mkdirSync(localFolder, { recursive: true });

        const manifestKey = folder.startsWith('.') ? folder.slice(1) : folder;
        const whitelist = modeConfig[manifestKey];

        if (fs.existsSync(globalFolder)) {
            const files = fs.readdirSync(globalFolder);
            for (const file of files) {
                // Suffix handling (e.g., orchestrator.eco.md)
                const isEcoVariant = file.includes('.eco.md') || file.includes('.instant.md');
                const isUltraVariant = file.includes('.ultra.md') || file.includes('.creative.md');
                const isProVariant = !isEcoVariant && !isUltraVariant;
                const isDirectory = fs.lstatSync(path.join(globalFolder, file)).isDirectory();

                let targetFileName = file;
                let shouldCopy = false;

                if (whitelist === '*') {
                    // Ultra Mode: Copy everything, but prefer ultra variants
                    if (isUltraVariant) {
                        targetFileName = file.replace('.ultra.md', '.md').replace('.creative.md', '.md');
                        shouldCopy = true;
                    } else if (isProVariant) {
                        if (isDirectory) {
                            shouldCopy = true;
                        } else {
                            const ultraVariant = file.replace('.md', '.ultra.md');
                            const creativeVariant = file.replace('.md', '.creative.md');
                            if (!fs.existsSync(path.join(globalFolder, ultraVariant)) && !fs.existsSync(path.join(globalFolder, creativeVariant))) {
                                shouldCopy = true;
                            }
                        }
                    }
                } else {
                    // Eco or Pro Mode: Only copy from whitelist
                    const baseName = file.replace('.eco.md', '.md').replace('.instant.md', '.md')
                                         .replace('.ultra.md', '.md').replace('.creative.md', '.md');
                    
                    if (whitelist.includes(baseName)) {
                        if (operationMode === 'eco') {
                            if (isEcoVariant) {
                                targetFileName = baseName;
                                shouldCopy = true;
                            } else if (isProVariant) {
                                if (isDirectory) {
                                    shouldCopy = true;
                                } else {
                                    const ecoVariant = file.replace('.md', '.eco.md');
                                    const instantVariant = file.replace('.md', '.instant.md');
                                    if (!fs.existsSync(path.join(globalFolder, ecoVariant)) && !fs.existsSync(path.join(globalFolder, instantVariant))) {
                                        shouldCopy = true;
                                    }
                                }
                            }
                        } else if (operationMode === 'pro') {
                            if (isProVariant) {
                                shouldCopy = true;
                            }
                        }
                    }
                }

                if (shouldCopy) {
                    const srcPath = path.join(globalFolder, file);
                    const destPath = path.join(localFolder, targetFileName);

                    if (fs.lstatSync(srcPath).isDirectory()) {
                        // Recursive copy for skill directories
                        await fs.copy(srcPath, destPath, { filter });
                    } else {
                        // File copy
                        fs.copyFileSync(srcPath, destPath);
                    }
                }
            }
        }
    }

    // Ensure 'skills' dir exists even if empty
    fs.mkdirSync(path.join(destAgentDir, 'skills'), { recursive: true });

    // 1. Copy GEMINI.md to ROOT (User Requirement)
    // Was previously in .agent/GEMINI.md
    const geminiPath = path.join(projectPath, 'GEMINI.md');
    const geminiDecision = handleCoreFileConflict(geminiPath, 'GEMINI.md');

    if (geminiDecision.shouldWrite) {
        const geminiContent = generateGeminiMd(config.operationMode, config.language, config.industryDomain, config.agentName);
        fs.writeFileSync(geminiDecision.targetPath, geminiContent);
        console.log(chalk.green('  ✓ Created GEMINI.md (Root context)'));
    }

    // 2. Create ERRORS.md (Empty template for logging)
    const errorsPath = path.join(projectPath, 'ERRORS.md');
    if (!fs.existsSync(errorsPath)) {
        const errorsTemplate = `# 🐛 Error Log - ${config.projectName}\n\n> Tập hợp tất cả lỗi xảy ra trong quá trình phát triển (Auto-generated).\n\n---\n\n## Thống kê nhanh\n- **Tổng lỗi**: 0\n- **Đã sửa**: 0\n\n---\n\n<!-- Errors sẽ được agent tự động ghi vào đây -->\n`;
        fs.writeFileSync(errorsPath, errorsTemplate);
        console.log(chalk.green('  ✓ Created ERRORS.md'));
    }

    // 3. Copy START_HERE.md to .agent/ (Keep internal)
    const startHereSource = path.join(sourceAgentDir, config.language === 'vi' ? 'START_HERE.vi.md' : 'START_HERE.md');
    const startHereDest = path.join(destAgentDir, 'START_HERE.md');

    if (fs.existsSync(startHereSource)) {
        fs.copyFileSync(startHereSource, startHereDest);
    }

    // 4. Copy README based on Language selection
    const readmeSource = path.join(__dirname, '..', config.language === 'vi' ? 'README.vi.md' : 'README.md');
    const readmeDest = path.join(projectPath, 'README.md'); // Always name it README.md in target

    if (!fs.existsSync(readmeDest) && fs.existsSync(readmeSource)) {
        fs.copyFileSync(readmeSource, readmeDest);
        console.log(chalk.green(`  ✓ Created README.md (${config.language === 'vi' ? 'Vietnamese' : 'English'})`));
    }

    // 5. Copy .gitignore
    const gitignoreSource = path.join(__dirname, '..', '.gitignore');
    const gitignoreDest = path.join(projectPath, '.gitignore');
    if (!fs.existsSync(gitignoreDest) && fs.existsSync(gitignoreSource)) {
        fs.copyFileSync(gitignoreSource, gitignoreDest);
        console.log(chalk.green('  ✓ Created .gitignore'));
    }
}

async function copySkills(projectPath, categories, engineMode) {
    const skillsSourceDir = path.join(__dirname, '..', '.agent', 'skills');
    const skillsDestDir = path.join(projectPath, '.agent', 'skills');
    const filter = getEngineFilter(engineMode);

    // Check if source directory exists
    if (!fs.existsSync(skillsSourceDir)) {
        console.warn(chalk.yellow(`\n⚠️  Warning: Skills directory not found at ${skillsSourceDir}`));
        console.warn('   The .agent folder might be missing from the package.');
        return;
    }

    const selectedSkills = getSkillsForCategories(categories);

    for (const skill of selectedSkills) {
        const skillPath = path.join(skillsSourceDir, skill);
        if (fs.existsSync(skillPath)) {
            const destPath = path.join(skillsDestDir, skill);
            await fs.copy(skillPath, destPath, { filter });
        } else {
            // Optional: Warn about missing specific skills if needed
        }
    }
}

async function copyWorkflows(projectPath, workflows) {
    const workflowsSourceDir = path.join(__dirname, '..', '.agent', 'workflows');
    const workflowsDestDir = path.join(projectPath, '.agent', 'workflows');

    for (const workflow of workflows) {
        const workflowFile = `${workflow}.md`;
        const source = path.join(workflowsSourceDir, workflowFile);
        if (fs.existsSync(source)) {
            await fs.copy(source, path.join(workflowsDestDir, workflowFile));
        }
    }
}



async function generateConfigs(projectPath, config) {
    // Generate package.json only if it doesn't exist
    const packageJsonPath = path.join(projectPath, 'package.json');

    if (!fs.existsSync(packageJsonPath)) {
        const packageJson = {
            name: config.projectName,
            version: '1.0.0',
            description: 'AI Agent project powered by Google Antigravity',
            private: true,
            scripts: {
                dev: 'echo "No dev server configured"',
                build: 'echo "No build script"'
            },
            keywords: ['ai', 'agent', 'google-antigravity'],
            author: '',
            license: 'MIT'
        };

        fs.writeFileSync(
            packageJsonPath,
            JSON.stringify(packageJson, null, 2)
        );
        console.log(chalk.green('  ✓ Created package.json'));
    } else {
        console.log(chalk.yellow('  ℹ️  Skipped package.json (already exists)'));
    }

    // Generate .editorconfig only if it doesn't exist
    const editorconfigPath = path.join(projectPath, '.editorconfig');
    if (!fs.existsSync(editorconfigPath)) {
        const editorConfig = `root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
indent_style = space
indent_size = 2
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
`;
        fs.writeFileSync(editorconfigPath, editorConfig);
        console.log(chalk.green('  ✓ Created .editorconfig'));
    }

    // Generate .gitattributes only if it doesn't exist
    const gitAttributesPath = path.join(projectPath, '.gitattributes');
    if (!fs.existsSync(gitAttributesPath)) {
        const gitAttributes = `* text=auto eol=lf
*.js text eol=lf
*.sh text eol=lf
bin/* text eol=lf
`;
        fs.writeFileSync(gitAttributesPath, gitAttributes);
        console.log(chalk.green('  ✓ Created .gitattributes'));
    }
}


function generateGeminiMd(operationMode = 'standard', language = 'en', industry = 'other', agentName = 'Antigravity') {
    const strictness = {
        creative: {
            autoRun: 'false',
            confirmLevel: 'Ask before every file modification and command execution'
        },
        standard: {
            autoRun: 'true for safe read operations',
            confirmLevel: 'Ask before destructive operations'
        },
        instant: {
            autoRun: 'true',
            confirmLevel: 'Minimal confirmation, high autonomy (MVP Mode)'
        }
    };

    const config = strictness[operationMode] || strictness.standard;
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

## 🎯 Primary Focus: ${industryFocus.toUpperCase()}
> **Priority**: Optimize all solutions for this domain.

## Agent Behavior Rules: ${operationMode.toUpperCase()}

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
The following **13 Shared Modules** in \`.agent/.shared\` must be respected:
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

## Custom Instructions

Add your project-specific instructions here.

---
*Generated by Google Antigravity*
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

## 🎯 Trọng tâm Chính: ${industryFocus.toUpperCase()}
> **Ưu tiên**: Tối ưu hóa mọi giải pháp cho lĩnh vực này.

## Quy tắc hành vi: ${operationMode.toUpperCase()}

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
**13 Module Chia sẻ** sau trong \`.agent/.shared\` phải được tuân thủ:
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

## Hướng dẫn tùy chỉnh

Thêm các hướng dẫn cụ thể cho dự án của bạn tại đây.

---
*Được tạo bởi Google Antigravity*
`;

    return isVi ? contentVi : contentEn;
}

function printSuccessMessage(projectName, config) {
    console.log('\n');
    console.log(gradient.rainbow('━'.repeat(60)));
    console.log(gradient.morning.multiline('  ✓ SUCCESS! Project Ready'));
    console.log(gradient.rainbow('━'.repeat(60)));

    // Concise config display
    console.log('');
    console.log(chalk.bold('📋 Config'));
    console.log(chalk.gray('  Project:   ') + gradient.cristal(projectName));
    console.log(chalk.gray('  Template:  ') + chalk.cyan(config.template));
    console.log(chalk.gray('  Skills:    ') + chalk.cyan(config.skillCategories?.join(', ') || 'none'));

    // AI Activation Instructions (NEW)
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

    // Stats Display
    console.log('');
    console.log(gradient.pastel('  ✨ Installed: ') + chalk.white('20+ Master Skills') + chalk.gray(' • ') + chalk.white('15+ Agents') + chalk.gray(' • ') + chalk.white('13 Shared Modules'));

    console.log('');
    console.log(chalk.dim(config.language === 'vi' ? '     AI sẽ tự động tải các kỹ năng và quy tắc.' : '     The AI will load all skills and rules automatically.'));
    console.log(gradient.pastel('━'.repeat(60)));
    console.log('');
    console.log(chalk.gray('  Developed with 💡 by Dokhacgiakhoa'));
    console.log('');
}

module.exports = {
    createProject,
    generateGeminiMd,
    copyBaseStructure,
    copySkills,
    copyWorkflows
};
