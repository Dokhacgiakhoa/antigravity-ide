const fs = require('fs');
const path = require('path');
const {
    ROOT_DIR, AGENT_DIR, SKILL_DIR, RULE_DIR, WORKFLOW_DIR,
    SHARED_DIR, CORE_DIR, SCRIPT_DIR,
    listMdFiles, listSubdirs
} = require('../helpers/frontmatter');

/**
 * Resources Completeness Audit
 * Báo cáo tổng thể + test các ngưỡng tối thiểu.
 */

describe('Resources Completeness Audit', () => {
    // --- Đếm tổng ---
    it('should report full resource inventory', () => {
        const agents = listMdFiles(AGENT_DIR);
        const skills = listSubdirs(SKILL_DIR);
        const skillsWithMd = skills.filter(s =>
            fs.existsSync(path.join(SKILL_DIR, s, 'SKILL.md'))
        );
        const rules = listMdFiles(RULE_DIR);
        const workflows = listMdFiles(WORKFLOW_DIR);
        const shared = listSubdirs(SHARED_DIR);
        const core = fs.existsSync(CORE_DIR) ? fs.readdirSync(CORE_DIR) : [];
        const scripts = fs.existsSync(SCRIPT_DIR) ? fs.readdirSync(SCRIPT_DIR) : [];

        console.log('\n╔══════════════════════════════════════════╗');
        console.log('║   📋 ANTIGRAVITY RESOURCE INVENTORY      ║');
        console.log('╠══════════════════════════════════════════╣');
        console.log(`║ Agents:           ${String(agents.length).padStart(3)} files              ║`);
        console.log(`║ Skills (total):   ${String(skills.length).padStart(3)} folders            ║`);
        console.log(`║ Skills (w/ SKILL.md): ${String(skillsWithMd.length).padStart(3)} ✅            ║`);
        console.log(`║ Skills (orphan):  ${String(skills.length - skillsWithMd.length).padStart(3)} ⚠️              ║`);
        console.log(`║ Rules:            ${String(rules.length).padStart(3)} files              ║`);
        console.log(`║ Workflows:        ${String(workflows.length).padStart(3)} files              ║`);
        console.log(`║ Shared Modules:   ${String(shared.length).padStart(3)} folders            ║`);
        console.log(`║ Core:             ${String(core.length).padStart(3)} files              ║`);
        console.log(`║ Scripts:          ${String(scripts.length).padStart(3)} files              ║`);
        console.log('╚══════════════════════════════════════════╝');

        expect(true).toBe(true);
    });

    // --- Minimum thresholds ---
    describe('Minimum Thresholds', () => {
        it('should have at least 30 agents', () => {
            expect(listMdFiles(AGENT_DIR).length).toBeGreaterThanOrEqual(30);
        });

        it('should have at least 30 skills with SKILL.md', () => {
            const skills = listSubdirs(SKILL_DIR);
            const withMd = skills.filter(s =>
                fs.existsSync(path.join(SKILL_DIR, s, 'SKILL.md'))
            );
            expect(withMd.length).toBeGreaterThanOrEqual(30);
        });

        it('should have at least 10 rules', () => {
            expect(listMdFiles(RULE_DIR).length).toBeGreaterThanOrEqual(10);
        });

        it('should have at least 15 workflows', () => {
            expect(listMdFiles(WORKFLOW_DIR).length).toBeGreaterThanOrEqual(15);
        });

        it('should have at least 10 shared modules', () => {
            expect(listSubdirs(SHARED_DIR).length).toBeGreaterThanOrEqual(10);
        });
    });

    // --- Root directory cleanliness ---
    describe('Root Directory', () => {
        const ALLOWED_ROOT_MD = [
            'README.md',
            'README.vi.md',
            'CHANGELOG.md',
            'AGENT_FLOW.md',
            'COPYRIGHT.md',
            'ERRORS.md',
            'GEMINI.md',
            'SKILLS.md'
        ];

        it('should only have allowed .md files at root', () => {
            const rootFiles = fs.readdirSync(ROOT_DIR)
                .filter(f => {
                    try {
                        return f.endsWith('.md') && !fs.statSync(path.join(ROOT_DIR, f)).isDirectory();
                    } catch { return false; }
                });

            const unexpected = rootFiles.filter(f => !ALLOWED_ROOT_MD.includes(f));
            if (unexpected.length > 0) {
                console.log(`⚠️ Unexpected root .md files: ${unexpected.join(', ')}`);
            }
            expect(unexpected).toEqual([]);
        });
    });

    // --- Package.json consistency ---
    describe('Package.json', () => {
        const pkg = require(path.join(ROOT_DIR, 'package.json'));

        it('should have a valid version', () => {
            expect(pkg.version).toMatch(/^\d+\.\d+\.\d+/);
        });

        it('should have a test script', () => {
            expect(pkg.scripts?.test).toBeDefined();
        });

        it('should have jest as devDependency', () => {
            const hasJest = pkg.devDependencies?.jest || pkg.dependencies?.jest;
            expect(hasJest).toBeDefined();
        });
    });
});
