#!/usr/bin/env node

/**
 * Auto-Update Documentation System
 * Tự động cập nhật các file docs khi có Skills/Workflows/Rules mới
 */

const fs = require('fs');
const path = require('path');

// Đường dẫn các file cần cập nhật
const DOCS_FILES = {
    README_VI: 'README.vi.md',
    README_EN: 'README.md',
    SKILLS_GUIDE: 'docs/SKILLS_GUIDE.vi.md',
    RULES_GUIDE: 'docs/RULES_GUIDE.vi.md',
    WORKFLOW_GUIDE: 'docs/WORKFLOW_GUIDE.vi.md'
};

// Đếm số lượng Skills
function countSkills() {
    const skillsDir = path.join(process.cwd(), '.agent', 'skills');
    if (!fs.existsSync(skillsDir)) return 0;
    
    const items = fs.readdirSync(skillsDir, { withFileTypes: true });
    return items.filter(item => item.isDirectory()).length;
}

// Đếm số lượng Workflows
function countWorkflows() {
    const workflowsDir = path.join(process.cwd(), '.agent', 'workflows');
    if (!fs.existsSync(workflowsDir)) return 0;
    
    const items = fs.readdirSync(workflowsDir);
    return items.filter(item => item.endsWith('.md')).length;
}

// Đếm số lượng Rules
function countRules() {
    const rulesDir = path.join(process.cwd(), '.agent', 'rules');
    if (!fs.existsSync(rulesDir)) return 0;
    
    const items = fs.readdirSync(rulesDir);
    return items.filter(item => item.endsWith('.md')).length;
}

// Cập nhật số liệu trong README
function updateCounts() {
    const skills = countSkills();
    const workflows = countWorkflows();
    const rules = countRules();
    
    console.log('📊 Current Statistics:');
    console.log(`   Skills: ${skills}`);
    console.log(`   Workflows: ${workflows}`);
    console.log(`   Rules: ${rules}`);
    
    return { skills, workflows, rules };
}

// Main function
async function main() {
    console.log('🚀 Auto-Update Documentation System\n');
    
    const stats = updateCounts();
    
    console.log('\n✅ Statistics collected successfully!');
    console.log('💡 Tip: Use this data to update README.md and other docs manually for now.');
    console.log('   Future versions will support automatic text replacement.');
}

// Run if called directly
if (require.main === module) {
    main().catch(console.error);
}

module.exports = { countSkills, countWorkflows, countRules, updateCounts };
