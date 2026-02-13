const fs = require('fs');
const path = require('path');
const { createProject } = require('../cli/create');

// Fix path to be absolute or relative to CWD properly
// We want to create it inside d:\Github\antigravity-ide\tests\manual-test-project
const TEST_DIR_NAME = 'manual-test-project';
const TEST_DIR = path.join(__dirname, TEST_DIR_NAME);

// Cleanup
if (fs.existsSync(TEST_DIR)) {
    try {
        fs.rmSync(TEST_DIR, { recursive: true, force: true });
    } catch (e) {
        // Ignore parallel cleanup errors
    }
}

console.log('🧪 Starting Manual Verification for Creative Mode...');
console.log(`📂 Target: ${TEST_DIR}`);

const config = {
    language: 'en',
    // key fix: 'projectName' logic in create.js uses this if skipPrompts=true for some internal namings
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
        // We pass the RELATIVE path from CWD (which is root) or ABSOLUTE path
        // createProject(path, options, config)
        await createProject(TEST_DIR, { force: true, skipPrompts: true }, config);
        
        const skillsDir = path.join(TEST_DIR, '.agent', 'skills'); // Corrected path segment: .agent/skills
        
        if (fs.existsSync(skillsDir)) {
            const skills = fs.readdirSync(skillsDir);
            console.log(`\n✅ Verification Result:`);
            console.log(`Skills Folder: ${skillsDir}`);
            console.log(`Total Skills Installed: ${skills.length}`);
            
            if (skills.length > 30) { // Expect robust number
                console.log(`PASS: Creative mode installed ${skills.length} skills (Expected > 30).`);
            } else {
                console.error(`FAIL: Creative mode should have > 30 skills, found ${skills.length}.`);
                process.exit(1);
            }
        } else {
            console.error(`FAIL: Skills folder not found at ${skillsDir}`);
            // List what IS there
            if(fs.existsSync(path.join(TEST_DIR, '.agent'))) {
                 console.log('Contents of .agent:', fs.readdirSync(path.join(TEST_DIR, '.agent')));
            } else {
                 console.log('.agent folder missing');
            }
            process.exit(1);
        }
    } catch (e) {
        console.error('❌ CRITICAL ERROR:', e);
        process.exit(1);
    }
})();
