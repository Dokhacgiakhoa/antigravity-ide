const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

const GLOBAL_DIR = path.join(os.homedir(), '.antigravity');
const WORKSPACE_DIR = __dirname;
const GLOBAL_VERSION_FILE = path.join(GLOBAL_DIR, 'VERSION');
const WORKSPACE_VERSION_FILE = path.join(WORKSPACE_DIR, 'VERSION');
const CONFIG_FILE = path.join(GLOBAL_DIR, '.config.json');

const MARKER_START = '[USER_CUSTOM_START]';
const MARKER_END = '[USER_CUSTOM_END]';

console.log('🔍 Checking for updates with Content Preservation...');

if (!fs.existsSync(GLOBAL_VERSION_FILE)) {
    console.log('⚠️ Global version not found. Please run "npx antigravity-setup" first.');
    process.exit(1);
}

const globalVer = fs.readFileSync(GLOBAL_VERSION_FILE, 'utf8').trim();
const workspaceVer = fs.readFileSync(WORKSPACE_VERSION_FILE, 'utf8').trim();

console.log(`Current Global Version: ${globalVer}`);
console.log(`Available Workspace Version: ${workspaceVer}`);

// Get language from config
let lang = 'vi';
if (fs.existsSync(CONFIG_FILE)) {
    try {
        const config = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf-8'));
        lang = config.lang || 'vi';
    } catch (e) {}
}

if (globalVer === workspaceVer) {
    console.log('✅ You are already on the latest version.');
} else {
    console.log('🚀 Updating global files to version ' + workspaceVer + '...');
    
    const syncFolders = ['rules', 'workflows', 'agents', 'skills', '.shared'];
    const SOURCE_BASE = path.join(WORKSPACE_DIR, '.agent');

    syncFolders.forEach(folder => {
        const srcDir = path.join(SOURCE_BASE, folder);
        const destDir = path.join(GLOBAL_DIR, folder);

        if (!fs.existsSync(srcDir)) return;
        if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

        syncRecursively(srcDir, destDir);
    });

    // Finalize Localization
    localizeWorkflows(lang);

    fs.copyFileSync(WORKSPACE_VERSION_FILE, GLOBAL_VERSION_FILE);
    console.log('\n✨ Update Successful! Version ' + workspaceVer + ' is now active globally.');
}

function syncRecursively(srcDir, destDir) {
    const items = fs.readdirSync(srcDir);

    items.forEach(item => {
        const srcPath = path.join(srcDir, item);
        const destPath = path.join(destDir, item);

        if (fs.lstatSync(srcPath).isDirectory()) {
            if (!fs.existsSync(destPath)) fs.mkdirSync(destPath, { recursive: true });
            syncRecursively(srcPath, destPath);
        } else {
            let contentToBuffer = "";
            
            if (fs.existsSync(destPath)) {
                try {
                    const globalContent = fs.readFileSync(destPath, 'utf8');
                    const startIdx = globalContent.indexOf(MARKER_START);
                    const endIdx = globalContent.indexOf(MARKER_END);

                    if (startIdx !== -1 && endIdx !== -1) {
                        contentToBuffer = globalContent.substring(startIdx + MARKER_START.length, endIdx);
                        console.log(`  🛡️ Preserved custom content in: ${item}`);
                    }
                } catch (e) {}
            }

            let newContent = fs.readFileSync(srcPath, 'utf8');
            
            if (contentToBuffer) {
                const newStartIdx = newContent.indexOf(MARKER_START);
                const newEndIdx = newContent.indexOf(MARKER_END);
                
                if (newStartIdx !== -1 && newEndIdx !== -1) {
                    newContent = newContent.substring(0, newStartIdx + MARKER_START.length) 
                                 + contentToBuffer 
                                 + newContent.substring(newEndIdx);
                }
            }

            fs.writeFileSync(destPath, newContent);
        }
    });
}

function localizeWorkflows(lang) {
    console.log('\n🌍 Applying Language Preferences...');
    try {
        const workflowsJSON = JSON.parse(fs.readFileSync(path.join(WORKSPACE_DIR, '.agent', '.shared', 'i18n-master', 'workflows.json'), 'utf-8'));
        const workflowDir = path.join(GLOBAL_DIR, 'workflows');

        Object.keys(workflowsJSON).forEach(filename => {
            const filePath = path.join(workflowDir, filename);
            if (fs.existsSync(filePath)) {
                let content = fs.readFileSync(filePath, 'utf-8');
                const desc = workflowsJSON[filename][lang];
                const newContent = content.replace(/^description:.*$/m, `description: ${desc}`);
                if (newContent !== content) {
                    fs.writeFileSync(filePath, newContent);
                }
            }
        });
        console.log(`✅ Language ${lang.toUpperCase()} applied.`);
    } catch (err) {
        console.error('❌ Localization failed during update:', err.message);
    }
}
