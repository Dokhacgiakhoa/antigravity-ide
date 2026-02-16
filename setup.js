#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');
const chalk = require('chalk');
const gradient = require('gradient-string');
const boxen = require('boxen');
const prompts = require('prompts');

const MANIFEST = require('./cli/manifest.js');

const GLOBAL_DIR = path.join(os.homedir(), '.antigravity');
const SOURCE_DIR = path.join(__dirname, '.agent');

const syncFolders = ['rules', 'workflows', 'agents', 'skills', '.shared'];

async function setup() {
    // Clear screen
    console.log('\x1b[2J\x1b[0f');

    // Premium Banner Restoration
    const branding = `
    ___          __  _ ______                 _ __       
   /   |  ____  / /_(_) ____/________ __   __(_) /___  __
  / /| | / __ \\/ __/ / / __/ ___/ __ \`/ | / / / __/ / / /
 / ___ |/ / / / /_/ / /_/ / /  / /_/ /| |/ / / /_/ /_/ / 
/_/  |_/_/ /_/\\__/_/\\____/_/   \\__,_/ |___/_/\\__/\\__, /  
                                                 /____/   
    `;
    
    console.log(gradient.rainbow.multiline(branding));
    console.log(gradient.atlas('━'.repeat(60)));
    console.log(chalk.gray(`  Google Antigravity • Global Setup Wizard • v4.2.1`));
    console.log(chalk.gray('  Developed with 💡 by Dokhacgiakhoa'));
    console.log(gradient.atlas('━'.repeat(60)) + '\n');
    console.log(chalk.bold.hex('#00ffee')('🚀 Antigravity Global Setup Starting...\n'));

    // Interactive Prompts
    const response = await prompts([
        {
            type: 'select',
            name: 'lang',
            message: 'Select Language / Chọn Ngôn ngữ:',
            choices: [
                { title: 'Tiếng Việt (Vietnamese)', value: 'vi' },
                { title: 'English (Tiếng Anh)', value: 'en' }
            ],
            initial: 0
        },
        {
            type: 'select',
            name: 'operationMode',
            message: (prev, values) => values.lang === 'vi' ? 'Chọn Chế độ Vận hành (Mode):' : 'Select Operation Mode:',
            choices: (prev, values) => values.lang === 'vi' ? [
                { title: '⚡ INSTANT (MVP) - Khởi tạo Thần tốc, Đa năng', value: 'instant' },
                { title: '🏢 STANDARD (Pro) - Quy trình Chuẩn chuyên nghiệp', value: 'standard' },
                { title: '🏭 CREATIVE (Elite) - Sức mạnh tối đa, Chuyên biệt hóa', value: 'creative' }
            ] : [
                { title: '⚡ INSTANT (MVP) - Ultra Fast, Multi-tasking', value: 'instant' },
                { title: '🏢 STANDARD (Pro) - Professional Standard Flow', value: 'standard' },
                { title: '🏭 CREATIVE (Elite) - Maximum Power, Micro-Specialization', value: 'creative' }
            ],
            initial: 1
        }
    ], {
        onCancel: () => {
            console.log(chalk.red('\n✖ Setup cancelled / Đã hủy thiết lập'));
            process.exit(0);
        }
    });

    const { lang, operationMode } = response;

    // Use default values for hidden configs
    const engineMode = operationMode === 'creative' ? 'advanced' : 'standard';
    const agentName = 'Antigravity';
    const projectScale = operationMode;

    console.log(chalk.green(`\n📍 Configuration Saved:`));
    console.log(chalk.cyan(`   Language: ${lang === 'vi' ? 'Tiếng Việt' : 'English'}`));
    console.log(chalk.cyan(`   Mode: ${operationMode.toUpperCase()}`));
    console.log(chalk.cyan(`   Engine: ${engineMode.toUpperCase()} (Auto-configured)\n`));

    // Save config
    if (!fs.existsSync(GLOBAL_DIR)) {
        fs.mkdirSync(GLOBAL_DIR, { recursive: true });
    }
    fs.writeFileSync(path.join(GLOBAL_DIR, '.config.json'), JSON.stringify({ lang, engineMode, agentName, projectScale, operationMode }, null, 2));

    // 5. Smart Dependency Check (Post-Selection)
    if (engineMode === 'advanced' && !hasPython) {
        console.log('\n' + boxen(
            lang === 'vi' 
            ? chalk.bold.red('⚠️  CẢNH BÁO: CHƯA CÀI ĐẶT PYTHON!') + '\n\n' +
              chalk.white('Chế độ "Advanced" yêu cầu Python để chạy các thuật toán AI.') + '\n' +
              chalk.yellow('Vui lòng chạy lệnh sau để cài đặt tự động:')
            : chalk.bold.red('⚠️  WARNING: PYTHON NOT DETECTED!') + '\n\n' +
              chalk.white('Advanced Mode requires Python for AI algorithms.') + '\n' +
              chalk.yellow('Please run the following command to install:'),
            { padding: 1, borderColor: 'red', borderStyle: 'double' }
        ));

        let installCmd = '';
        if (os.platform() === 'win32') {
            // Recommendation: Python 3.13 (Latest - 1 strategy for Max Stability in 2026)
            installCmd = 'winget install Python.Python.3.13';
        } else if (os.platform() === 'darwin') {
            installCmd = 'brew install python@3.13';
        } else {
            installCmd = 'sudo apt update && sudo apt install python3.13 python3-pip';
        }

        console.log(chalk.black.bgCyan.bold(`  ${installCmd}  `) + '\n');
        
        // AI Delegation Prompt (New Feature)
        const checkMark = chalk.green('✔');
        const promptText = lang === 'vi' 
            ? `Hãy cài đặt Python 3.13 giúp tôi bằng lệnh: ${installCmd}`
            : `Please install Python 3.13 for me using: ${installCmd}`;

        console.log(boxen(
            (lang === 'vi' ? chalk.bold.yellow('🤖 COPY PROMPT NÀY GỬI CHO AI AGENT:') : chalk.bold.yellow('🤖 COPY THIS PROMPT FOR YOUR AI AGENT:')) + 
            '\n\n' + chalk.white(promptText),
            { padding: 1, borderColor: 'yellow', borderStyle: 'round', title: 'Delegate to AI / Ủy quyền cho AI' }
        ));

        console.log(chalk.gray(lang === 'vi' 
            ? '(Đã chọn phiên bản Stable N-1 để đảm bảo tương thích tốt nhất)' 
            : '(Selected Stable N-1 version for maximum compatibility)'));
        console.log(chalk.gray(lang === 'vi' ? '(Sau khi cài xong, hãy chạy lại setup)' : '(After installation, please run setup again)'));
        
        // Optional: Ask to auto-install? (Risk of permission issues, stick to suggestion for safety as per "Safety First" rule)
    }

    // 6. Sync Files (GLOBAL ALWAYS FULL ENTERPRISE)
    console.log('\n🔄 Checking Global Cache (Update if needed)...');
    syncFolders.forEach(folder => {
        const src = path.join(SOURCE_DIR, folder);
        const dest = path.join(GLOBAL_DIR, folder);

        if (fs.existsSync(src)) {
            // ALWAYS sync full content to Global (Central Repository)
            // This ensures Global always has the latest & greatest version of everything.
            if (os.platform() === 'win32') {
                try {
                    execSync(`robocopy "${src}" "${dest}" /E /NFL /NDL /NJH /NJS /nc /ns /np /XO`, { stdio: 'inherit' });
                } catch (e) {}
            } else {
                execSync(`mkdir -p "${dest}" && cp -R "${src}/"* "${dest}/"`, { stdio: 'inherit' });
            }
        }
    });
    console.log('✅ Global Cache is up-to-date (Full Enterprise Mode).');

    // 7. Initialize Workspace (Apply Manifest Logic to Local Project)
    console.log(`\n📂 Initializing Workspace (Mode: ${operationMode.toUpperCase()})...`);
    
    const localAgentDir = path.join(process.cwd(), '.agent');
    const localRulesDir = path.join(localAgentDir, 'rules'); // Keep this definition as it's used later
    
    ['rules', 'agents', 'workflows', 'skills', '.shared', 'core', 'scripts'].forEach(folder => {
        const globalFolder = path.join(GLOBAL_DIR, folder);
        const localFolder = path.join(localAgentDir, folder);
        
        if (!fs.existsSync(localFolder)) fs.mkdirSync(localFolder, { recursive: true });

        const manifestKey = folder.startsWith('.') ? folder.slice(1) : folder;
        const whitelist = modeConfig[manifestKey];

        if (fs.existsSync(globalFolder)) {
            fs.readdirSync(globalFolder).forEach(file => {
                // Suffix handling (e.g., orchestrator.eco.md)
                const isEcoVariant = file.includes('.eco.md') || file.includes('.instant.md'); // Backward compatibility for filenames
                const isUltraVariant = file.includes('.ultra.md') || file.includes('.creative.md');
                const isProVariant = !isEcoVariant && !isUltraVariant;

                let targetFileName = file;
                let shouldCopy = false;

                if (whitelist === '*') {
                    // Ultra Mode: Copy everything, but prefer ultra variants
                    if (isUltraVariant) {
                        targetFileName = file.replace('.ultra.md', '.md').replace('.creative.md', '.md');
                        shouldCopy = true;
                    } else if (isProVariant) {
                        const ultraVariant = file.replace('.md', '.ultra.md');
                        const creativeVariant = file.replace('.md', '.creative.md');
                        if (!fs.existsSync(path.join(globalFolder, ultraVariant)) && !fs.existsSync(path.join(globalFolder, creativeVariant))) {
                            shouldCopy = true;
                        }
                    }
                } else {
                    // Eco or Pro Mode: Only copy from whitelist
                    const baseName = file.replace('.eco.md', '.md').replace('.instant.md', '.md')
                                         .replace('.ultra.md', '.md').replace('.creative.md', '.md');
                    
                    if (whitelist.includes(baseName)) {
                        if (operationMode === 'eco') {
                            if (isEcoVariant) {
                                targetFileName = baseName;
                                shouldCopy = true;
                            } else if (isProVariant) {
                                const ecoVariant = file.replace('.md', '.eco.md');
                                const instantVariant = file.replace('.md', '.instant.md');
                                if (!fs.existsSync(path.join(globalFolder, ecoVariant)) && !fs.existsSync(path.join(globalFolder, instantVariant))) {
                                    shouldCopy = true;
                                }
                            }
                        } else if (operationMode === 'pro') {
                            if (isProVariant) {
                                shouldCopy = true;
                            }
                        }
                    }
                }

                if (shouldCopy) {
                    const srcPath = path.join(globalFolder, file);
                    const destPath = path.join(localFolder, targetFileName);

                    if (fs.lstatSync(srcPath).isDirectory()) {
                        // For skills (directories), we use recursive copy
                        if (os.platform() === 'win32') {
                            try {
                                execSync(`robocopy "${srcPath}" "${destPath}" /E /NFL /NDL /NJH /NJS /nc /ns /np /XO`, { stdio: 'inherit' });
                            } catch (e) {}
                        } else {
                            execSync(`mkdir -p "${destPath}" && cp -R "${srcPath}/"* "${destPath}/"`, { stdio: 'inherit' });
                        }
                    } else {
                        // For files
                        fs.copyFileSync(srcPath, destPath);
                    }
                }
            });
        }
    });

    console.log(`✅ Applied ${operationMode.toUpperCase()} resources to Workspace.`);

    // 8. Inject Config into Workspace Rules (Agent Name & Domain)
    const geminiRulePath = path.join(localRulesDir, 'GEMINI.md');
    if (fs.existsSync(geminiRulePath)) {
        let content = fs.readFileSync(geminiRulePath, 'utf-8');
        
        // Inject Agent Name
        if (agentName && agentName !== 'Antigravity') {
            content = content.replace(
                /Nhân dạng\*\*: Antigravity Orchestrator/g, 
                `Nhân dạng**: ${agentName} (Powered by Antigravity)`
            );
        }

        // Inject Industry Domain
        if (industryDomain) {
            const domainBlock = `- **Lĩnh vực hoạt động**: ${industryDomain.toUpperCase()}\n  - Hệ thống sẽ ưu tiên các pattern và best practice thuộc lĩnh vực này.`;
            
            // Insert before 'Giá trị cốt lõi' bullet point
            content = content.replace(/(- \*\*Giá trị cốt lõi)/, `${domainBlock}\n$1`);
        }

        fs.writeFileSync(geminiRulePath, content);
        // console.log(`✅ Configured GEMINI.md with Agent Name & Industry context.`); // Suppress simple log
    }

    // 3. Localize Workflows (Kept logic index same for simplicity, technically step 9 now)
    localizeWorkflows(lang);

    // FINAL SUMMARY (Premium Style)
    console.log('\n' + gradient.pastel.multiline('📦 Configuring Google Antigravity Environment'));
    console.log(gradient.atlas('━'.repeat(60)));
    
    console.log(chalk.green('√') + ' Global Rules Synced (Enterprise Standard)');
    console.log(chalk.green('√') + ' Workflows Localized');
    console.log(chalk.green('√') + ` Workspace Configured (${projectScale.toUpperCase()} Mode)`);
    console.log(chalk.green('√') + ' Context Injected (Identity & Domain)');
    
    console.log(gradient.rainbow('\n✓ SUCCESS! System Ready'));
    console.log(gradient.atlas('━'.repeat(60)));

    console.log(chalk.bold.yellow('\n🤖 Kích hoạt AI Agent (Next Steps):'));
    if (lang === 'vi') {
        console.log(`   1. Mở dự án:     ${chalk.cyan('cd <your-project>')}`);
        console.log(`   2. Mở Chat:      ${chalk.cyan('(Sử dụng AI Panel của IDE)')}`);
        console.log(`   3. Kích hoạt:    ${chalk.cyan('Đọc nội dung .agent/rules/GEMINI.md')}`);
        console.log(`\n   ✨ ${chalk.gray('AI sẽ tự động nhận diện danh tính ' + chalk.bold(agentName || 'Antigravity') + ' và lĩnh vực ' + chalk.bold(industryDomain || 'General'))}`);
    } else {
        console.log(`   1. Open Project: ${chalk.cyan('cd <your-project>')}`);
        console.log(`   2. Open Chat:    ${chalk.cyan('(Use IDE AI Panel)')}`);
        console.log(`   3. Activate:     ${chalk.cyan('Read .agent/rules/GEMINI.md')}`);
        console.log(`\n   ✨ ${chalk.gray('AI will automatically recognize ' + chalk.bold(agentName || 'Antigravity') + ' and ' + chalk.bold(industryDomain || 'General') + ' context.')}`);
    }
    console.log(gradient.atlas('━'.repeat(60)) + '\n');

    process.exit(0); // Exit properly to avoid that "Exit code 1"
}

function localizeWorkflows(lang) {
    // console.log('\n🌍 Localizing Workflows...'); // Suppress log
    try {
        const workflowsJSON = JSON.parse(fs.readFileSync(path.join(SOURCE_DIR, '.shared', 'i18n-master', 'workflows.json'), 'utf-8'));
        const workflowDir = path.join(GLOBAL_DIR, 'workflows');

        Object.keys(workflowsJSON).forEach(filename => {
            const filePath = path.join(workflowDir, filename);
            if (fs.existsSync(filePath)) {
                let content = fs.readFileSync(filePath, 'utf-8');
                const desc = workflowsJSON[filename][lang];
                
                const newContent = content.replace(/^description:.*$/m, `description: ${desc}`);
                
                if (newContent !== content) {
                    fs.writeFileSync(filePath, newContent);
                    console.log(`   - Translated ${filename}`);
                }
            }
        });
        console.log('✅ Localization Complete.');
    } catch (err) {
        console.error('❌ Localization failed:', err.message);
    }
}

setup();
