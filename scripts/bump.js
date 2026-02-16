const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// Get new version from command line argument
const newVersion = process.argv[2];

if (!newVersion) {
    console.error(chalk.red('❌ Error: Please provide a new version number.'));
    console.log('Usage: node scripts/bump.js <new-version>');
    process.exit(1);
}

// Regex for strict version validation (x.y.z)
if (!/^\d+\.\d+\.\d+$/.test(newVersion)) {
    console.error(chalk.red('❌ Error: Invalid version format. Use x.y.z (e.g., 4.1.9)'));
    process.exit(1);
}

const rootDir = path.join(__dirname, '..');

// 1. Files to update
const files = [
    {
        path: 'package.json',
        replace: [
            { regex: /"version": "\d+\.\d+\.\d+"/, sub: `"version": "${newVersion}"` }
        ]
    },
    {
        path: 'README.md',
        replace: [
            { regex: /Advanced Edition • v\d+\.\d+\.\d+ Meta-Engine/, sub: `Advanced Edition • v${newVersion} Meta-Engine` },
            { regex: /The Premium Edge \(v\d+\.\d+\.\d+\)/, sub: `The Premium Edge (v${newVersion})` }
        ]
    },
    {
        path: 'README.vi.md',
        replace: [
            { regex: /Phiên bản Nâng cao • v\d+\.\d+\.\d+ Meta-Engine/, sub: `Phiên bản Nâng cao • v${newVersion} Meta-Engine` },
            { regex: /Điểm khác biệt \(Phiên bản v\d+\.\d+\.\d+\)/, sub: `Điểm khác biệt (Phiên bản v${newVersion})` }
        ]
    },
    {
        path: 'docs/MASTER_OPERATIONS.md',
        replace: [
            { regex: /\*\*Version\*\*: \d+\.\d+\.\d+ \(Stable Marketing/, sub: `**Version**: ${newVersion} (Stable Marketing` }
        ]
    },
    {
        path: 'docs/MASTER_OPERATIONS.vi.md',
        replace: [
            { regex: /\*\*Version\*\*: \d+\.\d+\.\d+ \(Stable Marketing/, sub: `**Version**: ${newVersion} (Stable Marketing` }
        ]
    }
];

console.log(chalk.cyan(`🚀 Bumping version to v${newVersion} across ${files.length} files...\n`));

let errorCount = 0;

// 2. Execute Updates
files.forEach(file => {
    const filePath = path.join(rootDir, file.path);
    if (!fs.existsSync(filePath)) {
        console.warn(chalk.yellow(`⚠️  File not found needed for bump: ${file.path}`));
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    file.replace.forEach(rep => {
        if (rep.regex.test(content)) {
            content = content.replace(rep.regex, rep.sub);
            updated = true;
        } else {
            // Only warn if it's package.json (critical), others might have structural changes
            if (file.path === 'package.json') {
                console.warn(chalk.yellow(`   ⚠️  Pattern not found in ${file.path}: ${rep.regex}`));
            }
        }
    });

    if (updated) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(chalk.green(`  ✓ Updated ${file.path}`));
    } else {
        console.log(chalk.gray(`  - No changes needed for ${file.path}`));
    }
});

console.log(chalk.bold.green(`\n✨ Version bump complete! Don't forget to commit and push.`));
