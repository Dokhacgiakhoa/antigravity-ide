const fs = require('fs-extra');
const path = require('path');
const { repairProject } = require('../cli/repair');

const TEST_ROOT = path.join(__dirname, 'repair-suite-runs');
const SRC_AGENT = path.join(__dirname, '..', '.agent');

// Clean start
if (fs.existsSync(TEST_ROOT)) fs.rmSync(TEST_ROOT, { recursive: true, force: true });
fs.mkdirSync(TEST_ROOT);

// Mock config
const config = {
    language: 'vi',
    projectName: 'repair-test',
    scale: 'creative',
    productType: 'ai_agent',
    agentName: 'TestAgent',
    skipPrompts: true,
    rules: 'creative'
};

const mockOptions = { force: false, skipPrompts: true };

async function runScenario(name, setupFn, assertFn) {
    const projectDir = path.join(TEST_ROOT, name);
    fs.mkdirSync(projectDir);
    // Create base GEMINI.md
    fs.writeFileSync(path.join(projectDir, 'GEMINI.md'), '# Existing Project');
    
    console.log(`\n🧪 Scenario: ${name}`);
    
    // Setup initial state
    await setupFn(projectDir);
    
    // Run Repair
    try {
        await repairProject(projectDir, mockOptions, config);
        
        // Assert
        const result = assertFn(projectDir);
        if (result) {
            console.log(`   ✅ PASS`);
        } else {
            console.error(`   ❌ FAIL`);
            process.exit(1); 
        }
    } catch (e) {
        console.error(`   ❌ EXCEPTION:`, e);
        process.exit(1);
    }
}

(async () => {
    console.log('🚀 Starting Full Repair Verification Suite...');

    // Case 1: Missing .agent folder (Fresh Repair)
    await runScenario('missing_folder', 
        async (dir) => { /* do nothing */ },
        (dir) => {
            const hasSkills = fs.existsSync(path.join(dir, '.agent/skills'));
            const hasResources = fs.existsSync(path.join(dir, '.agent/RESOURCES.md'));
            const skillCount = hasSkills ? fs.readdirSync(path.join(dir, '.agent/skills')).length : 0;
            console.log(`      Skills: ${skillCount}, Resources: ${hasResources}`);
            return hasSkills && skillCount > 0 && hasResources;
        }
    );

    // Case 2: Empty .agent/skills folder (Broken Installer State)
    await runScenario('empty_skills_folder',
        async (dir) => {
            fs.ensureDirSync(path.join(dir, '.agent/skills'));
            // Create a "ghost" skill folder
            fs.ensureDirSync(path.join(dir, '.agent/skills/modern-web-architect')); 
        },
        (dir) => {
            // Should be filled now
            const skillDir = path.join(dir, '.agent/skills/modern-web-architect');
            const files = fs.readdirSync(skillDir);
            console.log(`      Files in modern-web-architect: ${files.length}`);
            return files.length > 0;
        }
    );

    // Case 3: Missing RESOURCES.md only
    await runScenario('missing_resources',
        async (dir) => {
            fs.ensureDirSync(path.join(dir, '.agent'));
            // GEMINI.md exists
        },
        (dir) => {
            return fs.existsSync(path.join(dir, '.agent/RESOURCES.md'));
        }
    );

    // Case 4: Partial Skill Content (Merge Logic)
    await runScenario('partial_skill_content',
        async (dir) => {
            const skillPath = path.join(dir, '.agent/skills/modern-web-architect');
            fs.ensureDirSync(skillPath);
            fs.writeFileSync(path.join(skillPath, 'user-custom.txt'), 'DONT TOUCH ME');
            // Missing SKILL.md
        },
        (dir) => {
            const skillPath = path.join(dir, '.agent/skills/modern-web-architect');
            const hasCustom = fs.existsSync(path.join(skillPath, 'user-custom.txt'));
            const hasStandard = fs.existsSync(path.join(skillPath, 'SKILL.md'));
            console.log(`      Custom: ${hasCustom}, Standard: ${hasStandard}`);
            return hasCustom && hasStandard;
        }
    );

    console.log('\n✨ ALL REPAIR SCENARIOS PASSED.');
    fs.rmSync(TEST_ROOT, { recursive: true, force: true });

})();
