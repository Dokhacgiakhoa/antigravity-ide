const { getRulesList, getAgentsList } = require('./manifest-manager');

function getScaleConfig(scale) {
    let engineMode = 'standard';
    let rulesMode = scale; // 'instant', 'creative', 'sme'
    let baseWorkflows = [];
    let coreSkillCategories = []; 
    
    // Get File Lists from Manifest
    // We pass 'user_app' as default product here, but it will be merged later in create.js
    // Actually, create.js should call getRulesList with both scale & product.
    // Here we just return the Scale-specific defaults or we returns the lists directly?
    
    // Let's stick to returning config properties, and let create.js handle the files resolution?
    // OR we resolve the "Scale part" of the files here.
    
    // DECISION: We return the lists here so create.js doesn't need to know about manifest directly?
    // No, create.js needs to know product type to resolve final list.
    // So let's export a helper to resolve everything.
    
    if (scale === 'instant') { // Was Flexible/Personal
        engineMode = 'standard';
        // Target ~25% (Compact) - Focus: Build & Ship Fast
        baseWorkflows = [
            'create', 'plan', 'debug', 'test', 'deploy', 
            'preview', 'enhance', 'visually', 'log-error'
        ]; // 9 Workflows
        coreSkillCategories = ['webdev', 'uiux', 'maker-lite']; // Condensed Maker list
    } else if (scale === 'creative') { // Was Balanced/Team -> Creative/Research
        engineMode = 'advanced';
        // Target 100% (Full)
        baseWorkflows = [
            'api', 'audit', 'blog', 'brainstorm', 'compliance', 
            'create', 'debug', 'deploy', 'document', 'enhance', 
            'explain', 'log-error', 'mobile', 'monitor', 'onboard', 
            'orchestrate', 'performance', 'plan', 'portfolio', 'preview', 
            'realtime', 'release-version', 'security', 'seo', 'status', 
            'test', 'ui-ux-pro-max', 'update-docs', 'update', 'visually'
        ];
        coreSkillCategories = [
            'webdev', 'mobile', 'ai', 'research', 'uiux', 
            'devops', 'security', 'growth', 'maker', 'testing'
        ];
    } else { // SME (Enterprise)
        engineMode = 'advanced';
        // Target ~50% (Balanced) - Focus: Stability & Ops
        baseWorkflows = [
            'plan', 'status', 'monitor', 'audit', 'deploy', 
            'security', 'test', 'compliance', 'api', 'document',
            'log-error', 'release-version', 'update-docs', 'performance', 'onboard'
        ]; // 15 Workflows
        coreSkillCategories = ['devops', 'security', 'testing', 'growth-enterprise', 'research']; // 5 Categories (50%)
    }

    return { engineMode, rulesMode, baseWorkflows, coreSkillCategories };
}

module.exports = { getScaleConfig };
