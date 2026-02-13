/**
 * Project creation logic
 */

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
const { execSync } = require('child_process');
const { getProjectConfig, getSkillsForCategories, confirmOverwrite } = require('./prompts');
const gradient = require('gradient-string');
const { getRulesList, getAgentsList } = require('./logic/manifest-manager');
const { getScaleConfig } = require('./logic/scale-rules');
const { repairProject } = require('./repair');
const { generateGeminiMd } = require('./logic/gemini-generator');

async function createProject(projectName, options, predefinedConfig = null) {
    try {
        // Determine target directory
        const isCurrentDir = !projectName || projectName === '.';
        const targetPath = isCurrentDir ? process.cwd() : path.resolve(process.cwd(), projectName);
        const targetName = isCurrentDir ? path.basename(process.cwd()) : projectName;

        // Get configuration (early for context)
        const config = predefinedConfig || await getProjectConfig(options.skipPrompts, targetName);
        config.projectName = targetName;
        config.force = options.force; 
        config.skipPrompts = options.skipPrompts;

        // --- SMART ENTRY: REPAIR OR CREATE ---
        if (fs.existsSync(path.join(targetPath, '.agent'))) {
            // It's an existing project!
            return await repairProject(targetPath, options, config);
        }

        const projectPath = targetPath;
        const finalProjectName = targetName;

        // Check if directory exists (but no .agent)
        if (!isCurrentDir && fs.existsSync(projectPath) && fs.readdirSync(projectPath).length > 0) {
            // Folder exists but it's not an Antigravity project - might be a normal repo
            // We'll proceed but it will act like an 'init'
        }

        console.log('\n');
        console.log(gradient.cristal('━'.repeat(60)));
        console.log(chalk.bold('  🛸 Antigravity IDE: Easy Vibe, Lazy Code'));
        console.log(gradient.cristal('━'.repeat(60)));
        console.log('');

        // Create project directory
        const spinner = ora('Creating project structure...').start();
        fs.mkdirSync(projectPath, { recursive: true });

        // --- MODULAR INSTALLATION START ---
        
        // 1. Resolve Rules & Agents based on Scale + Product
        const rulesToInstall = getRulesList(config.rules, config.productType);
        
        // We need list of ALL available agents to handle wildcards
        const agentsDir = path.join(__dirname, '..', '.agent', 'agents');
        const allAgents = fs.existsSync(agentsDir) ? fs.readdirSync(agentsDir) : [];
        const rawAgentsToInstall = getAgentsList(config.rules, config.productType, allAgents);
        const agentsToInstall = [...new Set(rawAgentsToInstall)];

        // 2. Copy Base Structure + Selective Rules/Agents
        await copyModularStructure(projectPath, config, rulesToInstall, agentsToInstall);
        spinner.succeed('Project structure created (Modular Mode)');

        // --- MODULAR INSTALLATION END ---

        // --- INTELLIGENT RESOURCE BALANCING START ---
        // Ensuring logical balance between Agents, Skills, and Workflows based on Scale
        
        let finalSkillCategories = config.skillCategories || [];
        let finalWorkflows = config.workflows || [];

        // If explicitly empty or missing, derive from Scale Rules
        // This ensures automated runs (CI/Test) get balanced resources seamlessly
        if (finalSkillCategories.length === 0 || finalWorkflows.length === 0 || config.rules === 'creative') {
            const scaleConfig = getScaleConfig(config.rules || 'creative'); // Default to creative if rule missing
            
            // For Creative mode, we FORCE full set to ensure nothing is stripped
            if (config.rules === 'creative') {
                finalSkillCategories = scaleConfig.coreSkillCategories;
                finalWorkflows = scaleConfig.baseWorkflows;
            } else {
                if (finalSkillCategories.length === 0) {
                    finalSkillCategories = scaleConfig.coreSkillCategories;
                    spinner.info(chalk.dim(`Auto-balanced Skills for ${config.rules}: ${finalSkillCategories.join(', ')}`));
                }
                
                if (finalWorkflows.length === 0) {
                    finalWorkflows = scaleConfig.baseWorkflows;
                    spinner.info(chalk.dim(`Auto-balanced Workflows for ${config.rules}: ${finalWorkflows.join(', ')}`));
                }
            }
        }
        // --- INTELLIGENT RESOURCE BALANCING END ---

        // Copy selected skills
        let skillCount = 0;
        if (finalSkillCategories.length > 0) {
            spinner.start('Installing selected skills...');
            skillCount = await copySkills(projectPath, finalSkillCategories, config.engineMode);
            spinner.succeed(`Installed ${skillCount} skills across ${finalSkillCategories.length} categories`);
        }

        // Copy workflows
        let workflowCount = 0;
        if (finalWorkflows.length > 0) {
            spinner.start('Setting up workflows...');
            workflowCount = await copyWorkflows(projectPath, finalWorkflows);
            spinner.succeed(`Configured ${workflowCount} workflows`);
        }

        // ... existing code ...

        // Print success message
        const sharedDir = path.join(__dirname, '..', '.agent', '.shared');
        let sharedCount = 0;
        if (fs.existsSync(sharedDir)) {
            ['core', 'technical', 'verticals'].forEach(dir => {
                const subDir = path.join(sharedDir, dir);
                if (fs.existsSync(subDir)) {
                    sharedCount += fs.readdirSync(subDir).filter(f => fs.lstatSync(path.join(subDir, f)).isDirectory()).length;
                }
            });
        }

        // Create GEMINI.md
        // generateGeminiMd(rules, language, industry, agentName)
        // Create GEMINI.md
        // generateGeminiMd(rules, language, industry, agentName)
        // Check if modular structure already handled it?
        // Actually, copyModularStructure already wrote it to Root in our previous edit to Step 5.
        // But copyModularStructure is only called if we are in Modular mode.
        // Let's ensure strict single source.
        
        // If copyModularStructure ran, GEMINI.md is already there.
        // We should check if it exists before overwriting, OR rely on the fact that modular structure is the main path.
        
        // Let's keep this block for safety in case copyModularStructure didn't run (unlikely in current flow)
        // But strictly, we removed the duplicate logic.
        // To be safe: If GEMINI.md exists at root, don't re-write it here unless FORCE.
        // Actually, the previous block (Step 5 in copyModularStructure) is INSIDE copyModularStructure.
        // The block here is at the end of createProject.
        
        // If we moved the root write to copyModularStructure (Step 5), then this block is DUPLICATE.
        // Let's remove this block to avoid double-logging.
        // Redundant fallback block removed
        
        const stats = {
            rules: rulesToInstall.length,
            agents: agentsToInstall.length,
            skills: skillCount,
            workflows: workflowCount,
            shared: sharedCount
        };
        printSuccessMessage(finalProjectName, config, stats);

    } catch (error) {
        console.error(chalk.red('\n❌ Error creating project:'), error.message);
        process.exit(1);
    }
}

