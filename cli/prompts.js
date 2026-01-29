/**
 * Interactive prompts for project configuration
 */

const prompts = require('prompts');
const chalk = require('chalk');
const gradient = require('gradient-string');
const packageJson = require('../package.json');

// Display concise banner with gradient
function displayBanner() {
  console.clear();
  console.log('');
  console.log(gradient.rainbow('━'.repeat(60)));
  console.log(gradient.pastel.multiline('    ___          __  _ ______                 _ __       '));
  console.log(gradient.pastel.multiline('   /   |  ____  / /_(_) ____/________ __   __(_) /___  __'));
  console.log(gradient.pastel.multiline('  / /| | / __ \\/ __/ / / __/ ___/ __ `/ | / / / __/ / / /'));
  console.log(gradient.pastel.multiline(' / ___ |/ / / / /_/ / /_/ / /  / /_/ /| |/ / / /_/ /_/ / '));
  console.log(gradient.pastel.multiline('/_/  |_/_/ /_/\\__/_/\\____/_/   \\__,_/ |___/_/\\__/\\__, /  '));
  console.log(gradient.pastel.multiline('                                                 /____/   '));
  console.log(chalk.gray(`  Google Antigravity • v${packageJson.version}`));
  console.log(chalk.gray('  Developed with 💡 by Dokhacgiakhoa'));
  console.log(gradient.rainbow('━'.repeat(60)));
  console.log('');
}

const skillCategories = {
  webdev: {
    name: 'Web High-Performance',
    skills: [
      'modern-web-architect',
      'full-stack-scaffold',
      'api-documenter',
      'i18n-localization'
    ]
  },
  mobile: {
    name: 'Mobile & Game',
    skills: [
      'mobile-design',
      'game-development',
      'i18n-localization'
    ]
  },
  devops: {
    name: 'DevOps & Cloud',
    skills: [
      'cloud-architect-master',
      'deployment-engineer',
      'incident-responder',
      'mcp-builder'
    ]
  },
  security: {
    name: 'Security & Audit',
    skills: [
      'security-auditor',
      'penetration-tester-master',
      'production-code-audit',
      'vulnerability-scanner'
    ]
  },
  ai: {
    name: 'AI & ML',
    skills: [
      'ai-engineer',
      'geo-fundamentals',
      'prompt-engineer' // Assuming this exists or will be mapped to ai-engineer capabilities
    ]
  },
  growth: { // Renamed from data for better fit
    name: 'Growth & Data',
    skills: [
      'cro-expert-kit',
      'seo-expert-kit',
      'database-migration',
      'performance-engineer'
    ]
  }
};

async function getProjectConfig(skipPrompts = false, predefinedName = null) {
  if (skipPrompts) {
    return {
      projectName: predefinedName || 'my-agent-project',
      template: 'standard',
      rules: 'balanced',
      skillCategories: ['webdev'],
      workflows: ['git', 'testing'],
      includeDashboard: false,
      language: 'en',
      packageManager: 'npm',
      engineMode: 'standard'
    };
  }

  // Display beautiful banner
  displayBanner();

  console.log(chalk.bold.cyan('🚀 Project Setup Wizard\n'));
  console.log(chalk.gray('Answer a few questions to configure your AI Agent project...\n'));

  /* 
    PHASE 1: BASIC INFORMATION
  */
  const basics = await prompts([
    {
      type: predefinedName ? null : 'text',
      name: 'projectName',
      message: 'Project name:',
      initial: 'my-agent-project',
      validate: (value) => {
        if (!/^[a-z0-9-_]+$/.test(value)) {
          return 'Project name can only contain lowercase letters, numbers, hyphens, and underscores';
        }
        return true;
      }
    },
    {
      type: 'select',
      name: 'language',
      message: 'Select Language (en/vi):',
      choices: [
        { title: '1. en', value: 'en' },
        { title: '2. vi', value: 'vi' }
      ],
      initial: 0
    },
    {
      type: 'select',
      name: 'engineMode',
      message: (prev, values) => values.language === 'vi' ? 'Chọn Agent Engine:' : 'Select Agent Engine:',
      choices: (prev, values) => values.language === 'vi' ? [
        { title: '⚡ Standard (Node.js) - Nhanh, nhẹ, không cấu hình', value: 'standard' },
        { title: '🧠 Advanced (Python) - Hỗ trợ AI sâu, Khoa học dữ liệu', value: 'advanced' },
      ] : [
        { title: '⚡ Standard (Node.js) - Fast, Lightweight, Zero-Config', value: 'standard' },
        { title: '🧠 Advanced (Python) - Deep AI, Data Science support', value: 'advanced' },
      ],
      initial: 0
    },
    {
      type: 'text',
      name: 'agentName',
      message: (prev, values) => values.language === 'vi' ? 'Đặt tên cho AI Agent của sếp (ví dụ: Jarvis, Antigravity):' : 'Choose a name for your AI Agent (e.g., Jarvis, Antigravity):',
      initial: 'Antigravity',
      validate: (value) => value.length < 2 ? 'Name must be at least 2 characters long' : true
    },
    {
      type: 'select',
      name: 'industryDomain',
      message: (prev, values) => values.language === 'vi' ? 'Chọn Lĩnh vực dự án (Industry):' : 'Select Industry Domain:',
      choices: (prev, values) => values.language === 'vi' ? [
        { title: '💰 Finance (Tài chính - Fintech)', value: 'finance' },
        { title: '🎓 Education (Giáo dục - EdTech)', value: 'education' },
        { title: '🍔 F&B / Restaurant (Nhà hàng)', value: 'fnb' },
        { title: '👤 Personal / Portfolio (Cá nhân)', value: 'personal' },
        { title: '🏥 Healthcare (Y tế - HealthTech)', value: 'healthcare' },
        { title: '🚚 Logistics (Vận tải)', value: 'logistics' },
        { title: '🔮 Other (Khác - Web/App cơ bản)', value: 'other' }
      ] : [
        { title: '💰 Finance (Fintech)', value: 'finance' },
        { title: '🎓 Education (EdTech)', value: 'education' },
        { title: '🍔 F&B / Restaurant', value: 'fnb' },
        { title: '👤 Personal / Portfolio', value: 'personal' },
        { title: '🏥 Healthcare (HealthTech)', value: 'healthcare' },
        { title: '🚚 Logistics', value: 'logistics' },
        { title: '🔮 Other (General Web/App)', value: 'other' }
      ],
      initial: 6
    }
  ], {
    onCancel: () => {
      console.log(chalk.red('\n✖ Operation cancelled'));
      process.exit(0);
    }
  });
  
  // If predefinedName was used, inject it back into basics if it wasn't prompted
  if (predefinedName) {
    basics.projectName = predefinedName;
  }

  // PRESETS CONFIGURATION
  // All selections now use preset values with full skills
  const commonWorkflows = ['git'];
  const commonRules = 'balanced';
  const settings = {
    template: 'standard',
    rules: commonRules,
    workflows: commonWorkflows,
    packageManager: 'npm'
  };

  // For industry presets, we install ALL skills ("tải đầy đủ")
  // but the selected industry will be used to set priority in GEMINI.md
  
  // Return configuration with presets
  return { ...basics, ...settings, skillCategories: Object.keys(skillCategories) };


  

}

function getSkillsForCategories(categories) {
  const skills = [];
  categories.forEach(category => {
    if (skillCategories[category]) {
      skills.push(...skillCategories[category].skills);
    }
  });
  return skills;
}

module.exports = {
  getProjectConfig,
  getSkillsForCategories,
  skillCategories
};
