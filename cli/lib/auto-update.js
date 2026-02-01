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
    const { latest, current, type } = notifier.update;
    console.log(chalk.yellow(`\n📦 Update available: ${current} → ${chalk.green(latest)} (${type})`));
    
    const response = await promptsLib({
      type: 'confirm',
      name: 'shouldUpdate',
      message: 'Do you want to update Google Antigravity now? / Bạn có muốn cập nhật ngay không?',
      initial: true
    });

    if (response.shouldUpdate) {
      try {
        console.log(chalk.cyan('\n🚀 Updating Global Antigravity... Please wait...'));
        execSyncLib('npm install -g antigravity-ide@latest', { stdio: 'inherit' });
        console.log(chalk.green('\n✅ Verified Update! Restarting command...'));
        exitLib(0);
      } catch (error) {
        console.error(chalk.red('\n❌ Update failed. Please run: npm install -g antigravity-ide@latest'));
        console.error(error.message);
      }
    } else {
      console.log(chalk.gray('\nℹ️  Skipping update. You can update later using: npx antigravity-ide update'));
    }
  }
}

module.exports = { checkAndApplyUpdates };
