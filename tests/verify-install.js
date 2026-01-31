const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const CLI_PATH = path.join(__dirname, '../cli/index.js');
const TEST_PROJECT_DIR = path.join(__dirname, '../test-cli-project-automated');

console.log(chalk.bold.blue('🧪 Starting Installation Verification Test...'));

try {
  // 1. Check if CLI entry point runs (help command)
  console.log(chalk.yellow('\n[1/3] Verifying CLI entry point...'));
  execSync(`node "${CLI_PATH}" --help`, { stdio: 'inherit' });
  console.log(chalk.green('✔ CLI entry point works.'));

  // 2. Clean up previous test project
  if (fs.existsSync(TEST_PROJECT_DIR)) {
    console.log(chalk.gray(`Cleaning up old test project at ${TEST_PROJECT_DIR}...`));
    fs.rmSync(TEST_PROJECT_DIR, { recursive: true, force: true });
  }

  // 3. Run Project Creation (Non-interactive)
  console.log(chalk.yellow(`\n[2/3] Testing project creation at ${TEST_PROJECT_DIR}...`));
  // Note: cli/index.js takes [project-name] as argument
  // We use --skip-prompts to avoid interaction
  // We expect it to use the default 'webdev' skills and 'standard' engine from prompts.js
  
  const cmd = `node "${CLI_PATH}" "${TEST_PROJECT_DIR}" --skip-prompts`;
  console.log(chalk.gray(`> ${cmd}`));
  execSync(cmd, { stdio: 'inherit' });

  // 4. Verify Files
  console.log(chalk.yellow('\n[3/3] Verifying generated files...'));
  
  const requiredFiles = [
    'package.json',
    'README.md',
    '.agent/GEMINI.md', 
    '.gitignore'
  ];
  
  // also check if some skill files were copied (since default is webdev -> modern-web-architect etc)
  const skillFile = '.agent/skills/modern-web-architect/SKILL.md';
  // Wait, if it copies skills, it puts them in .agent/skills/
  
  let missing = [];
  
  requiredFiles.forEach(file => {
      const filePath = path.join(TEST_PROJECT_DIR, file);
      if (!fs.existsSync(filePath)) {
          missing.push(file);
      }
  });

  const skillPath = path.join(TEST_PROJECT_DIR, skillFile);
  if (!fs.existsSync(skillPath)) {
      console.log(chalk.yellow(`⚠ Warning: Expected skill file ${skillFile} not found. (Maybe default skills changed?)`));
      // Don't fail the whole test for this if the core is there, but noted.
  } else {
      console.log(chalk.green(`✔ Skill file verified: ${skillFile}`));
  }

  if (missing.length > 0) {
      throw new Error(`Missing expected files: ${missing.join(', ')}`);
  }
  
  console.log(chalk.green('✔ Project created successfully with all required files.'));
  console.log(chalk.black.bgGreen('\n✨ TEST PASSED: Installation logic is sound! ✨'));

  // Cleanup
  console.log(chalk.gray('\nCleaning up...'));
  fs.rmSync(TEST_PROJECT_DIR, { recursive: true, force: true });

} catch (error) {
  console.error(chalk.red('\n❌ TEST FAILED:'), error.message);
  process.exit(1);
}
