#!/usr/bin/env node

/**
 * Google Antigravity CLI
 * Create AI Agent projects with interactive setup
 */

const { program } = require('commander');
const { createProject } = require('./create');
const packageJson = require('../package.json');

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
