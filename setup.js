const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');
const chalk = require('chalk');
const gradient = require('gradient-string');
const boxen = require('boxen');
const prompts = require('prompts');

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
    console.log(chalk.gray(`  Google Antigravity • Global Setup Wizard • v3.5.32`));
    console.log(chalk.gray('  Developed with 💡 by Dokhacgiakhoa'));
    console.log(gradient.atlas('━'.repeat(60)) + '\n');
    console.log(chalk.bold.hex('#00ffee')('🚀 Antigravity Global Setup Starting...\n'));

    // 0. Check for Python (Required for Advanced Skills)
    let hasPython = false;
    try {
        execSync('python --version', { stdio: 'ignore' });
        hasPython = true;
    } catch (e) {
        try {
            execSync('python3 --version', { stdio: 'ignore' });
            hasPython = true;
        } catch (e2) {}
    }

    if (!hasPython) {
        console.log(chalk.yellow('⚠️ Warning: Python was not detected on your system.'));
        console.log(chalk.gray('   Some "Pro" features (automated scans, evaluators) require Python.'));
        console.log(chalk.gray('   You can still use the core IDE, but it is recommended to install Python later.\n'));
    }

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
            name: 'engineMode',
            message: (prev, values) => values.lang === 'vi' ? 'Chọn Chế độ Động cơ:' : 'Select Engine Mode:',
            choices: (prev, values) => values.lang === 'vi' ? [
                { title: '⚡ Standard (Node.js) - Gọn nhẹ [Mặc định]', value: 'standard' },
                { title: '🧠 Advanced (Python) - Chuyên sâu AI & Data', value: 'advanced' }
            ] : [
                { title: '⚡ Standard (Node.js) - Lightweight [Default]', value: 'standard' },
                { title: '🧠 Advanced (Python) - Deep AI & Data', value: 'advanced' }
            ],
            initial: 0
        },
        {
            type: 'text',
            name: 'agentName',
            message: (prev, values) => values.lang === 'vi' ? 'Đặt tên định danh cho AI Agent của bạn:' : 'Name your AI Agent:',
            initial: 'Antigravity',
            validate: value => value.length < 2 ? 'Minimum 2 chars' : true
        },
        {
            type: 'select',
            name: 'projectScale',
            message: (prev, values) => values.lang === 'vi' ? 'Chọn Quy mô Dự án (Project Scale):' : 'Select Project Scale:',
            choices: (prev, values) => values.lang === 'vi' ? [
                { title: '👤 Personal (Cá nhân) - Tinh gọn (Core + Debug)', value: 'personal' },
                { title: '🏢 SME / Start-Up (Tiêu chuẩn) - Đầy đủ Big 5 [Mặc định]', value: 'sme' },
                { title: '🏭 Enterprise (Tập đoàn) - Full Option + Compliance', value: 'enterprise' }
            ] : [
                { title: '👤 Personal - Lean (Core + Debug)', value: 'personal' },
                { title: '🏢 SME / Start-Up - Standard Big 5 [Default]', value: 'sme' },
                { title: '🏭 Enterprise - Full Option + Compliance', value: 'enterprise' }
            ],
            initial: 1
        },
        {
            type: 'select',
            name: 'industryDomain',
            message: (prev, values) => values.lang === 'vi' ? 'Chọn Lĩnh vực dự án (Industry):' : 'Select Industry Domain:',
            choices: (prev, values) => values.lang === 'vi' ? [
                { title: '💰 Finance (Tài chính - Fintech)', value: 'finance' },
                { title: '🎓 Education (Giáo dục - EdTech)', value: 'education' },
                { title: '🍔 F&B / Restaurant (Nhà hàng)', value: 'fnb' },
                { title: '👤 Personal / Portfolio (Cá nhân)', value: 'personal' },
                { title: '🏥 Healthcare (Y tế - HealthTech)', value: 'healthcare' },
                { title: '🚚 Logistics (Vận tải)', value: 'logistics' },
                { title: '🔮 Other (Khác - Web/App cơ bản)', value: 'other' }
            ] : [
                { title: '💰 Finance (Fintech)', value: 'finance' },
                { title: '🎓 Education (EdTech)', value: 'education' },
                { title: '🍔 F&B / Restaurant', value: 'fnb' },
                { title: '👤 Personal / Portfolio', value: 'personal' },
                { title: '🏥 Healthcare (HealthTech)', value: 'healthcare' },
                { title: '🚚 Logistics', value: 'logistics' },
                { title: '🔮 Other (General Web/App)', value: 'other' }
            ],
            initial: 6
        }
    ], {
        onCancel: () => {
            console.log(chalk.red('\n✖ Setup cancelled / Đã hủy thiết lập'));
            process.exit(0);
        }
    });

    const { lang, engineMode, agentName, projectScale, industryDomain } = response;

    console.log(chalk.green(`\n📍 Configuration Saved:`));
    console.log(chalk.cyan(`   Language: ${lang === 'vi' ? 'Tiếng Việt' : 'English'}`));
    console.log(chalk.cyan(`   Agent Name: ${chalk.bold.yellow(agentName)}`));
    console.log(chalk.cyan(`   Engine: ${engineMode.toUpperCase()}`));
    console.log(chalk.cyan(`   Scale: ${projectScale.toUpperCase()}`));
    console.log(chalk.cyan(`   Industry: ${industryDomain ? industryDomain.toUpperCase() : 'OTHER'}\n`));

    // Save config
    if (!fs.existsSync(GLOBAL_DIR)) {
        fs.mkdirSync(GLOBAL_DIR, { recursive: true });
    }
    fs.writeFileSync(path.join(GLOBAL_DIR, '.config.json'), JSON.stringify({ lang, engineMode, agentName, projectScale, industryDomain }, null, 2));

    // 5. Sync Files (GLOBAL ALWAYS FULL ENTERPRISE)
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

    // 6. Initialize Workspace (Apply Scale Logic to Local Project)
    // Only copy specific rules to current directory based on Scale
    console.log(`\n📂 Initializing Workspace (Scale: ${projectScale.toUpperCase()})...`);
    
    const localAgentDir = path.join(process.cwd(), '.agent');
    const localRulesDir = path.join(localAgentDir, 'rules');

    // Create local .agent struct if not exists
    if (!fs.existsSync(localRulesDir)) fs.mkdirSync(localRulesDir, { recursive: true });

    // Define rules for each scale
    const rulesToApply = {
        'personal': ['GEMINI.md', 'security.md', 'debug.md'],
        'sme': ['GEMINI.md', 'security.md', 'frontend.md', 'backend.md', 'debug.md', 'business.md'],
        'enterprise': null // null means ALL files from Global
    };

    const targetRules = rulesToApply[projectScale];

    if (targetRules) {
        // Copy specific files from GLOBAL to LOCAL
        targetRules.forEach(file => {
            const globalFile = path.join(GLOBAL_DIR, 'rules', file);
            const localFile = path.join(localRulesDir, file);
            if (fs.existsSync(globalFile)) {
                 fs.copyFileSync(globalFile, localFile);
            }
        });
        console.log(`✅ Applied ${targetRules.length} rules to Workspace.`);
    } else {
        // Enterprise: Copy ALL rules from Global to Local
         const globalRulesDir = path.join(GLOBAL_DIR, 'rules');
         if (fs.existsSync(globalRulesDir)) {
             fs.readdirSync(globalRulesDir).forEach(file => {
                 fs.copyFileSync(path.join(globalRulesDir, file), path.join(localRulesDir, file));
             });
         }
         console.log(`✅ Applied Full Enterprise rules to Workspace.`);
    }

    // 7. Inject Config into Workspace Rules (Agent Name & Domain)
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

    // 3. Localize Workflows
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
