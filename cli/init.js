/**
 * Initialize Antigravity Structure in an existing project
 */

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
const { 
  CODING_STYLE_RULE, 
  GIT_SMART_COMMIT_SKILL, 
  PRODUCTION_RELEASE_WORKFLOW,
  PROJECT_CONTEXT_MEMORY 
} = require(path.join(__dirname, 'templates', 'agent-structure'));

async function initProject(options) {
  const projectPath = process.cwd();
  const agentDir = path.join(projectPath, '.agent');

  console.log(chalk.bold('\n🚀 Initializing AntiGravity IDE Agent...\n'));

  const spinner = ora('Creating directory structure...').start();

  try {
    // 1. Create Directories
    const dirs = [
      'rules',
      'skills/git-smart-commit/src',
      'workflows',
      'memory'
    ];

    for (const dir of dirs) {
      fs.ensureDirSync(path.join(agentDir, dir));
    }

    spinner.succeed('Directory structure created');

    // 2. Create Rules
    const rulesPath = path.join(agentDir, 'rules');
    fs.writeFileSync(path.join(rulesPath, 'coding-style.md'), CODING_STYLE_RULE);
    spinner.succeed('Created Default Rules (coding-style.md)');

    // 3. Create Skills
    const skillPath = path.join(agentDir, 'skills', 'git-smart-commit');
    fs.writeFileSync(path.join(skillPath, 'skill.md'), GIT_SMART_COMMIT_SKILL);
    // Create dummy src file for structure completeness
    fs.writeFileSync(path.join(skillPath, 'src', 'commit.js'), '// Commit logic here\nconsole.log("Committing...");');
    spinner.succeed('Created Sample Skill (git-smart-commit)');

    // 4. Create Workflows
    const workflowPath = path.join(agentDir, 'workflows');
    fs.writeFileSync(path.join(workflowPath, 'release-cycle.md'), PRODUCTION_RELEASE_WORKFLOW);
    spinner.succeed('Created Workflow (release-cycle.md)');

    // 5. Create Memory
    const memoryPath = path.join(agentDir, 'memory');
    fs.writeFileSync(path.join(memoryPath, 'project-context.md'), PROJECT_CONTEXT_MEMORY);
    spinner.succeed('Initialized Project Memory');

    console.log('\n');
    console.log(chalk.green('✅ AntiGravity IDE Agent initialized successfully!'));
    console.log(chalk.gray('  Path: ') + chalk.white(agentDir));
    console.log('');
    console.log('  Customize your agent by editing files in .agent/');
    console.log('');

  } catch (error) {
    spinner.fail(`Initialization failed: ${error.message}`);
    console.error(error);
  }
}

module.exports = { initProject };
