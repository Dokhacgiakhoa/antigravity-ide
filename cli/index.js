#!/usr/bin/env node

/**
 * Google Antigravity CLI
 * Create AI Agent projects with interactive setup
 */

const { program } = require('commander');
const { createProject } = require('./create');
const packageJson = require('../package.json');
const updateNotifier = require('update-notifier');

// Check for updates
const prompts = require('prompts');
const { execSync } = require('child_process');
const chalk = require('chalk');

// Check for updates (Aggressive: Check every time)
const notifier = updateNotifier({ pkg: packageJson, updateCheckInterval: 0 });

if (notifier.update) {
  const { latest, current, type } = notifier.update;
  console.log(chalk.yellow(`\n📦 Update available: ${current} → ${chalk.green(latest)} (${type})`));
  
  (async () => {
    const response = await prompts({
      type: 'confirm',
      name: 'shouldUpdate',
      message: 'Do you want to update Google Antigravity now? / Bạn có muốn cập nhật ngay không?',
      initial: true
    });

    if (response.shouldUpdate) {
      try {
        console.log(chalk.cyan('\n🚀 Updating Global Antigravity... Please wait...'));
        execSync('npm install -g antigravity-ide@latest', { stdio: 'inherit' });
        console.log(chalk.green('\n✅ Verified Update! Restarting command...'));
        
        // Spawn the original command again with new version
        // execSync(`${process.argv0} ${process.argv.slice(1).join(' ')}`, { stdio: 'inherit' });
        process.exit(0);
      } catch (error) {
        console.error(chalk.red('\n❌ Update failed. Please run: npm install -g antigravity-ide@latest'));
        console.error(error.message);
      }
    } else {
      console.log(chalk.gray('\nℹ️  Skipping update. You can update later using: npx antigravity-ide update'));
    }
  })();
}

program
  .name('google-antigravity')
  .description('Create AI Agent projects with skills, rules, and workflows')
  .version(packageJson.version)
  .argument('[project-name]', 'Name of the project', '.')
  .option('-t, --template <type>', 'Project template (minimal, standard, full)', 'standard')
  .option('-s, --skip-prompts', 'Skip interactive prompts and use defaults')
  .action(async (projectName, options) => {
    await createProject(projectName, options);
  });

program
  .command('update')
  .description('Update Google Antigravity to the latest version')
  .action(() => {
    const ora = require('ora');
    const chalk = require('chalk');
    const { exec } = require('child_process');
    
    const spinner = ora('Checking for latest version and updating...').start();
    
    // Use npm install -g to update the package itself
    exec('npm install -g antigravity-ide@latest', (error, stdout, stderr) => {
      if (error) {
        spinner.fail(`Update failed: ${error.message}`);
        console.error(chalk.red(stderr));
        return;
      }
      
      spinner.succeed('Google Antigravity has been updated to the latest version!');
      console.log(chalk.gray('You may also need to run "antigravity-update" to sync global skills.'));
    });
  });

program.parse(process.argv);
