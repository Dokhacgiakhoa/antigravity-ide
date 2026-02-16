const fs = require('fs');
const path = require('path');
const { SHARED_DIR, CORE_DIR, SCRIPT_DIR, listSubdirs } = require('../helpers/frontmatter');

/**
 * Shared Modules, Core, Scripts Integrity Tests
 * Kiểm tra: structure, content validity, syntax.
 */

describe('Shared Modules Integrity', () => {
    // Exclude category folders that just contain other modules
    const IGNORED_FOLDERS = ['core', 'technical', 'verticals'];
    const sharedDirs = listSubdirs(SHARED_DIR).filter(d => !IGNORED_FOLDERS.includes(d));

    // --- Phải có ít nhất 1 shared module ---
    it('should have shared modules on disk', () => {
        expect(sharedDirs.length).toBeGreaterThan(0);
    });

    // --- Mỗi shared module phải có ít nhất 1 .md file ---
    describe('Structure Validity', () => {
        sharedDirs.forEach(mod => {
            it(`"${mod}" should contain at least 1 .md file`, () => {
                const modPath = path.join(SHARED_DIR, mod);
                const files = fs.readdirSync(modPath);
                const mdFiles = files.filter(f => f.endsWith('.md'));
                expect(mdFiles.length).toBeGreaterThan(0);
            });
        });
    });

    // --- Mỗi shared module phải có index.md hoặc README.md ---
    describe('Entry Point', () => {
        sharedDirs.forEach(mod => {
            it(`"${mod}" should have index.md or README.md`, () => {
                const modPath = path.join(SHARED_DIR, mod);
                const hasIndex = fs.existsSync(path.join(modPath, 'index.md'));
                const hasReadme = fs.existsSync(path.join(modPath, 'README.md'));
                expect(hasIndex || hasReadme).toBe(true);
            });
        });
    });

    // --- Naming convention ---
    describe('Folder Naming Convention', () => {
        sharedDirs.forEach(mod => {
            it(`"${mod}" should be kebab-case`, () => {
                expect(mod).toMatch(/^[a-z0-9][a-z0-9\-]*$/);
            });
        });
    });
});

describe('Core Files Integrity', () => {
    // --- personality.md phải tồn tại ---
    it('personality.md should exist', () => {
        expect(fs.existsSync(path.join(CORE_DIR, 'personality.md'))).toBe(true);
    });

    it('personality.md should have content', () => {
        const stat = fs.statSync(path.join(CORE_DIR, 'personality.md'));
        expect(stat.size).toBeGreaterThan(100);
    });

    // --- archetypes.json phải parse được ---
    it('archetypes.json should exist', () => {
        expect(fs.existsSync(path.join(CORE_DIR, 'archetypes.json'))).toBe(true);
    });

    it('archetypes.json should be valid JSON', () => {
        const content = fs.readFileSync(path.join(CORE_DIR, 'archetypes.json'), 'utf-8');
        expect(() => JSON.parse(content)).not.toThrow();
    });

    it('archetypes.json should have at least 1 archetype', () => {
        const data = JSON.parse(fs.readFileSync(path.join(CORE_DIR, 'archetypes.json'), 'utf-8'));
        // Nếu là array
        if (Array.isArray(data)) {
            expect(data.length).toBeGreaterThan(0);
        } else {
            // Nếu là object
            expect(Object.keys(data).length).toBeGreaterThan(0);
        }
    });
});

describe('Scripts Integrity', () => {
    const SCRIPT_FILES = fs.existsSync(SCRIPT_DIR)
        ? fs.readdirSync(SCRIPT_DIR).filter(f => !fs.statSync(path.join(SCRIPT_DIR, f)).isDirectory())
        : [];

    // --- Phải có scripts ---
    it('should have script files on disk', () => {
        expect(SCRIPT_FILES.length).toBeGreaterThan(0);
    });

    // --- Mỗi script không rỗng ---
    describe('Script Content', () => {
        SCRIPT_FILES.forEach(file => {
            it(`"${file}" should not be empty`, () => {
                const stat = fs.statSync(path.join(SCRIPT_DIR, file));
                expect(stat.size).toBeGreaterThan(20);
            });
        });
    });

    // --- .js scripts phải parse được ---
    describe('JavaScript Scripts Syntax', () => {
        const jsFiles = SCRIPT_FILES.filter(f => f.endsWith('.js'));

        jsFiles.forEach(file => {
            it(`"${file}" should have valid JavaScript syntax`, () => {
                const content = fs.readFileSync(path.join(SCRIPT_DIR, file), 'utf-8');
                // Kiểm tra không throw SyntaxError khi parse bằng Function constructor
                expect(() => {
                    new Function(content);
                }).not.toThrow();
            });
        });
    });

    // --- .py scripts phải có shebang hoặc import ---
    describe('Python Scripts Structure', () => {
        const pyFiles = SCRIPT_FILES.filter(f => f.endsWith('.py'));

        pyFiles.forEach(file => {
            it(`"${file}" should have Python markers (import/def/class)`, () => {
                const content = fs.readFileSync(path.join(SCRIPT_DIR, file), 'utf-8');
                const hasPyMarker = /^(import |from |def |class |#!.*python)/m.test(content);
                expect(hasPyMarker).toBe(true);
            });
        });
    });
});
