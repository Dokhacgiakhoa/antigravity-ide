const updateNotifier = require('update-notifier');
const prompts = require('prompts');
const { execSync } = require('child_process');
const chalk = require('chalk');

async function checkAndApplyUpdates(packageJson, options = {}) {
  // Allow overriding globals for testing
  const notifierLib = options.updateNotifier || updateNotifier;
  const promptsLib = options.prompts || prompts;
  const execSyncLib = options.execSync || execSync;
  const exitLib = options.exit || process.exit;

  // Check for updates (Aggressive: Check every time)
  const notifier = notifierLib({ pkg: packageJson, updateCheckInterval: 0 });

  if (notifier.update) {
    const { latest, current } = notifier.update;
    console.log(chalk.yellow(`\n📦 New version detected: ${chalk.green(latest)} (Current: ${current})`));
    console.log(chalk.cyan('🚀 Auto-updating Google Antigravity to ensure you have the latest features...'));

    try {
      // Use --no-save to avoid polluting local package.json if run in a project
      // But -g is what actually updates the global/npx cached version for next runs
      execSyncLib('npm install -g antigravity-ide@latest', { stdio: 'inherit' });
      console.log(chalk.green('\n✅ Version ' + latest + ' installed successfully!'));
      console.log(chalk.bold.yellow('🔄 Please run your command again to use the new version.\n'));
      exitLib(0);
    } catch (error) {
      console.log(chalk.gray('\n⚠️  Automatic update failed (possibly due to permissions).'));
      console.log(chalk.gray(`   Please run manually: ${chalk.white('npm install -g antigravity-ide@latest')}\n`));
      // In case of failure, we continue with current version so we don't block the user
    }
  }
}

module.exports = { checkAndApplyUpdates };
