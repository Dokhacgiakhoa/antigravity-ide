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
      message: (prev, values) => values.language === 'vi' ? 'Chọn Loại Động cơ Agent (Engine):' : 'Select Agent Engine:',
      choices: (prev, values) => values.language === 'vi' ? [
        { title: '⚡ Standard (Node.js) - Tốc độ cao, gọn nhẹ, không cần cấu hình', value: 'standard' },
        { title: '🧠 Advanced (Python) - Tối ưu lập trình AI chuyên sâu & Khoa học dữ liệu', value: 'advanced' },
      ] : [
        { title: '⚡ Standard (Node.js) - Fast, Lightweight, Zero-Config', value: 'standard' },
        { title: '🧠 Advanced (Python) - Deep AI, Data Science support', value: 'advanced' },
      ],
      initial: 0
    },
    {
      type: 'text',
      name: 'agentName',
      message: (prev, values) => values.language === 'vi' ? 'Đặt tên định danh cho AI Agent của sếp (Ví dụ: Jarvis, Antigravity):' : 'Choose a name for your AI Agent (e.g., Jarvis, Antigravity):',
      validate: (value) => value.length < 2 ? (process.env.LANG?.includes('vi') ? 'Tên Agent phải có ít nhất 2 ký tự' : 'Name must be at least 2 characters long') : true
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
  // PER-INDUSTRY WORKFLOW MAPPING
  // This ensures users get the right "Tools" for their "Job"
  const baseWorkflows = ['git', 'plan', 'status']; // Core workflows for everyone

  const industryWorkflows = {
    finance: ['security', 'audit', 'test'],      // Finance needs security & audit
    education: ['explain', 'visually', 'test'],   // Education needs clarity
    fnb: ['performance', 'mobile', 'deploy'],     // F&B needs speed & mobile
    personal: ['blog', 'portfolio', 'seo'],       // Personal needs SEO & content
    healthcare: ['compliance', 'security', 'audit'], // Healthcare needs compliance
    logistics: ['api', 'realtime', 'deploy'],     // Logistics needs API & realtime
    other: ['create', 'debug', 'enhance']         // General needs basic dev cycle
  };

  // Map industry selection to specific workflow files
  // Note: These map to .md files in .agent/workflows/
  // We use a safe fallback if specific industry workflows aren't fully modularized yet
  const specificWorkflows = industryWorkflows[basics.industryDomain] || ['create', 'debug', 'enhance'];
  
  // Combine all valid workflows
  // Filter to ensure we only include workflows that actually exist in our system
  const availableWorkflows = [
    'audit', 'brainstorm', 'create', 'debug', 'deploy', 'document', 'enhance', 
    'monitor', 'onboard', 'orchestrate', 'plan', 'preview', 'security', 'seo', 
    'status', 'test', 'ui-ux-pro-max'
  ];

  /* 
    Smart Logic:
    - Always include: git (internal), plan, status, debug, enhance
    - Add Industry-specific workflows (specificWorkflows)
    - Add Skill-based workflows
  */
  
  const finalWorkflows = new Set(['plan', 'status', 'brainstorm', 'debug', 'enhance']); 

  // Add industry-specific workflows
  if (specificWorkflows && Array.isArray(specificWorkflows)) {
    specificWorkflows.forEach(w => {
      // Only add if it's a valid workflow (exists in availableWorkflows)
      if (availableWorkflows.includes(w)) {
        finalWorkflows.add(w);
      }
    });
  }

  // Logic based on Skill Categories (users selected implicitly or explicitly)
  // Since we load ALL skills by default for industry presets, we infer based on Industry
  
  if (basics.industryDomain === 'personal' || basics.industryDomain === 'fnb') {
    finalWorkflows.add('ui-ux-pro-max');
  }

  if (basics.industryDomain === 'finance' || basics.industryDomain === 'healthcare') {
    finalWorkflows.add('orchestrate'); // For complex logic
  }

  if (basics.industryDomain === 'logistics' || basics.industryDomain === 'other') {
    finalWorkflows.add('create');
  }

  const settings = {
    template: 'standard',
    rules: commonRules,
    workflows: Array.from(finalWorkflows),
    packageManager: 'npm'
  };
  
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
