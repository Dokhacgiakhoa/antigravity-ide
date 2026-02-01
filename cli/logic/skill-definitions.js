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
      'react-best-practices',
      'tailwind-patterns',
      'frontend-design',
      'edge-runtime-expert',
      'turborepo-master',
      'vitest-pro'
    ]
  },
  ai: {
    name: 'Advanced AI & Research (AutoGen & LangGraph)',
    skills: [
      'ai-engineer',
      'geo-fundamentals',
      'prompt-engineer',
      'voice-ai-engine',
      'rag-architect',
      'multi-agent-orchestration',
      'stateful-graph-design',
      'agent-evaluation-system'
    ]
  },
  research: {
    name: 'Strategic Research & Wisdom (Fabric Patterns)',
    skills: [
      'paper-analysis-pro',
      'market-competitor-intelligence',
      'wisdom-extraction-engine',
      'strategic-problem-solving',
      'content-synthesis-master'
    ]
  },
  uiux: {
    name: 'UI/UX Pro Max (NextLevel Aesthetics)',
    skills: [
      'magic-ui-patterns',
      'framer-motion-master',
      'micro-interactions-design',
      'premium-glassmorphism-kit',
      'design-system-architect'
    ]
  },
  devops: {
    name: 'DevOps & Cloud (Enterprise Grade)',
    skills: [
      'cloud-architect-master',
      'deployment-engineer',
      'incident-responder',
      'mcp-builder',
      'docker-expert',
      'k8s-orchestration',
      'zero-downtime-deployment'
    ]
  },
  security: {
    name: 'Security & Compliance (Fintech Standards)',
    skills: [
      'security-auditor',
      'penetration-tester-master',
      'production-code-audit',
      'vulnerability-scanner',
      'owasp-top-10',
      'gdpr-compliance-expert'
    ]
  },
  growth: {
    name: 'Growth & Business Intelligence',
    skills: [
      'cro-expert-kit',
      'seo-expert-kit',
      'database-migration',
      'performance-engineer',
      'copywriting-master',
      'paid-ads-specialist',
      'product-metrics-analytics'
    ]
  },
  maker: {
    name: 'Maker & Indie Hacking (Sickn33 & Numman-Ali)',
    skills: [
      'telegram-bot-builder',
      'viral-generator',
      'product-hunt-launch',
      'nocode-automation',
      'rapid-mvp-scaffolding'
    ]
  },
  testing: {
    name: 'Professional QA & Testing',
    skills: [
      'tdd-master-workflow',
      'qa-automation',
      'cypress-testing',
      'jest-expert',
      'load-stress-testing'
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
