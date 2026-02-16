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
const { getSkillsForCategories } = require('./logic/skill-definitions');

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

        // 1b. Restore Root Concepts (Architecture, Concepts, etc.) - FIX v4.1.30
        const rootFiles = fs.readdirSync(sourceAgentDir).filter(f => f.endsWith('.md') && f !== 'GEMINI.md');
        for (const file of rootFiles) {
            const srcFile = path.join(sourceAgentDir, file);
            const destFile = path.join(agentDir, file);
            if (!fs.existsSync(destFile) || options.force) {
                await fs.copy(srcFile, destFile, { overwrite: options.force });
            }
        }

        // 2. Restore/Update Rules
        spinner.start('Verifying Rules & Compliance...');
        const rulesSourceDir = path.join(sourceAgentDir, 'rules');
        const rulesDestDir = path.join(agentDir, 'rules');
        fs.ensureDirSync(rulesDestDir);
        
        let restoredRules = 0;
        if (fs.existsSync(rulesSourceDir)) {
            const rulesToRestore = getRulesList(config.rules || 'creative', config.productType || 'other');
            for (const rule of rulesToRestore) {
                const srcRule = path.join(rulesSourceDir, rule);
                const destRule = path.join(rulesDestDir, rule);
                
                if (fs.existsSync(srcRule)) {
                    // Smart Repair: Merge folders (Add missing files, preserve existing) unless --force
                    await fs.copy(srcRule, destRule, { filter: getEngineFilter('standard'), overwrite: options.force });
                    restoredRules++;
                }
            }
        }
        spinner.succeed(`Verified Governance rules (${restoredRules} updated/restored)`);

        // 2. Sync Agents
        spinner.start('Checking Specialist Agents...');
        const agentsSourceDir = path.join(sourceAgentDir, 'agents');
        const agentsDestDir = path.join(agentDir, 'agents');
        fs.ensureDirSync(agentsDestDir);
        
        let restoredAgents = 0;
        if (fs.existsSync(agentsSourceDir)) {
            // Need logical Agent List here too if we want to be precise, or just restore defined ones?
            // For repair, we restore what's defined in manifest or ALL?
            // Let's rely on manifest logic if possible, or restore based on config.
            const allAgentsInSource = fs.readdirSync(agentsSourceDir); // Get all available agents
            const agentsToRestore = getAgentsList(config.rules || 'creative', config.productType || 'other', allAgentsInSource);
            
            for (const agent of agentsToRestore) {
                const srcAgent = path.join(agentsSourceDir, agent);
                const destAgent = path.join(agentsDestDir, agent);
                
                if (fs.existsSync(srcAgent)) {
                    await fs.copy(srcAgent, destAgent, { filter: getEngineFilter('standard'), overwrite: options.force });
                    restoredAgents++;
                }
            }
        }
        spinner.succeed(`Specialist Agents ready (${restoredAgents} updated/restored)`);

        // 3. Sync Skills (The Big One)
        spinner.start('Synchronizing Skills...');
        const skillsSourceDir = path.join(sourceAgentDir, 'skills');
        const skillsDestDir = path.join(agentDir, 'skills');
        fs.ensureDirSync(skillsDestDir);
        
        // Get allowed skills based on Scale
        const scaleConfig = getScaleConfig(config.rules || 'creative');
        // If creative, use all skills logic eventually, but for now let's use core set + existing
        // Actually, for repair, we should probably restore what's defined in scale rules
        // OR if it's creative/full, restore ALL skills?
        // Let's stick to the "Mandatory" set from Scale Config to ensure they always exist
        const skillsToRestoreCategories = scaleConfig.coreSkillCategories || []; 
        
        let restoredSkills = 0;

        if (fs.existsSync(skillsSourceDir)) {
            // Flatten skills list via logic/skill-definitions
            // scaleConfig.coreSkillCategories are CATEGORIES (e.g. ['webdev', 'ai'])
            // We need to map them to actual folder names (e.g. ['modern-web-architect', ...])
            const skillsToInstall = getSkillsForCategories(skillsToRestoreCategories);
            
            // Deduplicate
            const uniqueSkills = [...new Set(skillsToInstall)];

            for (const skill of uniqueSkills) {
                const srcSkill = path.join(skillsSourceDir, skill);
                const destSkill = path.join(skillsDestDir, skill);
                
                if (fs.existsSync(srcSkill)) {
                    // Smart Repair: Merge folders (Add missing files, preserve existing) unless --force
                    // fs.copy with overwrite: false will copy MISSING files and SKIP existing ones. Perfect.
                    await fs.copy(srcSkill, destSkill, { filter: getEngineFilter('standard'), overwrite: options.force });
                    restoredSkills++;
                }
            }
        }
        spinner.succeed(`Skills synchronized (${restoredSkills} restored)`);



        // 4. Sync Workflows (Critical for slash commands)
        spinner.start('Restoring Workflows...');
        const workflowsSourceDir = path.join(sourceAgentDir, 'workflows');
        const workflowsDestDir = path.join(agentDir, 'workflows');
        fs.ensureDirSync(workflowsDestDir);
        
        let restoredWorkflows = 0;
        if (fs.existsSync(workflowsSourceDir)) {
            const workflowsToRestore = scaleConfig.baseWorkflows || [];
            
            for (const workflow of workflowsToRestore) {
                const workflowFile = `${workflow}.md`;
                const srcWorkflow = path.join(workflowsSourceDir, workflowFile);
                const destWorkflow = path.join(workflowsDestDir, workflowFile);
                
                if (fs.existsSync(srcWorkflow)) {
                    // Files: Overwrite: false means keep existing. force -> overwrite.
                    await fs.copy(srcWorkflow, destWorkflow, { overwrite: options.force });
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

        // Cleanup: Remove redundant .agent/GEMINI.md if it exists (User request: Don't duplicate)
        if (fs.existsSync(agentGeminiPath)) {
            fs.unlinkSync(agentGeminiPath);
        }
        
        if (!fs.existsSync(rootGeminiPath) || options.force) {
            fs.writeFileSync(rootGeminiPath, geminiContent);
        } else {
            // Check if content is different before creating .new
            const currentContent = fs.readFileSync(rootGeminiPath, 'utf8');
            if (currentContent !== geminiContent) {
                fs.writeFileSync(path.join(projectPath, 'GEMINI.new.md'), geminiContent);
                console.log(chalk.yellow(`  ℹ️  Configuration updated: See GEMINI.new.md`));
            }
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