// Helper to handle core file conflicts (auto-create backup if exists)
async function handleCoreFileConflict(filePath, fileName, force = false, skipPrompts = false) {
    if (!fs.existsSync(filePath)) {
        return { shouldWrite: true, targetPath: filePath };
    }

    if (force) {
        return { shouldWrite: true, targetPath: filePath, isOverwrite: true };
    }

    // Interactive Prompt (Only if prompts are allowed)
    if (!skipPrompts) {
        const shouldOverwrite = await confirmOverwrite(fileName);
        if (shouldOverwrite) {
            return { shouldWrite: true, targetPath: filePath, isOverwrite: true };
        }
    }

    // File exists - create backup with .new extension
    const dir = path.dirname(filePath);
    const ext = path.extname(fileName);
    const base = path.basename(fileName, ext);
    const newPath = path.join(dir, `${base}.new${ext}`);
    return { shouldWrite: true, targetPath: newPath, isBackup: true };
}

// Helper to determine file filter based on engine mode
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

async function copyModularStructure(projectPath, config, rulesList, agentsList) {
    const sourceAgentDir = path.join(__dirname, '..', '.agent');
    const destAgentDir = path.join(projectPath, '.agent');
    const filter = getEngineFilter(config.engineMode);
    
    // Create base .agent directory
    fs.mkdirSync(destAgentDir, { recursive: true });

    // 1. Copy Shared Modules (Always copy .shared but maybe filter later? For now keep simple)
    // To be strictly modular, we should only copy needed .shared. But let's copy all for safety first.
    if (fs.existsSync(path.join(sourceAgentDir, '.shared'))) {
        await fs.copy(path.join(sourceAgentDir, '.shared'), path.join(destAgentDir, '.shared'), { filter });
    }

    // 2. Copy Rules (SELECTIVE)
    const rulesDest = path.join(destAgentDir, 'rules');
    fs.mkdirSync(rulesDest, { recursive: true });
    
    for (const rule of rulesList) {
        const srcRule = path.join(sourceAgentDir, 'rules', rule);
        if (fs.existsSync(srcRule)) {
            await fs.copy(srcRule, path.join(rulesDest, rule));
        }
    }

    // 3. Copy Agents (SELECTIVE)
    const agentsDest = path.join(destAgentDir, 'agents');
    fs.mkdirSync(agentsDest, { recursive: true });

    for (const agent of agentsList) {
        const srcAgent = path.join(sourceAgentDir, 'agents', agent);
        if (fs.existsSync(srcAgent)) {
            await fs.copy(srcAgent, path.join(agentsDest, agent));
        }
    }

    // 4. Ensure 'skills' and 'workflows' dir exists
    fs.mkdirSync(path.join(destAgentDir, 'skills'), { recursive: true });
    fs.mkdirSync(path.join(destAgentDir, 'workflows'), { recursive: true });

    // 5. Create GEMINI.md (Core file) - Write ONLY to Root, not to .agent/
    const geminiContent = generateGeminiMd(config.rules, config.language, config.industryDomain, config.agentName);
    const geminiDecision = await handleCoreFileConflict(path.join(projectPath, 'GEMINI.md'), 'GEMINI.md', config.force, config.skipPrompts);

    if (geminiDecision.shouldWrite) {
        fs.writeFileSync(geminiDecision.targetPath, geminiContent);
        if (geminiDecision.isBackup) {
            console.log(chalk.yellow(`  ℹ️  GEMINI.md exists, created ${path.basename(geminiDecision.targetPath)}`));
        } else if (geminiDecision.isOverwrite) {
             console.log(chalk.green(`  ✓ Overwrote existing GEMINI.md`));
        }
    }

    // 6. Copy RESOURCES.md to .agent/ (Internal doc)
    const resourcesSource = path.join(sourceAgentDir, 'RESOURCES.md');
    if (fs.existsSync(resourcesSource)) {
         const resourcesDest = path.join(destAgentDir, 'RESOURCES.md');
         // No need for conflict check usually strictly internal, but safe to overwrite or skip
         if (!fs.existsSync(resourcesDest) || config.force) {
             fs.copyFileSync(resourcesSource, resourcesDest);
         }
    }
}




