const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🛡️  Starting Pre-Release Verification...');

const VERIFY_DIR = path.join(__dirname, 'release-verify-test');
const ROOT_DIR = path.join(__dirname, '..');

// Clean up previous test
if (fs.existsSync(VERIFY_DIR)) {
    fs.rmSync(VERIFY_DIR, { recursive: true, force: true });
}
fs.mkdirSync(VERIFY_DIR);

console.log('📂 Created test directory:', VERIFY_DIR);

try {
    // Run create/repair in verification mode
    // We simulate a fresh install logic by importing logic/create or repair
    // Actually, let's run the CLI itself using node
    console.log('🚀 Running antigravity-ide in test dir...');
    
    // We need to run it inside the test dir
    execSync(`node ${path.join(ROOT_DIR, 'cli', 'index.js')} . --force --skip-prompts`, { 
        cwd: VERIFY_DIR,
        stdio: 'inherit',
        env: { ...process.env, SKIP_PROMPTS: 'true' } 
    });

    console.log('\n🔍 Inspecting Installed Files...');
    const checks = [
        { path: 'GEMINI.md', required: true },
        { path: '.agent', required: true },
        { path: '.agent/rules', required: true },
        { path: '.agent/skills', required: true },
        { path: '.agent/workflows', required: true },
    ];

    let passed = true;
    for (const check of checks) {
        const fullPath = path.join(VERIFY_DIR, check.path);
        const exists = fs.existsSync(fullPath);
        if (check.required && !exists) {
            console.error(`❌ MISSING: ${check.path}`);
            passed = false;
        } else {
            console.log(`✅ FOUND: ${check.path}`);
        }
        
        // Verify skills count
        if (check.path === '.agent/skills' && exists) {
            const count = fs.readdirSync(fullPath).length;
            console.log(`   Skills count: ${count}`);
            if (count === 0) {
                console.error('❌ FAILURE: Skills directory is empty!');
                passed = false;
            }
        }
    }

    if (!passed) {
        console.error('\n❌ VERIFICATION FAILED. DO NOT PUBLISH.');
        process.exit(1);
    } else {
        console.log('\n✨ ALL CHECKS PASSED. Ready for release.');
        fs.rmSync(VERIFY_DIR, { recursive: true, force: true });
        process.exit(0);
    }

} catch (e) {
    console.error('❌ CRITICAL ERROR during verification:', e);
    process.exit(1);
}
