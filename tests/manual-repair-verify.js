const fs = require('fs-extra');
const path = require('path');
const { repairProject } = require('../cli/repair');

const TEST_DIR_NAME = 'manual-repair-test';
const TEST_DIR = path.join(__dirname, TEST_DIR_NAME);

// Setup broken state: .agent folder exists, but NO skills
if (fs.existsSync(TEST_DIR)) {
    fs.rmSync(TEST_DIR, { recursive: true, force: true });
}
fs.mkdirSync(path.join(TEST_DIR, '.agent'), { recursive: true });
fs.writeFileSync(path.join(TEST_DIR, 'GEMINI.md'), '# GEMINI\n\nExisting config');

console.log('🧪 Starting REPAIR Verification...');
console.log(`📂 Target: ${TEST_DIR}`);

const config = {
    language: 'vi',
    projectName: 'manual-repair-test',
    scale: 'creative', // Force creative
    productType: 'ai_agent',
    agentName: 'TestAgent',
    industryDomain: 'other',
    skipPrompts: true,
    rules: 'creative' // Explicit rule
};

(async () => {
    try {
        console.log('🚀 Running repairProject...');
        await repairProject(TEST_DIR, { force: false, skipPrompts: true }, config);
        
        console.log('\n🔍 Inspecting Repair Results...');
        
        // Check Skills
        const skillsDir = path.join(TEST_DIR, '.agent', 'skills');
        
        const hasSkillsDir = fs.existsSync(skillsDir);
        const skillCount = hasSkillsDir ? fs.readdirSync(skillsDir).length : 0;

        console.log(`- [.agent/skills] Directory: ${hasSkillsDir ? '✅' : '❌'}`);
        console.log(`- Skills Count: ${skillCount}`);

        if (skillCount > 0) {
            console.log('\n✨ TEST PASSED: Repair restored skills correctly.');
            process.exit(0);
        } else {
            console.error('\n❌ TEST FAILED: No skills restored.');
            process.exit(1);
        }

    } catch (e) {
        console.error('❌ CRITICAL ERROR:', e);
        process.exit(1);
    }
})();
