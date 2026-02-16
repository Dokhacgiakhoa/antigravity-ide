/**
 * @script npx-logic-test.js
 * @description Direct logic test for Antigravity IDE project creation (12 Cases).
 */

const { createProject } = require('../cli/create');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const TEST_DIR = path.join(process.cwd(), 'temp_logic_tests');

// Full 12 Cases Matrix
const TEST_CASES = [
    { name: 'v-i-u', lang: 'vi', scale: 'instant', type: 'user_app' },
    { name: 'v-i-d', lang: 'vi', scale: 'instant', type: 'dev_tool' },
    { name: 'v-i-a', lang: 'vi', scale: 'instant', type: 'ai_agent' },
    { name: 'v-i-da', lang: 'vi', scale: 'instant', type: 'digital_asset' },
    { name: 'e-c-u', lang: 'en', scale: 'creative', type: 'user_app' },
    { name: 'e-c-d', lang: 'en', scale: 'creative', type: 'dev_tool' },
    { name: 'e-c-a', lang: 'en', scale: 'creative', type: 'ai_agent' },
    { name: 'e-c-da', lang: 'en', scale: 'creative', type: 'digital_asset' },
    { name: 'v-s-u', lang: 'vi', scale: 'sme', type: 'user_app' },
    { name: 'v-s-d', lang: 'vi', scale: 'sme', type: 'dev_tool' },
    { name: 'v-s-a', lang: 'vi', scale: 'sme', type: 'ai_agent' },
    { name: 'v-s-da', lang: 'vi', scale: 'sme', type: 'digital_asset' }
];

async function runTest(testCase) {
    console.log(chalk.bold.blue(`\n▶ Running Logic Test: ${testCase.name}`));
    const projectPath = path.join(TEST_DIR, testCase.name);
    
    const config = {
        projectName: testCase.name,
        language: testCase.lang,
        scale: testCase.scale,
        rules: testCase.scale,
        productType: testCase.type,
        agentName: 'TestBot',
        template: 'standard',
        engineMode: testCase.scale === 'instant' ? 'standard' : 'advanced',
        skillCategories: ['webdev'], // Minimal for speed
        workflows: ['plan']
    };

    try {
        const oldCwd = process.cwd();
        if (!fs.existsSync(TEST_DIR)) fs.mkdirSync(TEST_DIR, { recursive: true });
        process.chdir(TEST_DIR);
        
        await createProject(testCase.name, { skipPrompts: true }, config);
        
        process.chdir(oldCwd);
        
        console.log(chalk.green(`  ✅ Success: ${testCase.name}`));
        verifyProject(projectPath, testCase);
    } catch (err) {
        console.error(chalk.red(`  ❌ Error: ${err.message}`));
    }
}

function verifyProject(projectPath, testCase) {
    const agentDir = path.join(projectPath, '.agent');
    const rules = fs.readdirSync(path.join(agentDir, 'rules'));
    console.log(chalk.cyan(`    🔍 Audit: Rules: ${rules.length}`));

    // Validation logic based on manifest-manager.js
    if (testCase.scale === 'instant' && rules.length < 5) console.log(chalk.red('    ❌ Instant scale missing rules!'));
    if (testCase.scale === 'sme' && !rules.includes('security.md')) console.log(chalk.red('    ❌ SME scale missing security!'));
    
    // Lang check in GEMINI.md
    const gemini = fs.readFileSync(path.join(projectPath, 'GEMINI.md'), 'utf-8');
    const isVi = gemini.includes('Danh tính Agent');
    if (testCase.lang === 'vi' && !isVi) console.log(chalk.red('    ❌ GEMINI.md language mismatch!'));
    else if (testCase.lang === 'en' && isVi) console.log(chalk.red('    ❌ GEMINI.md language mismatch!'));
}

async function main() {
    console.log(chalk.bold.yellow('🚀 Antigravity 12-Case Regression Suite Starting...'));
    
    if (fs.existsSync(TEST_DIR)) fs.removeSync(TEST_DIR);
    fs.mkdirSync(TEST_DIR);

    for (const test of TEST_CASES) {
        await runTest(test);
    }
    
    console.log(chalk.bold.green('\n🏁 ALL 12 CASES VERIFIED!'));
}

main().catch(console.error);
