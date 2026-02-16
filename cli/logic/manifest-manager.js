/**
 * manifest-manager.js
 * Central Registry for file mappings based on Scale and Product Type.
 * This is the SOURCE OF TRUTH for what gets installed.
 */

const MANIFEST = {
    // 1. RULES MAPPING (Governance Level)
    rules: {
        // 🍜 Instant (MVP, Speed, Frontend Focus)
        instant: [
            'GEMINI.md',           // Core Constitution (Simple version)
            'code-quality.md',      // Basic standards
            'error-logging.md',     // Mandatory: Error tracking
            'frontend.md',          // UI/UX focus
            'debug.md',             // Basic debugging
            'docs-update.md'        // Helper
        ],
        // 🏢 SME (Stability, Operations, Clean Code)
        sme: [
            'GEMINI.md',
            'code-quality.md',
            'frontend.md',
            'backend.md',           // Critical for ops
            'security.md',          // Basic security
            'error-logging.md',     // Mandatory for ops
            'runtime-watchdog.md',  // Safety first
            'system-update.md',     // Maintenance
            'testing-standard.md',  // Testing is key for SME
            'debug.md',
            'docs-update.md'
        ],
        // 🎨 Creative (Research, Full Features, Sandbox)
        creative: [
            'GEMINI.md',
            'architecture-review.md', // Research focus
            'business.md',            // Strategy focus
            'compliance.md',          // Enterprise ready
            'malware-protection.md',  // Advanced security
            // + All SME rules
            'code-quality.md',
            'frontend.md',
            'backend.md',
            'security.md',
            'error-logging.md',
            'runtime-watchdog.md',
            'system-update.md',
            'testing-standard.md',
            'debug.md',
            'docs-update.md'
        ]
    },

    // 2. AGENTS MAPPING (Removed for Single-Context Efficiency)
    agents: {
        instant: [],
        sme: [],
        creative: []
    },

    // 3. PRODUCT SPECIFIC ADD-ONS
    products: {
        user_app: {
            rules: ['frontend.md'],
            agents: ['frontend-specialist.md', 'mobile-developer.md']
        },
        dev_tool: {
            rules: ['backend.md', 'code-quality.md'],
            agents: ['backend-specialist.md', 'devops-engineer.md']
        },
        ai_agent: {
            rules: ['backend.md', 'architecture-review.md'],
            agents: ['orchestrator.md', 'backend-specialist.md']
        },
        digital_asset: {
            rules: ['frontend.md', 'business.md'],
            agents: ['seo-specialist.md', 'frontend-specialist.md']
        }
    }
};

/**
 * Returns the list of Rules files to install
 * @param {string} scale - 'instant' | 'sme' | 'creative'
 * @param {string} product - 'user_app' | ...
 */
function getRulesList(scale, product) {
    const scaleRules = MANIFEST.rules[scale] || MANIFEST.rules.instant;
    const productRules = MANIFEST.products[product]?.rules || [];
    
    // Merge and deduplicate
    return Array.from(new Set([...scaleRules, ...productRules]));
}

/**
 * Returns the list of Agent files to install
 * @param {string} scale - 'instant' | 'sme' | 'creative'
 * @param {string} product - 'user_app' | ...
 * @param {Array} allAgents - List of all available agents files (for wildcard expansion)
 */
function getAgentsList(scale, product, allAgents = []) {
    let scaleAgents = MANIFEST.agents[scale] || MANIFEST.agents.instant;
    
    // Handle Wildcard '*'
    if (scaleAgents.includes('*')) {
        return allAgents;
    }

    const productAgents = MANIFEST.products[product]?.agents || [];
    
    // Merge and deduplicate
    return Array.from(new Set([...scaleAgents, ...productAgents]));
}

module.exports = {
    MANIFEST,
    getRulesList,
    getAgentsList
};
