const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const CLI_PATH = path.join(__dirname, '..', 'cli', 'index.js');
const TEST_ROOT = path.join(__dirname, '..', 'temp_stress_tests');

const languages = ['en', 'vi'];
const scales = ['instant', 'creative', 'sme'];
const productTypes = ['user_app', 'dev_tool', 'ai_agent', 'digital_asset'];

const scenarios = [];
let count = 1;

for (const lang of languages) {
    for (const scale of scales) {
        for (const product of productTypes) {
            // Vary templates to cover all: minimal, standard, full
            const template = (count % 3 === 0) ? 'full' : (count % 3 === 1 ? 'minimal' : 'standard');
            
            // Skill and Workflow selection: EMPTY to trigger Intelligent Auto-Balancing in create.js
            const skillCategories = [];
            const workflows = [];

            scenarios.push({
                name: `${count}. [${lang.toUpperCase()}] ${scale.toUpperCase()}-${product}-${template}`,
                config: {
                    projectName: `test-proj-${count}`,
                    language: lang,
                    rules: scale,
                    productType: product,
                    template: template,
                    agentName: lang === 'vi' ? 'Jarvis-VN' : 'Jarvis-EN',
                    industryDomain: 'other',
                    skillCategories: skillCategories,
                    workflows: workflows
                }
            });
            count++;
        }
    }
}

async function runTests() {
    console.log(chalk.bold.blue('🚀 Starting NPX Stress Test (20 Scenarios)...'));
    fs.ensureDirSync(TEST_ROOT);

    const summary = [];

    for (const scenario of scenarios) {
        process.stdout.write(chalk.white(`\nTesting ${scenario.name}... `));
        const projectDir = path.join(TEST_ROOT, scenario.name.replace(/\s+/g, '_'));
        fs.ensureDirSync(projectDir);

        try {
            // Because our CLI doesn't support complex config via args yet, we'll call createProject directly
            // from a small wrapper script for each test to simulate the real environment.
            const wrapperScript = `
const { createProject } = require('${path.join(__dirname, '..', 'cli', 'create').replace(/\\/g, '/')}');
const { getScaleConfig } = require('${path.join(__dirname, '..', 'cli', 'logic', 'scale-rules').replace(/\\/g, '/')}');

const config = ${JSON.stringify(scenario.config)};
// Simulate prompt logic: get Scale Config to balance resources
const scaleConfig = getScaleConfig(config.rules); 
// Apply defaults if missing (same logic as Prompts)
if (!config.skillCategories || config.skillCategories.length === 0) {
    config.skillCategories = scaleConfig.coreSkillCategories;
}
if (!config.workflows || config.workflows.length === 0) {
    config.workflows = scaleConfig.baseWorkflows;
}
config.engineMode = scaleConfig.engineMode;

createProject('.', { skipPrompts: true }, config).catch(err => {
    console.error(err);
    process.exit(1);
});
`;
            const wrapperPath = path.join(projectDir, 'test-runner.js');
            fs.writeFileSync(wrapperPath, wrapperScript);

            const startTime = Date.now();
            const output = execSync(`node test-runner.js`, { cwd: projectDir }).toString();
            const duration = Date.now() - startTime;

            // Verify files
            const checks = {
                rules: fs.existsSync(path.join(projectDir, '.agent', 'rules')) ? fs.readdirSync(path.join(projectDir, '.agent', 'rules')).length : 0,
                skills: fs.existsSync(path.join(projectDir, '.agent', 'skills')) ? fs.readdirSync(path.join(projectDir, '.agent', 'skills')).length : 0,
                workflows: fs.existsSync(path.join(projectDir, '.agent', 'workflows')) ? fs.readdirSync(path.join(projectDir, '.agent', 'workflows')).length : 0,
                dna: (() => {
                    const sharedBase = path.join(projectDir, '.agent', '.shared');
                    let count = 0;
                    if (fs.existsSync(sharedBase)) {
                        ['core', 'technical', 'verticals'].forEach(d => {
                            const p = path.join(sharedBase, d);
                            if (fs.existsSync(p)) {
                                count += fs.readdirSync(p).filter(f => fs.lstatSync(path.join(p, f)).isDirectory()).length;
                            }
                        });
                    }
                    return count;
                })()
            };

            // Assertions: Fail if resources are 0 when they shouldn't be
            let failureReason = null;
            if (checks.rules === 0) failureReason = 'Rules must not be 0';
            if (checks.dna === 0) failureReason = 'DNA must not be 0';
            if (scenario.config.template !== 'minimal' && scenario.config.skillCategories.length > 0 && checks.skills === 0) {
                failureReason = `Skills expected but got 0 (Categories: ${scenario.config.skillCategories})`;
            }
            if (scenario.config.workflows.length > 0 && checks.workflows === 0) {
                failureReason = `Workflows expected but got 0 (Req: ${scenario.config.workflows})`;
            }

            // Language Content Verification (New)
            const geminiPath = path.join(projectDir, 'GEMINI.md');
            if (fs.existsSync(geminiPath)) {
                const geminiContent = fs.readFileSync(geminiPath, 'utf8');
                const isVietnameseContent = geminiContent.includes('Cấu hình Agent');
                const isEnglishContent = geminiContent.includes('Agent Configuration');

                if (scenario.config.language === 'vi' && !isVietnameseContent) {
                    failureReason = 'Language mismatch: Expected Vietnamese content in GEMINI.md';
                } else if (scenario.config.language === 'en' && !isEnglishContent) {
                    failureReason = 'Language mismatch: Expected English content in GEMINI.md';
                }
            } else {
                failureReason = 'GEMINI.md missing';
            }

            if (failureReason) {
                console.log(chalk.red('FAILED'));
                console.log(chalk.gray(`  Reason: ${failureReason}`));
                summary.push({
                    name: scenario.name,
                    status: '❌',
                    error: failureReason,
                    time: `${duration}ms`
                });
                continue;
            }

            // Success recording
            const statsLineMatch = output.match(/✨ Installed: (.+)/);
            const statsLine = statsLineMatch ? statsLineMatch[1] : 'N/A';

            console.log(chalk.green('PASSED'));
            summary.push({
                name: scenario.name,
                status: '✅',
                stats: `${checks.rules}R/${checks.skills}S/${checks.workflows}W`,
                cliStats: statsLine,
                time: `${duration}ms`
            });

        } catch (error) {
            console.log(chalk.red('FAILED'));
            console.error(error.message);
            summary.push({
                name: scenario.name,
                status: '❌',
                error: error.message.substring(0, 50)
            });
        }
    }

    console.log('\n' + chalk.bold.blue('📊 Stress Test Summary:'));
    console.table(summary);

    fs.writeFileSync(path.join(__dirname, 'stress-results.json'), JSON.stringify(summary, null, 2));
    console.log(chalk.cyan(`\nResults saved to tests/stress-results.json`));
}

runTests();
