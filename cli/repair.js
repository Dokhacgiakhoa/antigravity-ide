/**
 * Project Repair & Sync logic
 */

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
const gradient = require('gradient-string');
const { getRulesList, getAgentsList } = require('./logic/manifest-manager');
const { generateGeminiMd } = require('./logic/gemini-generator');
const { getScaleConfig } = require('./logic/scale-rules');

// Helper to determine file filter based on engine mode (Copied from create.js for consistency)
function getEngineFilter(engineMode) {
    return (src, dest) => {
        if (engineMode === 'standard') {
            const lowerSrc = src.toLowerCase();
            if (lowerSrc.endsWith('.py') ||
                lowerSrc.endsWith('.pyc') ||
                lowerSrc.endsWith('requirements.txt') ||
                lowerSrc.endsWith('pipfile') ||
                lowerSrc.endsWith('pyproject.toml') ||
                lowerSrc.includes('__pycache__') ||
                lowerSrc.includes('venv/') ||
                lowerSrc.includes('.venv/')) {
                return false;
            }
        }
        return true;
    };
}

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

        // 3.5 Sync Skills (Critical for Agent Capabilities)
        spinner.start('Restoring Skills...');
        const skillsSourceDir = path.join(sourceAgentDir, 'skills');
        const skillsDestDir = path.join(agentDir, 'skills');
        fs.ensureDirSync(skillsDestDir);

        // Get allowed skills based on Scale
        const scaleConfig = getScaleConfig(config.rules || 'creative');
        // If creative, use all skills logic eventually, but for now let's use core set + existing
        // Actually, for repair, we should probably restore what's defined in scale rules
        // OR if it's creative/full, restore ALL skills?
        // Let's stick to the "Mandatory" set from Scale Config to ensure they always exist
        const skillsToRestore = scaleConfig.coreSkillCategories || []; 
        
        // Also we might want to scan ALL skills if mode is creative? 
        // For simplicity and safety in Repair, let's restore the Core set defined by the Scale.
        // And if the user has "creative", that usually implies a lot of skills.
        
        let restoredSkills = 0;
        const filter = getEngineFilter(config.engineMode || 'standard');

        if (fs.existsSync(skillsSourceDir)) {
            // Flatten skills list if it's categories (logic copied from prompts/create)
            // But wait, scaleConfig.coreSkillCategories are CATEGORIES (folders in skills/)
            // Actually in current codebase, skills are direct folders in .agent/skills/
            // Let's verify structure. `skillsSourceDir` has folders like `3d-web-experience`, `api-fuzzing...`
            // `coreSkillCategories` in scale-rules are arrays of these folder names.
            
            for (const skill of skillsToRestore) {
                const srcSkill = path.join(skillsSourceDir, skill);
                const destSkill = path.join(skillsDestDir, skill);
                
                if (fs.existsSync(srcSkill)) {
                    if (!fs.existsSync(destSkill) || options.force) {
                        await fs.copy(srcSkill, destSkill, { filter, overwrite: true });
                        restoredSkills++;
                    }
                }
            }
        }
        spinner.succeed(`Skills synchronized (${restoredSkills} restored)`);

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
        console.log(chalk.white('  Your project is now aligned with Antigravity v' + require('../package.json').version));
        
        const statLine = [
            chalk.white(`${restoredRules} Rules`),
            chalk.white(`${restoredAgents} Agents`),
            chalk.white(`${restoredSkills} Skills`),
            chalk.white(`${restoredWorkflows} Workflows`)
        ].join(chalk.gray(' • '));
        console.log(gradient.pastel('  ✨ Synced: ') + statLine);

        if (!options.force) {
            console.log(chalk.dim('\n  (Note: Existing custom rules/agents were preserved. Use --force to reset them.)'));
        }
        console.log('');

    } catch (error) {
        spinner.fail(`Repair failed: ${error.message}`);
        console.error(error);
    }
}

module.exports = { repairProject };
