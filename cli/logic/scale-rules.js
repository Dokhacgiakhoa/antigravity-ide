function getScaleConfig(scale) {
    let engineMode = 'standard';
    let rulesMode = scale;
    let baseWorkflows = [];
    let coreSkillCategories = []; // Skills enforced by Scale

    if (scale === 'flexible') {
        engineMode = 'standard';
        baseWorkflows = ['plan', 'debug', 'enhance'];
        coreSkillCategories = ['ai'];
    } else if (scale === 'balanced') {
        // TEAM: Cân bằng, tập trung vào trải nghiệm người dùng
        engineMode = 'advanced';
        baseWorkflows = ['plan', 'status', 'debug', 'enhance', 'test', 'document', 'onboard', 'ui-ux-pro-max'];
        coreSkillCategories = ['ai', 'growth', 'devops', 'testing', 'uiux'];
    } else { 
        // ENTERPRISE: Toàn diện, bảo mật và chiến lược
        engineMode = 'advanced';
        baseWorkflows = ['plan', 'status', 'debug', 'enhance', 'test', 'document', 'onboard', 'security', 'audit', 'monitor', 'orchestrate', 'deploy', 'brainstorm'];
        coreSkillCategories = ['ai', 'security', 'growth', 'devops', 'testing', 'uiux', 'research'];
    }

    return { engineMode, rulesMode, baseWorkflows, coreSkillCategories };
}

module.exports = { getScaleConfig };
