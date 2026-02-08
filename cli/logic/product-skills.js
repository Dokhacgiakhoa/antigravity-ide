/**
 * Logic for Product Type (User Apps, Dev Tools, AI, Assets)
 * Determines specific Skills and Shared Modules needed.
 */

function getProductConfig(productType) {
    const skillsToAdd = new Set();
    const sharedModules = new Set();

    // 1. User Applications (Web/Mobile/Desktop)
    if (productType === 'user_app') {
        skillsToAdd.add('webdev');
        skillsToAdd.add('mobile');
        skillsToAdd.add('testing');
        skillsToAdd.add('uiux');
        
        sharedModules.add('design-system.md');
        sharedModules.add('ui-ux-pro-max.md');
    }

    // 2. Developer Tools (CLI/Lib/API)
    if (productType === 'dev_tool') {
        skillsToAdd.add('devops');
        skillsToAdd.add('testing');
        skillsToAdd.add('webdev'); // For docs/landing

        sharedModules.add('api-standards.md');
        sharedModules.add('infra-blueprints.md');
    }

    // 3. AI Agents (Chatbot/Auto)
    if (productType === 'ai_agent') {
        skillsToAdd.add('ai');
        skillsToAdd.add('maker');
        skillsToAdd.add('research');
        
        sharedModules.add('ai-master.md');
        sharedModules.add('docs-sync.md');
    }

    // 4. Digital Assets (Game/Template)
    if (productType === 'digital_asset') {
        skillsToAdd.add('mobile'); // Game Dev
        skillsToAdd.add('webdev'); // Templates
        skillsToAdd.add('growth'); // SEO
        skillsToAdd.add('uiux');
        
        sharedModules.add('design-system.md');
        sharedModules.add('growth-hacking.md');
    }

    return {
        skills: Array.from(skillsToAdd),
        sharedModules: Array.from(sharedModules)
    };
}

module.exports = { getProductConfig };
