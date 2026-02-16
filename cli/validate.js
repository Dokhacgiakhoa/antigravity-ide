
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const gradient = require('gradient-string');

async function validateProject(projectPath = '.') {
    console.log(gradient.pastel('\n🛡️  Antigravity Standard Validator'));
    console.log(chalk.gray('   Checking compliance with Agent Skills Standard...\n'));

    const skillsDir = path.join(projectPath, '.agent', 'skills');
    
    if (!fs.existsSync(skillsDir)) {
        console.log(chalk.red('❌ Error: .agent/skills directory not found.'));
        console.log(chalk.yellow('   Run "antigravity init" or "setup" to initialize project structure.'));
        return;
    }

    const categories = fs.readdirSync(skillsDir).filter(f => fs.lstatSync(path.join(skillsDir, f)).isDirectory());
    let errorCount = 0;
    let skillCount = 0;

    // Iterate through all skills (flat structure in Antigravity v4)
    // Note: Antigravity v4 uses a flat structure inside .agent/skills mostly, 
    // but the Standard suggests .agent/skills/<category>/<skill>. 
    // We will support checking recursively.

    const checkDirectory = (dir) => {
        const items = fs.readdirSync(dir);
        let hasSkillMd = items.includes('SKILL.md');

        if (hasSkillMd) {
            skillCount++;
            // This is a skill folder. Check content.
            const skillPath = path.join(dir, 'SKILL.md');
            const content = fs.readFileSync(skillPath, 'utf-8');
            
            // 1. Check Frontmatter
            if (!content.startsWith('---')) {
                console.log(chalk.red(`   [FAIL] ${path.relative(skillsDir, dir)}: Missing YAML Frontmatter`));
                errorCount++;
            }

            // 2. Token Economy Check (Rough heuristic: Content too long?)
            const lines = content.split('\n').length;
            if (lines > 500) { // Arbitrary "High Density" limit
                console.log(chalk.yellow(`   [WARN] ${path.relative(skillsDir, dir)}: Too verbose (${lines} lines). Consider splitting into 'references/'`));
            }
        } else {
            // Recurse if directory
            items.forEach(item => {
                const fullPath = path.join(dir, item);
                if (fs.lstatSync(fullPath).isDirectory()) {
                    checkDirectory(fullPath);
                }
            });
        }
    };

    checkDirectory(skillsDir);

    console.log('\n' + chalk.gray('-'.repeat(40)));
    if (errorCount === 0) {
        console.log(chalk.green(`✅ Validation Passed! (${skillCount} Skills)`));
        console.log(chalk.gray('   Project follows High-Density Standard.'));
    } else {
        console.log(chalk.red(`❌ Validation Failed with ${errorCount} errors.`));
    }
}

module.exports = { validateProject };
