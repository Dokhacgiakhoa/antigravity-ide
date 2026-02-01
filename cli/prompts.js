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
    Order: Language -> Name -> Scale -> Industry -> Agent Name
  */
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
      name: 'scale', // Maps to 'rules'
      message: (prev, values) => values.language === 'vi' ? 'Quy mô dự án:' : 'Project Scale:',
      choices: (prev, values) => values.language === 'vi' ? [
        { title: '👤 Cá nhân (Personal) - Cơ chế linh hoạt, tự chủ', value: 'flexible' },
        { title: '👥 Team (Nhóm) - Cân bằng, hỏi trước khi sửa file', value: 'balanced' },
        { title: '🏢 Doanh nghiệp (Enterprise) - Nghiêm ngặt, kiểm soát 100%', value: 'strict' }
      ] : [
        { title: '👤 Personal - Flexible, High Autonomy', value: 'flexible' },
        { title: '👥 Team - Balanced, Confirm core changes', value: 'balanced' },
        { title: '🏢 Enterprise - Strict, 100% Control', value: 'strict' }
      ],
      initial: 0
    },
    {
      type: 'select',
      name: 'industryDomain',
      message: (prev, values) => values.language === 'vi' ? 'Lĩnh vực dự án (Industry):' : 'Select Industry Domain:',
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
    },
    {
      type: 'text',
      name: 'agentName',
      message: (prev, values) => values.language === 'vi' ? 'Đặt tên cho Agent (VD: Jarvis, Friday):' : 'Name your Agent (e.g., Jarvis, Friday):',
      validate: (value) => value.length < 2 ? (process.env.LANG?.includes('vi') ? 'Tên Agent phải có ít nhất 2 ký tự' : 'Name must be at least 2 characters long') : true
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

  // PRESETS CONFIGURATION
  const baseWorkflows = ['git', 'plan', 'status'];

  const industryWorkflows = {
    finance: ['security', 'audit', 'test'],
    education: ['explain', 'visually', 'test'],
    fnb: ['performance', 'mobile', 'deploy'],
    personal: ['blog', 'portfolio', 'seo'],
    healthcare: ['compliance', 'security', 'audit'],
    logistics: ['api', 'realtime', 'deploy'],
    other: ['create', 'debug', 'enhance']
  };

  const specificWorkflows = industryWorkflows[responses.industryDomain] || ['create', 'debug', 'enhance'];
  
  const availableWorkflows = [
    'audit', 'brainstorm', 'create', 'debug', 'deploy', 'document', 'enhance', 
    'monitor', 'onboard', 'orchestrate', 'plan', 'preview', 'security', 'seo', 
    'status', 'test', 'ui-ux-pro-max',
    'explain', 'visually', 'mobile', 'performance', 'compliance', 'api', 'realtime', 'blog', 'portfolio'
  ];

  const finalWorkflows = new Set(['plan', 'status', 'brainstorm', 'debug', 'enhance']);

  // Add industry-specific workflows
  if (specificWorkflows && Array.isArray(specificWorkflows)) {
    specificWorkflows.forEach(w => {
      if (availableWorkflows.includes(w)) {
        finalWorkflows.add(w);
      }
    });
  }

  // Logic based on Industry and implicit skills
  if (responses.industryDomain === 'personal' || responses.industryDomain === 'fnb') {
    finalWorkflows.add('ui-ux-pro-max');
  }
  if (responses.industryDomain === 'finance' || responses.industryDomain === 'healthcare') {
    finalWorkflows.add('orchestrate');
  }
  if (responses.industryDomain === 'logistics' || responses.industryDomain === 'other') {
    finalWorkflows.add('create');
  }

  const settings = {
    template: 'standard',
    rules: responses.scale,
    workflows: Array.from(finalWorkflows),
    packageManager: 'npm',
    engineMode: 'standard' // Default since prompt was removed
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
