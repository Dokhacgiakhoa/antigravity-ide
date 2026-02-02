#!/usr/bin/env node

/**
 * AUTO-RELEASE ENGINE
 * Tự động cập nhật version và số liệu thống kê trên toàn bộ dự án.
 * Usage: node .agent/scripts/auto-release.js <new_version>
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Cấu hình các file cần cập nhật Version
const VERSION_FILES = [
    {
        path: 'package.json',
        regex: /"version": "\d+\.\d+\.\d+"/g,
        template: (ver) => `"version": "${ver}"`
    },
    {
        path: 'VERSION',
        regex: /\d+\.\d+\.\d+/g,
        template: (ver) => `${ver}`
    },
    {
        path: 'MASTER_GUIDE.md',
        regex: /\*\*Version\*\*: \d+\.\d+\.\d+/g,
        template: (ver) => `**Version**: ${ver}`
    },
    {
        path: 'README.md',
        regex: /antigravity-ide@\d+\.\d+\.\d+/g, // Update npx command example if generic
        template: (ver) => `antigravity-ide@${ver}`
    }
];

// 2. Cấu hình các file cần cập nhật Số liệu (Stats)
const STATS_FILES = [
    'README.md',
    'README.vi.md',
    'GEMINI_GUIDE.md',
    'SKILLS.md'
];

// Helper: Đếm số lượng trong thư mục
function countItems(dirPath, filterFn) {
    const fullPath = path.join(process.cwd(), '.agent', dirPath);
    if (!fs.existsSync(fullPath)) return 0;
    return fs.readdirSync(fullPath, { withFileTypes: true })
        .filter(filterFn).length;
}

// Logic chính
function main() {
    const newVersion = process.argv[2];
    
    if (!newVersion) {
        console.error("❌ Error: Vui lòng cung cấp version mới. Ví dụ: node .agent/scripts/auto-release.js 4.0.4");
        process.exit(1);
    }

    console.log(`🚀 Starting Release Process for v${newVersion}...\n`);

    // --- A. Cập nhật Version ---
    console.log("1️⃣  Updating Version Numbers...");
    let updatedFiles = 0;

    VERSION_FILES.forEach(config => {
        const filePath = path.join(process.cwd(), config.path);
        if (fs.existsSync(filePath)) {
            let content = fs.readFileSync(filePath, 'utf8');
            if (config.regex.test(content)) {
                const newContent = content.replace(config.regex, config.template(newVersion));
                fs.writeFileSync(filePath, newContent);
                console.log(`   ✅ Updated ${config.path}`);
                updatedFiles++;
            } else {
                console.log(`   ⚠️  Current version pattern not found in ${config.path} (Skipped)`);
            }
        }
    });

    // --- B. Cập nhật Thống kê Real-time ---
    console.log("\n2️⃣  Updating Live Statistics...");
    
    const stats = {
        skills: countItems('skills', item => item.isDirectory()), // Folder là skill
        workflows: countItems('workflows', item => item.isFile() && item.name.endsWith('.md')),
        rules: countItems('rules', item => item.isFile() && item.name.endsWith('.md')),
        agents: countItems('agents', item => item.isFile() && item.name.endsWith('.md'))
    };

    console.log(`   📊 Detected: ${stats.skills} Skills | ${stats.agents} Agents | ${stats.workflows} Workflows | ${stats.rules} Rules`);

    STATS_FILES.forEach(fileName => {
        const filePath = path.join(process.cwd(), fileName);
        if (fs.existsSync(filePath)) {
            let content = fs.readFileSync(filePath, 'utf8');
            
            // Regex thay thế số lượng (VD: **26** Skills -> **27** Skills)
            // Pattern: | **XX** [Text] |
            
            // Update Skills
            content = content.replace(/\|\s*\*\*\d+\*\*\s*(Master Skills|Bộ Kỹ năng|Skills)/g, 
                `| **${stats.skills}** $1`);
            
            // Update Workflows
            content = content.replace(/\|\s*\*\*\d+\*\*\s*(Workflows|Quy trình|Quy trình \(Workflows\))/g, 
                `| **${stats.workflows}** $1`);
            
            // Update Agents
            content = content.replace(/\|\s*\*\*\d+\*\*\s*(Specialist Agents|Agent Chuyên gia)/g, 
                `| **${stats.agents}** $1`);

            // Update GEMINI_GUIDE total skills text
            content = content.replace(/Total: \d+ Master Skills/g, `Total: ${stats.skills} Master Skills`);
            content = content.replace(/\*\*All \d+ Master Skills/g, `**All ${stats.skills} Master Skills`);

            fs.writeFileSync(filePath, content);
            console.log(`   ✅ Synced stats to ${fileName}`);
        }
    });

    // --- C. Rà soát tính năng mới (Gợi ý Changelog) ---
    console.log("\n3️⃣  Scanning for Recent Changes (Git)...");
    try {
        // Lấy danh sách file mới thêm trong 24h qua (hoặc chưa commit)
        const gitStatus = execSync('git status --short').toString();
        const newFiles = gitStatus.split('\n')
            .filter(line => line.startsWith('A') || line.startsWith('??'))
            .map(line => line.substring(3)); // Bỏ prefix trạng thái

        const newFeatures = newFiles.filter(f => f.includes('.agent/skills') || f.includes('.agent/workflows') || f.includes('.agent/rules'));

        if (newFeatures.length > 0) {
            console.log("   ✨ New features detected (Add these to CHANGELOG.md):");
            newFeatures.forEach(f => console.log(`      - ${f}`));
        } else {
            console.log("   ℹ️  No new feature files detected via Git status.");
        }
    } catch (e) {
        console.log("   ⚠️  Could not run git check (optional step).");
    }

    console.log("\n✅ Auto-Release Complete! Please verify changes and commit.");
}

main();
