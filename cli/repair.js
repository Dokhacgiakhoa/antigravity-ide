/**
 * Project Repair & Sync logic
 */

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
const { getRulesList, getAgentsList } = require('./logic/manifest-manager');
const { generateGeminiMd } = require('./logic/gemini-generator');

async function repairProject(projectPath, options, config) {
    const spinner = ora('🔍 Analyzing project integrity...').start();
    
    try {
        const agentDir = path.join(projectPath, '.agent');
        const sourceAgentDir = path.join(__dirname, '..', '.agent');
        
        // 1. Sync Shared DNA (Always update to latest)
        spinner.text = 'Syncing Shared DNA (Standards & Security)...';
        const sharedSource = path.join(sourceAgentDir, '.shared');
        const sharedDest = path.join(agentDir, '.shared');
        if (fs.existsSync(sharedSource) && path.resolve(sharedSource) !== path.resolve(sharedDest)) {
            await fs.copy(sharedSource, sharedDest, { overwrite: true });
        }
        spinner.succeed('Shared DNA synchronized to v' + require('../package.json').version);

        // 2. Restore/Update Rules
        spinner.start('Verifying Rules & Compliance...');
        const rulesToInstall = getRulesList(config.rules || 'creative', config.productType || 'other');
        const rulesDest = path.join(agentDir, 'rules');
        fs.ensureDirSync(rulesDest);
        
        let restoredRules = 0;
        for (const rule of rulesToInstall) {
            const srcRule = path.join(sourceAgentDir, 'rules', rule);
            const destRule = path.join(rulesDest, rule);
            // If rule doesn't exist or we are forcing, restore it
            if (!fs.existsSync(destRule) || options.force) {
                if (fs.existsSync(srcRule)) {
                    await fs.copy(srcRule, destRule);
                    restoredRules++;
                }
            }
        }
        spinner.succeed(`Verified Governance rules (${restoredRules} updated/restored)`);

        // 3. Sync Specialist Agents
        spinner.start('Checking Specialist Agents...');
        const agentsDir = path.join(sourceAgentDir, 'agents');
        const allAgents = fs.existsSync(agentsDir) ? fs.readdirSync(agentsDir) : [];
        const agentsToInstall = getAgentsList(config.rules || 'creative', config.productType || 'other', allAgents);
        const agentsDest = path.join(agentDir, 'agents');
        fs.ensureDirSync(agentsDest);

        let restoredAgents = 0;
        for (const agent of agentsToInstall) {
            const srcAgent = path.join(agentsDir, agent);
            const destAgent = path.join(agentsDest, agent);
            if (!fs.existsSync(destAgent) || options.force) {
                if (fs.existsSync(srcAgent)) {
                    await fs.copy(srcAgent, destAgent);
                    restoredAgents++;
                }
            }
        }
        spinner.succeed(`Specialist Agents ready (${restoredAgents} updated/restored)`);

        // 4. Sync Workflows (Critical for slash commands)
        spinner.start('Restoring Workflows...');
        const workflowsDest = path.join(agentDir, 'workflows');
        fs.ensureDirSync(workflowsDest);
        const workflowsSourceDir = path.join(sourceAgentDir, 'workflows');
        
        let restoredWorkflows = 0;
        const workflowsToInstall = config.workflows || [];
        
        for (const workflow of workflowsToInstall) {
            const workflowFile = `${workflow}.md`;
            const srcWorkflow = path.join(workflowsSourceDir, workflowFile);
            const destWorkflow = path.join(workflowsDest, workflowFile);
            
            if (!fs.existsSync(destWorkflow) || options.force) {
                if (fs.existsSync(srcWorkflow)) {
                    await fs.copy(srcWorkflow, destWorkflow);
                    restoredWorkflows++;
                }
            }
        }
        spinner.succeed(`Operational Workflows ready (${restoredWorkflows} restored)`);

        // 4. Update Core Configuration (GEMINI.md)
        spinner.start('Updating Core Constitution (GEMINI.md)...');
        const geminiContent = generateGeminiMd(
            config.rules || 'creative', 
            config.language || 'vi', 
            config.productType || 'other', 
            config.agentName || path.basename(projectPath) // Use Agent Name if valid
        );
        
        const rootGeminiPath = path.join(projectPath, 'GEMINI.md');
        const agentGeminiPath = path.join(agentDir, 'GEMINI.md');

        // Update GEMINI.md but preserve custom instructions if possible? 
        // For now, let's use the backup strategy from handled in create.js logic
        // But for Repair, users expect a "Fix", so we might overwrite or create .new
        fs.writeFileSync(agentGeminiPath, geminiContent); // Internal agent config should be latest
        
        if (!fs.existsSync(rootGeminiPath) || options.force) {
            fs.writeFileSync(rootGeminiPath, geminiContent);
        } else {
            // If exists, save as .new to let user compare
            fs.writeFileSync(path.join(projectPath, 'GEMINI.new.md'), geminiContent);
        }
        spinner.succeed('Core Configuration applied (v' + require('../package.json').version + ')');

        console.log(chalk.bold.green('\n✨ Repair & Sync Complete!'));
        console.log(chalk.white('  Your project is now fully aligned with Antigravity v' + require('../package.json').version));
        console.log(chalk.gray('  Checked: DNA, Rules, Agents, Workflows.'));
        if (!options.force) {
            console.log(chalk.dim('  (Note: Existing custom rules/agents were preserved. Use --force to reset them.)'));
        }
        console.log('');

    } catch (error) {
        spinner.fail(`Repair failed: ${error.message}`);
        console.error(error);
    }
}

module.exports = { repairProject };
