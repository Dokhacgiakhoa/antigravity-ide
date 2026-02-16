const fs = require('fs');
const path = require('path');
const { SKILL_DIR, listSubdirs } = require('../helpers/frontmatter');

/**
 * Skill Integrity Tests
 * Kiểm tra: SKILL.md existence, orphan detection, folder structure.
 */

const skillFolders = listSubdirs(SKILL_DIR);

// Danh sách skill đã biết có SKILL.md (master kits + core skills)
// Dùng disk scan thay vì hardcode
const skillsWithSkillMd = skillFolders.filter(s =>
    fs.existsSync(path.join(SKILL_DIR, s, 'SKILL.md'))
);
const orphanSkills = skillFolders.filter(s =>
    !fs.existsSync(path.join(SKILL_DIR, s, 'SKILL.md'))
);

describe('Skill Integrity', () => {
    // --- Phải có ít nhất 1 skill ---
    it('should have skill folders on disk', () => {
        expect(skillFolders.length).toBeGreaterThan(0);
    });

    // --- Coverage report ---
    it('should report SKILL.md coverage', () => {
        const coverage = (skillsWithSkillMd.length / skillFolders.length * 100).toFixed(1);
        console.log(`\n📊 Skill Coverage: ${skillsWithSkillMd.length}/${skillFolders.length} (${coverage}%)`);
        console.log(`   ✅ With SKILL.md: ${skillsWithSkillMd.length}`);
        console.log(`   ⚠️  Orphans (no SKILL.md): ${orphanSkills.length}`);
        if (orphanSkills.length > 0) {
            console.log(`   Orphan list: ${orphanSkills.slice(0, 10).join(', ')}${orphanSkills.length > 10 ? '...' : ''}`);
        }
        // Không fail — chỉ báo cáo
        expect(true).toBe(true);
    });

    // --- Mọi skill có SKILL.md phải có nội dung ---
    describe('SKILL.md Content Validity', () => {
        skillsWithSkillMd.forEach(skill => {
            it(`"${skill}/SKILL.md" should not be empty`, () => {
                const filePath = path.join(SKILL_DIR, skill, 'SKILL.md');
                const stat = fs.statSync(filePath);
                expect(stat.size).toBeGreaterThan(50);
            });
        });
    });

    // --- SKILL.md phải có frontmatter hoặc heading ---
    describe('SKILL.md Structure', () => {
        skillsWithSkillMd.forEach(skill => {
            it(`"${skill}/SKILL.md" should have frontmatter or heading`, () => {
                const content = fs.readFileSync(
                    path.join(SKILL_DIR, skill, 'SKILL.md'), 'utf-8'
                );
                // Phải có frontmatter (---) HOẶC heading (#)
                const hasFrontmatter = content.startsWith('---');
                const hasHeading = /^#\s+/m.test(content);
                expect(hasFrontmatter || hasHeading).toBe(true);
            });
        });
    });

    // --- Folder naming convention ---
    describe('Folder Naming Convention', () => {
        skillFolders.forEach(skill => {
            it(`"${skill}" should be kebab-case`, () => {
                expect(skill).toMatch(/^[a-z0-9][a-z0-9\-]*$/);
            });
        });
    });

    // --- Không có folder rỗng (0 files) ---
    describe('No Completely Empty Folders', () => {
        skillFolders.forEach(skill => {
            it(`"${skill}" should contain at least 1 file`, () => {
                const files = fs.readdirSync(path.join(SKILL_DIR, skill));
                expect(files.length).toBeGreaterThan(0);
            });
        });
    });
});