async function copySkills(projectPath, categories, engineMode) {
    const skillsSourceDir = path.join(__dirname, '..', '.agent', 'skills');
    const skillsDestDir = path.join(projectPath, '.agent', 'skills');
    const filter = getEngineFilter(engineMode);

    if (!fs.existsSync(skillsSourceDir)) return 0;

    const selectedSkills = getSkillsForCategories(categories);
    const uniqueSkills = [...new Set(selectedSkills)]; // Deduplicate to avoid overwrites and double-counting
    let count = 0;

    for (const skill of uniqueSkills) {
        const skillPath = path.join(skillsSourceDir, skill);
        if (fs.existsSync(skillPath)) {
            const destPath = path.join(skillsDestDir, skill);
            await fs.copy(skillPath, destPath, { filter });
            count++;
        }
    }
    return count;
}

async function copyWorkflows(projectPath, workflows) {
    const workflowsSourceDir = path.join(__dirname, '..', '.agent', 'workflows');
    const workflowsDestDir = path.join(projectPath, '.agent', 'workflows');
    let count = 0;

    for (const workflow of workflows) {
        const workflowFile = `${workflow}.md`;
        const source = path.join(workflowsSourceDir, workflowFile);
        if (fs.existsSync(source)) {
            await fs.copy(source, path.join(workflowsDestDir, workflowFile));
            count++;
        }
    }
    return count;
}

