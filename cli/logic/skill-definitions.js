/**
 * Centralized definition of all Agent Skills and their categories.
 */

const skillCategories = {
  webdev: {
    name: 'Web High-Performance (Vercel & Antfu Grade)',
    skills: [
      'modern-web-architect',
      'full-stack-scaffold',
      'api-documenter',
      'i18n-localization',
      'modern-web-performance',
      'nextjs-react-expert',
      'tailwind-patterns',
      'frontend-design',
      'antfu-coding-style',
      'lint-and-validate'
    ]
  },
  mobile: {
    name: 'Mobile Development (iOS, Android, Cross-Platform)',
    skills: [
      'mobile-design',
      'game-development',
      'react-native-best-practices'
    ]
  },
  ai: {
    name: 'Advanced AI & Research (AutoGen & LangGraph)',
    skills: [
      'ai-engineer',
      'geo-fundamentals',
      'langgraph-engineering',
      'intelligent-routing',
      'parallel-agents',
      'agent-orchestration',
      'behavioral-modes'
    ]
  },
  research: {
    name: 'Strategic Research & Wisdom (Fabric Patterns)',
    skills: [
      'strategic-research',
      'brainstorming',
      'plan-writing',
      'architecture',
      'systematic-debugging'
    ]
  },
  uiux: {
    name: 'UI/UX Pro Max (NextLevel Aesthetics)',
    skills: [
      'ui-ux-pro-max-skill',
      'frontend-design',
      'web-design-guidelines'
    ]
  },
  devops: {
    name: 'DevOps & Cloud (Enterprise Grade)',
    skills: [
      'cloud-architect-master',
      'deployment-procedures',
      'deployment-engineer',
      'incident-responder',
      'mcp-builder',
      'server-management',
      'vercel-deploy',
      'bash-linux',
      'powershell-windows'
    ]
  },
  security: {
    name: 'Security & Compliance (Fintech Standards)',
    skills: [
      'security-auditor',
      'penetration-tester-master',
      'production-code-audit',
      'vulnerability-scanner',
      'red-team-tactics',
      'malware-analyst'
    ]
  },
  growth: {
    name: 'Growth & Business Intelligence',
    skills: [
      'cro-expert-kit',
      'seo-expert-kit',
      'seo-fundamentals',
      'database-design',
      'database-migration',
      'performance-engineer',
      'performance-profiling'
    ]
  },
  maker: {
    name: 'Maker & Indie Hacking (Sickn33) ',
    skills: [
      'app-builder',
      'api-patterns',
      'nodejs-best-practices',
      'python-patterns',
      'filesystem-mcp',
      'github-mcp',
      'notion-mcp',
      'postgres-mcp',
      'puppeteer-mcp'
    ]
  },
  testing: {
    name: 'Professional QA & Testing',
    skills: [
      'tdd-master-workflow',
      'tdd-workflow',
      'testing-patterns',
      'webapp-testing',
      'code-review-checklist'
    ]
  }
};

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
  skillCategories,
  getSkillsForCategories
};
