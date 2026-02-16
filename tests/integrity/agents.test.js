const fs = require('fs');
const path = require('path');
const { AGENT_DIR, parseFrontmatter, listMdFiles } = require('../helpers/frontmatter');

/**
 * Agent Integrity Tests
 * Kiểm tra: frontmatter validity, required fields, phát hiện agent không có description.
 */

const agentFiles = listMdFiles(AGENT_DIR);

describe('Agent Integrity', () => {
    // --- Phải có ít nhất 1 agent ---
    it('should have agents on disk', () => {
        expect(agentFiles.length).toBeGreaterThan(0);
    });

    // --- Mọi agent phải có frontmatter ---
    describe('Frontmatter Validity', () => {
        agentFiles.forEach(file => {
            it(`"${file}" should have valid frontmatter`, () => {
                const fm = parseFrontmatter(path.join(AGENT_DIR, file));
                expect(fm._hasFrontmatter).toBe(true);
            });
        });
    });

    // --- Mọi agent phải có field "name" ---
    describe('Required Field: name', () => {
        agentFiles.forEach(file => {
            it(`"${file}" should have "name" field`, () => {
                const fm = parseFrontmatter(path.join(AGENT_DIR, file));
                expect(fm.name).toBeDefined();
                expect(fm.name.length).toBeGreaterThan(0);
            });
        });
    });

    // --- Mọi agent phải có field "description" ---
    describe('Required Field: description', () => {
        agentFiles.forEach(file => {
            it(`"${file}" should have "description" field`, () => {
                const fm = parseFrontmatter(path.join(AGENT_DIR, file));
                expect(fm.description).toBeDefined();
                expect(fm.description.length).toBeGreaterThan(0);
            });
        });
    });

    // --- Tên file phải lowercase + kebab-case ---
    describe('File Naming Convention', () => {
        agentFiles.forEach(file => {
            it(`"${file}" should be kebab-case`, () => {
                // Cho phép: letters, numbers, hyphens, dots (cho variant .eco.md)
                expect(file).toMatch(/^[a-z0-9][a-z0-9\-.]*\.md$/);
            });
        });
    });

    // --- Không có file rỗng ---
    describe('No Empty Files', () => {
        agentFiles.forEach(file => {
            it(`"${file}" should not be empty`, () => {
                const stat = fs.statSync(path.join(AGENT_DIR, file));
                expect(stat.size).toBeGreaterThan(50); // frontmatter tối thiểu ~50 bytes
            });
        });
    });
});
