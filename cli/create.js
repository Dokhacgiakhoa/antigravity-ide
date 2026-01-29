/**
 * Project creation logic
 */

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
const { execSync } = require('child_process');
const { getProjectConfig, getSkillsForCategories } = require('./prompts');
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
    if (config.template !== 'minimal' && config.skillCategories?.length > 0) {
      spinner.start('Installing selected skills...');
      await copySkills(projectPath, config.skillCategories, config.engineMode);
      spinner.succeed(`Installed ${config.skillCategories.length} skill categories`);
    }

    // Copy workflows
    if (config.workflows?.length > 0) {
      spinner.start('Setting up workflows...');
      await copyWorkflows(projectPath, config.workflows);
      spinner.succeed(`Configured ${config.workflows.length} workflows`);
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
  
  // Create base .agent directory
  fs.mkdirSync(destAgentDir, { recursive: true });

  // Copy all subdirectories from .agent (except skills, which are handled separately)
  if (fs.existsSync(sourceAgentDir)) {
    const entries = fs.readdirSync(sourceAgentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.name === 'skills' || entry.name === 'GEMINI.md' || entry.name === 'START_HERE.md') {
        continue; // Handle these separately
      }
      
      const sourceEntryPath = path.join(sourceAgentDir, entry.name);
      const destEntryPath = path.join(destAgentDir, entry.name);
      
      await fs.copy(sourceEntryPath, destEntryPath, { filter });
    }
  }

  // Ensure 'skills' dir exists even if empty
  fs.mkdirSync(path.join(destAgentDir, 'skills'), { recursive: true });

  // Copy GEMINI.md based on rules
  const geminiContent = generateGeminiMd(config.rules, config.language, config.industryDomain, config.agentName);
  fs.writeFileSync(path.join(destAgentDir, 'GEMINI.md'), geminiContent);

  // Copy START_HERE.md (onboarding guide)
  const startHereSource = path.join(sourceAgentDir, 'START_HERE.md');
  if (fs.existsSync(startHereSource)) {
    fs.copyFileSync(startHereSource, path.join(destAgentDir, 'START_HERE.md'));
  }

  // Copy basic files (README, .gitignore)
  const files = ['README.md', '.gitignore'];
  const rootDir = path.join(__dirname, '..');
  
  files.forEach(file => {
    const source = path.join(rootDir, file);
    const dest = path.join(projectPath, file);
    if (fs.existsSync(source)) {
      fs.copyFileSync(source, dest);
    }
  });
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
  // Generate package.json
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
    path.join(projectPath, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );

  // Generate .editorconfig
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
  fs.writeFileSync(path.join(projectPath, '.editorconfig'), editorConfig);
}

function generateGeminiMd(rules, language = 'en', industry = 'other', agentName = 'Antigravity') {
  const strictness = {
    strict: {
      autoRun: 'false',
      confirmLevel: 'Ask before every file modification and command execution'
    },
    balanced: {
      autoRun: 'true for safe read operations',
      confirmLevel: 'Ask before destructive operations'
    },
    flexible: {
      autoRun: 'true',
      confirmLevel: 'Minimal confirmation, high autonomy'
    }
  };

  const config = strictness[rules] || strictness.balanced;
  const isVi = language === 'vi';
  
  // Define Industry Focus strings
  const industryMap = {
    finance: isVi ? 'Tài chính & Fintech (An toàn, Chính xác)' : 'Finance & Fintech (Security, Precision)',
    education: isVi ? 'Giáo dục & EdTech (Trực quan, Giải thích)' : 'Education & EdTech (Intuitive, Explanatory)',
    fnb: isVi ? 'F&B & Nhà hàng (Tốc độ, Tiện lợi)' : 'F&B & Restaurant (Speed, Convenience)',
    personal: isVi ? 'Cá nhân & Portfolio (Sáng tạo, Cá nhân hóa)' : 'Personal & Portfolio (Creative, Personalized)',
    healthcare: isVi ? 'Y tế & Sức khỏe (Bảo mật, Tin cậy)' : 'Healthcare & HealthTech (Privacy, Reliability)',
    logistics: isVi ? 'Vận tải & Logistics (Hiệu quả, Real-time)' : 'Logistics & Supply Chain (Efficiency, Real-time)',
    other: isVi ? 'Phát triển chung' : 'General Development',
    other: isVi ? 'Phát triển chung' : 'General Development'
  };
  
  const industryFocus = industryMap[industry] || industryMap.other;

  const contentEn = `---
trigger: always_on
---

# GEMINI.md - Agent Configuration

This file controls the behavior of your AI Agent.

## 🤖 Agent Identity: ${agentName}
> **Identity Verification**: You are ${agentName}. Always reflect this identity in your tone and decision-making.

## 🎯 Primary Focus: ${industryFocus.toUpperCase()}
> **Priority**: Optimize all solutions for this domain.

## Agent Behavior Rules: ${rules.toUpperCase()}

**Auto-run Commands**: ${config.autoRun}
**Confirmation Level**: ${config.confirmLevel}

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
> **Xác minh danh tính**: Bạn là ${agentName}. Luôn thể hiện danh tính này trong phong thái và cách ra quyết định.

## 🎯 Trọng tâm Chính: ${industryFocus.toUpperCase()}
> **Ưu tiên**: Tối ưu hóa mọi giải pháp cho lĩnh vực này.

## Quy tắc hành vi: ${rules.toUpperCase()}

**Tự động chạy lệnh**: ${config.autoRun}
**Mức độ xác nhận**: ${config.confirmLevel === 'Minimal confirmation, high autonomy' ? 'Tối thiểu, tự chủ cao' : 'Hỏi trước các tác vụ quan trọng'}

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
  
  if (config.language === 'vi') {
    console.log(chalk.gray('  1. Mở dự án:      ') + chalk.white(`cd ${projectName}`));
    console.log(chalk.gray('  2. Mở khung chat: ') + chalk.white('(Claude, Gemini, v.v...)'));
    console.log(chalk.gray('  3. Kích hoạt:     ') + chalk.green('Đọc nội dung .agent/GEMINI.md'));
  } else {
    console.log(chalk.gray('  1. Open project:  ') + chalk.white(`cd ${projectName}`));
    console.log(chalk.gray('  2. Open AI chat:  ') + chalk.white('(Claude, Gemini, etc.)'));
    console.log(chalk.gray('  3. Activate:      ') + chalk.green('Read .agent/START_HERE.md'));
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
  createProject
};
