const fs = require('fs-extra');
const path = require('path');
const { syncRecursively, MARKER_START, MARKER_END } = require('../update');

// Mock fs-extra (which includes fs) - BUT update.js uses 'fs', not 'fs-extra'.
// Since update.js requires 'fs', we should mock 'fs'. 
// However, since we are using Jest, we can mock 'fs'.
jest.mock('fs', () => {
    return require('memfs').fs; 
});
// Memfs is not installed. We should use Jest's manual mock or just mock implementations.
// Actually, creating physical files in a temp dir is safer and easier to debug than mocking fs for complex recursive logic.
jest.unmock('fs'); 

describe('Updater Logic (Integration)', () => {
    const testRoot = path.join(__dirname, 'update_temp');
    const sourceDir = path.join(testRoot, 'source');
    const destDir = path.join(testRoot, 'dest');

    beforeEach(() => {
        fs.emptyDirSync(testRoot);
        fs.ensureDirSync(sourceDir);
        fs.ensureDirSync(destDir);
    });

    afterAll(() => {
        fs.removeSync(testRoot);
    });

    it('should copy new files from source to dest', () => {
        fs.writeFileSync(path.join(sourceDir, 'new_rule.md'), '# New Rule');
        
        syncRecursively(sourceDir, destDir);
        
        expect(fs.existsSync(path.join(destDir, 'new_rule.md'))).toBe(true);
        expect(fs.readFileSync(path.join(destDir, 'new_rule.md'), 'utf-8')).toBe('# New Rule');
    });

    it('should overwrite existing files without markers', () => {
        fs.writeFileSync(path.join(sourceDir, 'config.json'), '{"ver": 2}');
        fs.writeFileSync(path.join(destDir, 'config.json'), '{"ver": 1}');
        
        syncRecursively(sourceDir, destDir);
        
        expect(fs.readFileSync(path.join(destDir, 'config.json'), 'utf-8')).toBe('{"ver": 2}');
    });

    it('should PRESERVE content between markers in existing files', () => {
        const sourceContent = `
# System Config
version: 2.0
${MARKER_START}
# Standard Default
${MARKER_END}
end_config: true
`;

        const userContent = `
# System Config
version: 1.0
${MARKER_START}
# MY CUSTOM CONFIG
key: value
${MARKER_END}
end_config: true
`;

        fs.writeFileSync(path.join(sourceDir, 'settings.yaml'), sourceContent);
        fs.writeFileSync(path.join(destDir, 'settings.yaml'), userContent);
        
        syncRecursively(sourceDir, destDir);
        
        const result = fs.readFileSync(path.join(destDir, 'settings.yaml'), 'utf-8');
        
        // Should have Version 2.0 (from source)
        expect(result).toContain('version: 2.0');
        // Should have "MY CUSTOM CONFIG" (from dest preserved)
        expect(result).toContain('# MY CUSTOM CONFIG');
        // Should NOT have "Standard Default"
        expect(result).not.toContain('# Standard Default');
    });

    it('should handle missing markers in source gracefully (overwrite)', () => {
         const sourceContent = `New Content Without Markers`;
         const userContent = `Old Content ${MARKER_START}custom${MARKER_END}`;
         
         fs.writeFileSync(path.join(sourceDir, 'file.txt'), sourceContent);
         fs.writeFileSync(path.join(destDir, 'file.txt'), userContent);
         
         syncRecursively(sourceDir, destDir);
         
         // If source has no markers, logic (lines 92-101 in update.js)
         // checks if contentToBuffer (from dest) exists.
         // And then checks if NEW content has markers.
         // If new content has NO markers, it cannot inject the buffer!
         // So it should overwrite completely.
         
         expect(fs.readFileSync(path.join(destDir, 'file.txt'), 'utf-8')).toBe(sourceContent);
    });
});
