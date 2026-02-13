const fs = require('fs-extra');
const path = require('path');

const TEST_DIR = path.join(__dirname, 'fs-merge-test');
const SRC = path.join(TEST_DIR, 'src');
const DEST = path.join(TEST_DIR, 'dest');

// Setup
fs.ensureDirSync(SRC);
fs.ensureDirSync(DEST);

// src has fileA, fileB
fs.writeFileSync(path.join(SRC, 'fileA.txt'), 'Source A');
fs.writeFileSync(path.join(SRC, 'fileB.txt'), 'Source B');

// dest has fileA (modified)
fs.writeFileSync(path.join(DEST, 'fileA.txt'), 'Dest A (Modified)');

(async () => {
    try {
        console.log('Testing fs.copy with overwrite: false...');
        // Verify initial state
        console.log('Initial Dest A:', fs.readFileSync(path.join(DEST, 'fileA.txt'), 'utf8'));
        console.log('Initial Dest B Exists:', fs.existsSync(path.join(DEST, 'fileB.txt')));

        await fs.copy(SRC, DEST, { overwrite: false });

        console.log('--- After Copy ---');
        console.log('Dest A:', fs.readFileSync(path.join(DEST, 'fileA.txt'), 'utf8')); // Should be Dest A (Modified)
        console.log('Dest B Exists:', fs.existsSync(path.join(DEST, 'fileB.txt'))); // Should be true (Source B)
        
        if (fs.readFileSync(path.join(DEST, 'fileA.txt'), 'utf8') === 'Dest A (Modified)' && 
            fs.existsSync(path.join(DEST, 'fileB.txt'))) {
            console.log('✅ Success! fs.copy merges directories correctly.');
        } else {
            console.log('❌ Failure! fs.copy did not behave as improved repair logic needs.');
        }

    } catch (e) {
        console.error('❌ Error:', e.message);
    } finally {
        fs.removeSync(TEST_DIR);
    }
})();
