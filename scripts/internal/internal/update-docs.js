/**
 * @script update-docs.js
 * @version 4.2.0
 * @layer internal
 * @protocol unified-protocol-v1
 * @description Tự động cập nhật số liệu thống kê trong các file tài liệu hướng dẫn.
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
    
    try {
        const items = fs.readdirSync(skillsDir, { withFileTypes: true });
        return items.filter(item => item.isDirectory()).length;
    } catch (err) {
        logError(err, "Failed to read skills directory");
        return 0;
    }
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

function logError(error, context) {
    const errorLogPath = path.join(process.cwd(), 'ERRORS.md');
    const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 16);
    const entry = `
## [${timestamp}] - Update-Docs Script Failure

- **Type**: Runtime
- **Severity**: Low
- **File**: \`.agent/scripts/internal/update-docs.js\`
- **Agent**: Senior Documentation Engine
- **Root Cause**: ${context}
- **Error Message**: 
  \`\`\`
  ${error.message || error}
  \`\`\`
- **Fix Applied**: N/A
- **Prevention**: Ensure file system permissions are correct
- **Status**: Investigating

---
`;
    fs.appendFileSync(errorLogPath, entry);
}

// Run if called directly
if (require.main === module) {
    try {
        main().catch(err => {
            logError(err, "Async main execution failed");
            console.error(err);
        });
    } catch (err) {
        logError(err, "Sync main execution failed");
        console.error(err);
    }
}

module.exports = { countSkills, countWorkflows, countRules, updateCounts };