function printSuccessMessage(projectName, config, stats = null) {
    console.log('\n');
    console.log(gradient.rainbow('━'.repeat(60)));
    console.log(gradient.morning.multiline('  ✓ SUCCESS! Project Ready'));
    console.log(gradient.rainbow('━'.repeat(60)));

    // Concise config display
    console.log('');
    console.log(chalk.bold('📋 Config'));
    console.log(chalk.gray('  Project:   ') + gradient.cristal(projectName));
    console.log(chalk.gray('  Template:  ') + chalk.cyan(config.template));
    console.log(chalk.gray('  Scale:     ') + chalk.cyan(config.rules.toUpperCase()));

    // AI Activation Instructions
    console.log('');
    console.log(gradient.pastel('━'.repeat(60)));
    console.log(chalk.bold.cyan(config.language === 'vi' ? '🤖 Kích hoạt AI Agent' : '🤖 AI Agent Activation'));
    console.log('');

    const agentName = config.agentName || 'Agent';

    if (config.language === 'vi') {
        console.log(chalk.gray('  1. Mở khung chat: ') + chalk.white('(IDE AI Chat)'));
        console.log(chalk.gray('  2. Cấu hình:      ') + chalk.white('Conversation: ') + chalk.cyan('Planing') + chalk.gray(' • ') + chalk.white('Model: ') + chalk.cyan('Gemini'));
        console.log(chalk.gray('  3. Kích hoạt:     ') + chalk.green(`Soạn tin: "thức dậy đi ${agentName}"`));
    } else {
        console.log(chalk.gray('  1. Open chat:     ') + chalk.white('(IDE AI Chat)'));
        console.log(chalk.gray('  2. Configure:     ') + chalk.white('Conversation: ') + chalk.cyan('Planing') + chalk.gray(' • ') + chalk.white('Model: ') + chalk.cyan('Gemini'));
        console.log(chalk.gray('  3. Activate:      ') + chalk.green(`Type: "wake up ${agentName}"`));
    }

    // Dynamic Stats Display
    if (stats) {
        console.log('');
        const statLine = [
            chalk.white(`${stats.rules} Rules`),
            chalk.white(`${stats.agents} Agents`),
            chalk.white(`${stats.skills} Skills`),
            chalk.white(`${stats.workflows} Workflows`),
            chalk.white(`${stats.shared} DNA`)
        ].join(chalk.gray(' • '));
        console.log(gradient.pastel('  ✨ Installed: ') + statLine);
    } else {
        // Fallback for non-modular runs
        console.log('');
        console.log(gradient.pastel('  ✨ Installed: ') + chalk.white('Adaptive Rules') + chalk.gray(' • ') + chalk.white('Specialist Agents') + chalk.gray(' • ') + chalk.white('Enterprise DNA'));
    }

    console.log('');
    console.log(chalk.dim(config.language === 'vi' ? '     AI sẽ tự động tải các kỹ năng và quy tắc.' : '     The AI will load all skills and rules automatically.'));
    console.log(gradient.pastel('━'.repeat(60)));
    console.log('');
    console.log(chalk.gray('  Developed with 💡 by Dokhacgiakhoa'));
    console.log('');
}

module.exports = {
    createProject,
    generateGeminiMd
};
