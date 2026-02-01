/**
 * Logic for Product Type (User Apps, Dev Tools, AI, Assets)
 * Determines specific Skills needed for the product.
 */

function getProductSkills(productType) {
    const skillsToAdd = new Set();

    // 1. User Applications (Web/Mobile/Desktop)
    if (productType === 'user_app') {
        skillsToAdd.add('webdev');
        skillsToAdd.add('mobile');
        skillsToAdd.add('testing');
        skillsToAdd.add('uiux'); // High-end UI for user apps
    }

    // 2. Developer Tools (CLI/Lib/API)
    if (productType === 'dev_tool') {
        skillsToAdd.add('devops');
        skillsToAdd.add('testing');
    }

    // 3. AI Agents (Chatbot/Auto)
    if (productType === 'ai_agent') {
        skillsToAdd.add('ai');
        skillsToAdd.add('maker');
        skillsToAdd.add('research'); // Strategic intelligence for AI agents
    }

    // 4. Digital Assets (Game/Template)
    if (productType === 'digital_asset') {
        skillsToAdd.add('mobile'); // For Game Dev skills
        skillsToAdd.add('webdev'); // For Templates
        skillsToAdd.add('growth'); // For SEO/Marketing
        skillsToAdd.add('uiux');
    }

    return Array.from(skillsToAdd);
}

module.exports = { getProductSkills };
