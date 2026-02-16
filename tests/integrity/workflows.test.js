const fs = require('fs');
const path = require('path');
const { WORKFLOW_DIR, parseFrontmatter, listMdFiles } = require('../helpers/frontmatter');

/**
 * Workflow Integrity Tests
 * Kiểm tra: frontmatter, description, naming, content.
 */

const wfFiles = listMdFiles(WORKFLOW_DIR);

describe('Workflow Integrity', () => {
    // --- Phải có ít nhất 1 workflow ---
    it('should have workflow files on disk', () => {
        expect(wfFiles.length).toBeGreaterThan(0);
    });

    // --- Mọi workflow phải có frontmatter ---
    describe('Frontmatter Validity', () => {
        wfFiles.forEach(file => {
            it(`"${file}" should have frontmatter (---)`, () => {
                const content = fs.readFileSync(path.join(WORKFLOW_DIR, file), 'utf-8');
                expect(content.trimStart()).toMatch(/^---/);
            });
        });
    });

    // --- Mọi workflow phải có description ---
    describe('Required Field: description', () => {
        wfFiles.forEach(file => {
            it(`"${file}" should have "description" field`, () => {
                const fm = parseFrontmatter(path.join(WORKFLOW_DIR, file));
                expect(fm.description).toBeDefined();
                expect(fm.description.length).toBeGreaterThan(0);
            });
        });
    });

    // --- Không có file rỗng ---
    describe('Content Size', () => {
        wfFiles.forEach(file => {
            it(`"${file}" should have meaningful content (>100 bytes)`, () => {
                const stat = fs.statSync(path.join(WORKFLOW_DIR, file));
                expect(stat.size).toBeGreaterThan(100);
            });
        });
    });

    // --- File naming convention ---
    describe('File Naming Convention', () => {
        wfFiles.forEach(file => {
            it(`"${file}" should be kebab-case`, () => {
                expect(file).toMatch(/^[a-z0-9][a-z0-9\-]*\.md$/);
            });
        });
    });
});
