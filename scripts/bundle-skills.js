const fs = require('fs');
const path = require('path');

const SKILLS_DIR = path.join(__dirname, '../.agent/skills');
const OUTPUT_FILE = path.join(__dirname, '../assets/skills-bundle.json');
const ASSETS_DIR = path.join(__dirname, '../assets');

// Ensure assets directory exists
if (!fs.existsSync(ASSETS_DIR)) {
    fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

function bundleSkills() {
    console.log('📦 Bundling skills...');
    const startTime = Date.now();
    let fileCount = 0;
    const bundle = {};

    function scanDir(dir, relativePath = '') {
        const items = fs.readdirSync(dir);

        items.forEach(item => {
            const fullPath = path.join(dir, item);
            const relativeItemPath = path.join(relativePath, item).replace(/\\/g, '/'); // Normalize slashes
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                scanDir(fullPath, relativeItemPath);
            } else {
                // Read file content
                // Only bundle text files usually associated with skills
                if (['.md', '.json', '.yaml', '.yml', '.py', '.js', '.txt'].includes(path.extname(item))) {
                    const content = fs.readFileSync(fullPath, 'utf-8');
                    bundle[relativeItemPath] = content;
                    fileCount++;
                }
            }
        });
    }

    if (fs.existsSync(SKILLS_DIR)) {
        scanDir(SKILLS_DIR);
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(bundle, null, 0)); // Minified JSON
        
        const sizeMB = (fs.statSync(OUTPUT_FILE).size / 1024 / 1024).toFixed(2);
        const duration = ((Date.now() - startTime) / 1000).toFixed(2);

        console.log(`✅ Skills bundled successfully!`);
        console.log(`   - Files packed: ${fileCount}`);
        console.log(`   - Bundle size:  ${sizeMB} MB`);
        console.log(`   - Time taken:   ${duration}s`);
        console.log(`   - Output:       ${OUTPUT_FILE}`);
    } else {
        console.error(`❌ Skills directory not found: ${SKILLS_DIR}`);
        process.exit(1);
    }
}

bundleSkills();
