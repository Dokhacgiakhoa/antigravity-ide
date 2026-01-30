const fs = require('fs-extra');
const path = require('path');

const SOURCE_AGENT = path.join(__dirname, '..');
const DEST_ROOT = path.join(__dirname, '../../test_install_simulation');
const DEST_AGENT = path.join(DEST_ROOT, '.agent');

async function simulateInstall() {
  console.log('📦 Simulating "Full Install" Copy Logic...');
  console.log(`Source: ${SOURCE_AGENT}`);
  console.log(`Dest:   ${DEST_AGENT}`);

  // Cleanup prev run
  fs.removeSync(DEST_ROOT);
  fs.mkdirSync(DEST_AGENT, { recursive: true });

  // 1. Replicate copyBaseStructure Loop from cli/create.js
  const entries = fs.readdirSync(SOURCE_AGENT, { withFileTypes: true });
  
  for (const entry of entries) {
    if (entry.name === 'skills' || entry.name === 'GEMINI.md' || entry.name === 'START_HERE.md' || entry.name === 'node_modules' || entry.name === 'scripts') {
      continue; 
    }
    
    const srcPath = path.join(SOURCE_AGENT, entry.name);
    const destPath = path.join(DEST_AGENT, entry.name);
    
    console.log(`Copying ${entry.name}...`);
    await fs.copy(srcPath, destPath);
  }

  // 2. Verify .shared exists in Destination
  const sharedDest = path.join(DEST_AGENT, '.shared');
  if (fs.existsSync(sharedDest)) {
    console.log('✅ .shared folder copied successfully.');
    
    // Check specific deep file
    const deepFile = path.join(sharedDest, 'design-philosophy/presets/linear_glow.json');
    if (fs.existsSync(deepFile)) {
        console.log('✅ Deep checking: linear_glow.json exists.');
        console.log('🎉 VERIFICATION PASSED: Full install will include shared modules.');
    } else {
        console.error('❌ Deep checking FAILED: Content missing inside .shared');
        process.exit(1);
    }

  } else {
    console.error('❌ .shared folder FAILED to copy.');
    process.exit(1);
  }

  // Cleanup
  fs.removeSync(DEST_ROOT);
}

simulateInstall().catch(err => {
    console.error(err);
    process.exit(1);
});
