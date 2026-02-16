/**
 * @script npx-regression-suite.js
 * @version 1.0.0
 * @description Automated E2E test runner for Antigravity IDE CLI setup wizard.
 */

const { spawn } = require('child_process');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const TEST_DIR = path.join(process.cwd(), 'temp_tests');
const CLI_PATH = path.join(process.cwd(), 'cli', 'index.js');

// 12 Test Cases defined in the plan
const TEST_CASES = [
    { name: 'case-1', answers: ['\u001b[B', 'case-1', '\r', '\r', 'Jarvis'], desc: 'VI / Instant / User App' },
    { name: 'case-2', answers: ['\u001b[B', 'case-2', '\u001b[B', '\u001b[B', 'Friday'], desc: 'VI / Creative / AI Agent' },
    { name: 'case-3', answers: ['\r', 'case-3', '\u001b[B\u001b[B', '\u001b[B', 'Alfred'], desc: 'EN / SME / Dev Tool' },
    { name: 'case-4', answers: ['\u001b[B', 'case-4', '\r', '\u001b[B\u001b[B\u001b[B', 'Vision'], desc: 'VI / Instant / Digital Asset' },
    { name: 'case-5', answers: ['\r', 'case-5', '\u001b[B', '\r', 'Hal'], desc: 'EN / Creative / User App' },
    { name: 'case-6', answers: ['\r', 'case-6', '\u001b[B', '\u001b[B', 'Data'], desc: 'EN / Creative / Dev Tool' },
    { name: 'case-7', answers: ['\r', 'case-7', '\u001b[B', '\u001b[B\u001b[B', 'Cortana'], desc: 'EN / Creative / AI Agent' },
    { name: 'case-8', answers: ['\r', 'case-8', '\u001b[B', '\u001b[B\u001b[B\u001b[B', 'GlaDOS'], desc: 'EN / Creative / Digital Asset' },
    { name: 'case-9', answers: ['\u001b[B', 'case-9', '\u001b[B\u001b[B', '\r', 'Oracle'], desc: 'VI / SME / User App' },
    { name: 'case-10', answers: ['\u001b[B', 'case-10', '\u001b[B\u001b[B', '\u001b[B', 'Sentinel'], desc: 'VI / SME / Dev Tool' },
    { name: 'case-11', answers: ['\u001b[B', 'case-11', '\u001b[B\u001b[B', '\u001b[B\u001b[B', 'Neuromancer'], desc: 'VI / SME / AI Agent' },
    { name: 'case-12', answers: ['\u001b[B', 'case-12', '\u001b[B\u001b[B', '\u001b[B\u001b[B\u001b[B', 'Shodan'], desc: 'VI / SME / Digital Asset' }
];

async function runTest(testCase) {
    return new Promise((resolve) => {
        console.log(chalk.bold.blue(`\n▶ Running ${testCase.name}: ${testCase.desc}`));
        
        const projectPath = path.join(TEST_DIR, testCase.name);
        const child = spawn('node', [CLI_PATH, testCase.name], {
            cwd: TEST_DIR,
            env: { ...process.env, ANTIGRAVITY_SKIP_UPDATE: 'true' },
            stdio: ['pipe', 'pipe', 'pipe']
        });

        let output = '';
        let answerIndex = 0;

        child.stdout.on('data', (data) => {
            const str = data.toString();
            output += str;
            
            // Simulating user input when prompts appear
            if (str.includes('?') || str.includes(':')) {
                if (answerIndex < testCase.answers.length) {
                    const ans = testCase.answers[answerIndex];
                    child.stdin.write(ans + (ans === '\r' ? '' : '\r'));
                    answerIndex++;
                }
            }
        });

        child.stderr.on('data', (data) => {
            console.error(chalk.red(`  stderr: ${data}`));
        });

        child.on('close', (code) => {
            console.log(chalk.gray(`  Process finished with code ${code}`));
            const success = code === 0 && fs.existsSync(path.join(projectPath, '.agent'));
            if (success) {
                console.log(chalk.green(`  ✅ Project created at ${testCase.name}`));
                verifyProject(projectPath, testCase);
            } else {
                console.log(chalk.red(`  ❌ Project creation FAILED for ${testCase.name}`));
            }
            resolve(success);
        });
    });
}

function verifyProject(projectPath, testCase) {
    const agentDir = path.join(projectPath, '.agent');
    const rules = fs.readdirSync(path.join(agentDir, 'rules'));
    console.log(chalk.cyan(`    🔍 Audit: Rules Count: ${rules.length}`));
}

async function main() {
    console.log(chalk.bold.yellow('🚀 Antigravity NPX Regression Suite Starting...'));
    
    if (fs.existsSync(TEST_DIR)) fs.removeSync(TEST_DIR);
    fs.mkdirSync(TEST_DIR);

    let passedTotal = 0;
    for (const test of TEST_CASES) {
        const success = await runTest(test);
        if (success) passedTotal++;
    }

    console.log('\n' + '='.repeat(40));
    console.log(chalk.bold(`🏁 SUMMARY: ${passedTotal}/${TEST_CASES.length} Cases Passed`));
    console.log('='.repeat(40));
}

main().catch(console.error);
