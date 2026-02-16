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
      'prompt-engineer'
    ]
  },
  growth: {
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
      language: 'en',
      operationMode: 'standard',
      engineMode: 'standard'
    };
  }

  // Display beautiful banner
  displayBanner();

  console.log(chalk.bold.cyan('🚀 Project Setup Wizard\n'));
  console.log(chalk.gray('Answer a few questions to configure your AI Agent project...\n'));

  const responses = await prompts([
    {
      type: 'select',
      name: 'language',
      message: 'Select Language / Chọn ngôn ngữ:',
      choices: [
        { title: '1. English', value: 'en' },
        { title: '2. Tiếng Việt', value: 'vi' }
      ],
      initial: 1
    },
    {
      type: predefinedName ? null : 'text',
      name: 'projectName',
      message: (prev, values) => values.language === 'vi' ? 'Tên dự án (Project name):' : 'Project name:',
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
      name: 'operationMode',
      message: (prev, values) => {
        const lang = values.language;
        return lang === 'vi'
          ? 'Chọn Chế độ Vận hành (Phụ thuộc vào tài khoản AI của bạn):'
          : 'Select Operation Mode (Based on your AI Account):';
      },
      choices: (prev, values) => {
        const lang = values.language;
        return [
          {
            title: lang === 'vi'
              ? '🌿 ECO (Siêu tiết kiệm - Khuyên dùng cho Tài khoản Free)'
              : '🌿 ECO (Economy - Best for Free accounts)',
            value: 'eco'
          },
          {
            title: lang === 'vi'
              ? '🏢 PRO (Chuyên nghiệp - Gemini Pro - Hỗ trợ Plugin mở rộng)'
              : '🏢 PRO (Professional - Gemini Pro - Supports Plugin extensions)',
            value: 'pro'
          },
          {
            title: lang === 'vi'
              ? '🌌 ULTRA (Sáng tạo - Yêu cầu Gemini Ultra)'
              : '🌌 ULTRA (Infinite - Requires Gemini Ultra)',
            value: 'ultra'
          }
        ];
      },
      initial: 1
    }
  ], {
    onCancel: () => {
      console.log(chalk.red('\n✖ Operation cancelled'));
      process.exit(0);
    }
  });
  
  // Inject predefined name if it exists (so logic downstream works)
  if (predefinedName) {
    responses.projectName = predefinedName;
  }

  const settings = {
    engineMode: responses.operationMode === 'creative' ? 'advanced' : 'standard',
    agentName: 'Antigravity',
    projectScale: responses.operationMode
  };
  
  // Return configuration with presets
  return { ...responses, ...settings, skillCategories: Object.keys(skillCategories) };
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
