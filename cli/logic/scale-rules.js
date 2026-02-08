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
        // Enriched: Essential dev loop (Plan -> Create -> Test -> Deploy)
        baseWorkflows = ['create', 'plan', 'debug', 'test', 'deploy', 'preview'];
        coreSkillCategories = ['webdev', 'uiux', 'testing', 'maker'];
    } else if (scale === 'creative') { // Was Balanced/Team -> Creative/Research
        engineMode = 'advanced';
        // User requested FULL TOOLS for Creative mode
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
        // Enriched: Corporate-grade control + Architecture
        baseWorkflows = ['plan', 'status', 'monitor', 'audit', 'deploy', 'security', 'test', 'compliance', 'api', 'document'];
        coreSkillCategories = ['devops', 'security', 'testing', 'growth', 'research'];
    }

    return { engineMode, rulesMode, baseWorkflows, coreSkillCategories };
}

module.exports = { getScaleConfig };
