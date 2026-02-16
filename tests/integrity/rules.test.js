const fs = require('fs');
const path = require('path');
const { RULE_DIR, parseFrontmatter, listMdFiles } = require('../helpers/frontmatter');

/**
 * Rule Integrity Tests
 * Kiểm tra: frontmatter, format chuẩn, không file rỗng.
 */

const ruleFiles = listMdFiles(RULE_DIR);

describe('Rule Integrity', () => {
    // --- Phải có ít nhất 1 rule ---
    it('should have rule files on disk', () => {
        expect(ruleFiles.length).toBeGreaterThan(0);
    });

    // --- Mọi rule phải bắt đầu bằng frontmatter ---
    describe('Frontmatter Validity', () => {
        ruleFiles.forEach(file => {
            it(`"${file}" should have frontmatter (---)`, () => {
                const content = fs.readFileSync(path.join(RULE_DIR, file), 'utf-8');
                expect(content.trimStart()).toMatch(/^---/);
            });
        });
    });

    // --- Rule phải có trigger hoặc description ---
    describe('Required Metadata', () => {
        ruleFiles.forEach(file => {
            it(`"${file}" should have trigger or description`, () => {
                const fm = parseFrontmatter(path.join(RULE_DIR, file));
                const hasAny = fm.trigger || fm.description;
                expect(hasAny).toBeTruthy();
            });
        });
    });

    // --- Không có file rỗng (<50 bytes) ---
    describe('Content Size', () => {
        ruleFiles.forEach(file => {
            it(`"${file}" should have meaningful content (>50 bytes)`, () => {
                const stat = fs.statSync(path.join(RULE_DIR, file));
                expect(stat.size).toBeGreaterThan(50);
            });
        });
    });

    // --- File naming convention ---
    describe('File Naming Convention', () => {
        ruleFiles.forEach(file => {
            it(`"${file}" should be kebab-case`, () => {
                expect(file).toMatch(/^[a-zA-Z0-9][a-zA-Z0-9\-.]*\.md$/);
            });
        });
    });

    // --- GEMINI.md variants phải có trigger: always_on ---
    describe('GEMINI.md Variants', () => {
        const geminiFiles = ruleFiles.filter(f => f.startsWith('GEMINI'));

        geminiFiles.forEach(file => {
            it(`"${file}" should have trigger: always_on`, () => {
                const fm = parseFrontmatter(path.join(RULE_DIR, file));
                expect(fm.trigger).toBe('always_on');
            });
        });
    });
});
