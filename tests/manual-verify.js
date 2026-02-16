const fs = require('fs');
const path = require('path');
const { createProject } = require('../cli/create');

const TEST_DIR_NAME = 'manual-test-project';
const TEST_DIR = path.join(__dirname, TEST_DIR_NAME);

// Cleanup
if (fs.existsSync(TEST_DIR)) {
    try {
        fs.rmSync(TEST_DIR, { recursive: true, force: true });
    } catch (e) { }
}

console.log('🧪 Starting Structure Verification...');
console.log(`📂 Target: ${TEST_DIR}`);

const config = {
    language: 'vi',
    projectName: 'manual-test-project',
    scale: 'creative',
    productType: 'ai_agent', 
    agentName: 'TestAgent',
    industryDomain: 'other',
    skipPrompts: true,
    rules: 'creative' 
};

(async () => {
    try {
        await createProject(TEST_DIR, { force: true, skipPrompts: true }, config);
        
        console.log('\n🔍 Inspecting File Structure...');
        
        // 1. Check Root Files
        const geminiPath = path.join(TEST_DIR, 'GEMINI.md');
        const readmePath = path.join(TEST_DIR, 'README.md');
        const pkgPath = path.join(TEST_DIR, 'package.json');
        
        const hasGemini = fs.existsSync(geminiPath);
        const hasReadme = fs.existsSync(readmePath);
        const hasPkg = fs.existsSync(pkgPath);
        
        console.log(`- [Root] GEMINI.md: ${hasGemini ? '✅' : '❌'}`);
        console.log(`- [Root] README.md: ${!hasReadme ? '✅ (Removed)' : '❌ (Exists)'}`);
        console.log(`- [Root] package.json: ${!hasPkg ? '✅ (Removed)' : '❌ (Exists)'}`);

        // 2. Check .agent Folder
        const agentDir = path.join(TEST_DIR, '.agent');
        const workflowsDir = path.join(agentDir, 'workflows');
        const rulesDir = path.join(agentDir, 'rules');
        const skillsDir = path.join(agentDir, 'skills');
        
        const hasAgent = fs.existsSync(agentDir);
        const hasWorkflows = fs.existsSync(workflowsDir) && fs.readdirSync(workflowsDir).length > 0;
        const hasRules = fs.existsSync(rulesDir) && fs.readdirSync(rulesDir).length > 0;
        const hasSkills = fs.existsSync(skillsDir) && fs.readdirSync(skillsDir).length > 0;

        console.log(`- [.agent] Folder: ${hasAgent ? '✅' : '❌'}`);
        console.log(`- [.agent] Workflows: ${hasWorkflows ? '✅' : '❌'} (${hasWorkflows ? fs.readdirSync(workflowsDir).length : 0} items)`);
        console.log(`- [.agent] Rules: ${hasRules ? '✅' : '❌'} (${hasRules ? fs.readdirSync(rulesDir).length : 0} items)`);
        console.log(`- [.agent] Skills: ${hasSkills ? '✅' : '❌'} (${hasSkills ? fs.readdirSync(skillsDir).length : 0} items)`);

        if (hasGemini && !hasReadme && hasWorkflows && !hasPkg) {
            console.log('\n✨ TEST PASSED: Structure matches requirements.');
            process.exit(0);
        } else {
            console.error('\n❌ TEST FAILED: Structure mismatch.');
            process.exit(1);
        }

    } catch (e) {
        console.error('❌ CRITICAL ERROR:', e);
        process.exit(1);
    }
})();
