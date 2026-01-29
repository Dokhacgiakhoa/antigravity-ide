const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const GLOBAL_DIR = path.join(os.homedir(), '.antigravity');
const SOURCE_DIR = path.join(__dirname, '.agent');

const syncFolders = ['rules', 'workflows', 'agents', 'skills', '.shared'];

async function setup() {
    console.log('🚀 Antigravity Global Setup Starting...');

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
        console.log('⚠️ Warning: Python was not detected on your system.');
        console.log('   Some "Pro" features (automated scans, evaluators) require Python.');
        console.log('   You can still use the core IDE, but it is recommended to install Python later.');
    }

    // 1. Ask for Language
    const lang = await new Promise(resolve => {
        rl.question('🌐 Select Language / Chọn Ngôn ngữ (en/vi) [vi]: ', (answer) => {
            resolve(answer.toLowerCase() === 'en' ? 'en' : 'vi');
        });
    });

    // 2. Ask for Engine Mode
    console.log('\n🛠️ Select Engine Mode / Chọn Chế độ Động cơ:');
    console.log('   1. Standard (Node.js) - Gọn nhẹ, Không cần cấu hình [Mặc định]');
    console.log('   2. Advanced (Python) - Chuyên nghiệp, Yêu cầu đã cài đặt Python');
    const engineMode = await new Promise(resolve => {
        rl.question('👉 Choice / Lựa chọn của sếp (1/2) [1]: ', (answer) => {
            resolve(answer === '2' ? 'advanced' : 'standard');
        });
    });

    // 3. Ask for Project Scale
    console.log('\n⚖️  Select Project Scale / Chọn Quy mô Dự án:');
    console.log('   1. Personal (Cá nhân) - Tinh gọn, chỉ gồm Core + Debug');
    console.log('   2. SME / Start-Up (Tiêu chuẩn) - Đầy đủ bộ Big 5 + Business [Mặc định]');
    console.log('   3. Enterprise (Tập đoàn) - Full option + Compliance Rules');
    
    const projectScale = await new Promise(resolve => {
        rl.question('👉 Choice / Lựa chọn của sếp (1/2/3) [2]: ', (answer) => {
            if (answer === '1') resolve('personal');
            else if (answer === '3') resolve('enterprise');
            else resolve('sme');
        });
    });

    console.log(`📍 Selected Language: ${lang.toUpperCase()}`);
    console.log(`📍 Selected Engine: ${engineMode.toUpperCase()}`);
    console.log(`📍 Selected Scale: ${projectScale.toUpperCase()}`);

    // Save config
    if (!fs.existsSync(GLOBAL_DIR)) {
        fs.mkdirSync(GLOBAL_DIR, { recursive: true });
    }
    fs.writeFileSync(path.join(GLOBAL_DIR, '.config.json'), JSON.stringify({ lang, engineMode, projectScale }, null, 2));

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

    // 3. Localize Workflows
    localizeWorkflows(lang);

    console.log('\n✨ Thiết lập Hoàn tất! IDE của sếp hiện đã được Toàn cầu hóa.');
    console.log(`Thư mục lưu trữ toàn cục: ${GLOBAL_DIR}`);
    
    rl.close();
}

function localizeWorkflows(lang) {
    console.log('\n🌍 Localizing Workflows...');
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
