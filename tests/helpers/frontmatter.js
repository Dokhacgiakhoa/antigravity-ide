/**
 * Shared Frontmatter Parser
 * Dùng chung cho tất cả integrity tests — parse YAML frontmatter từ .md files.
 *
 * @module tests/helpers/frontmatter
 */

const fs = require('fs');
const path = require('path');

// --- Đường dẫn gốc ---
const ROOT_DIR = path.join(__dirname, '..', '..');
const AGENT_DIR = path.join(ROOT_DIR, '.agent', 'agents');
const SKILL_DIR = path.join(ROOT_DIR, '.agent', 'skills');
const RULE_DIR = path.join(ROOT_DIR, '.agent', 'rules');
const WORKFLOW_DIR = path.join(ROOT_DIR, '.agent', 'workflows');
const SHARED_DIR = path.join(ROOT_DIR, '.agent', '.shared');
const CORE_DIR = path.join(ROOT_DIR, '.agent', 'core');
const SCRIPT_DIR = path.join(ROOT_DIR, '.agent', 'scripts');

/**
 * Parse frontmatter từ Markdown file
 * @param {string} filePath - Đường dẫn file .md
 * @returns {{ name?: string, description?: string, skills?: string[], trigger?: string, raw: string }}
 */
function parseFrontmatter(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf-8');
        // Remove BOM if present and trim leading whitespace
        content = content.replace(/^\uFEFF/, '').trimStart();
        
        const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
        if (!fmMatch) return { raw: content, _hasFrontmatter: false };

        const fmBlock = fmMatch[1];
        const result = { raw: content, _hasFrontmatter: true };

        // Parse name
        const nameMatch = fmBlock.match(/^name:\s*(.+)$/m);
        if (nameMatch) result.name = nameMatch[1].trim();

        // Parse description (có thể multi-line với >)
        const descMatch = fmBlock.match(/^description:\s*[>|]?\s*(.+)$/m);
        if (descMatch) result.description = descMatch[1].trim();

        // Parse trigger
        const triggerMatch = fmBlock.match(/^trigger:\s*(.+)$/m);
        if (triggerMatch) result.trigger = triggerMatch[1].trim();

        // Parse skills (comma-separated)
        const skillMatch = fmBlock.match(/^skills:\s*(.+)$/m);
        if (skillMatch) {
            result.skills = skillMatch[1].split(',').map(s => s.trim()).filter(Boolean);
        }

        return result;
    } catch (e) {
        return { raw: '', _hasFrontmatter: false, _error: e.message };
    }
}

/**
 * Liệt kê tất cả .md files trong 1 thư mục
 * @param {string} dirPath
 * @returns {string[]} Tên file
 */
function listMdFiles(dirPath) {
    if (!fs.existsSync(dirPath)) return [];
    return fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
}

/**
 * Liệt kê tất cả subdirectories trong 1 thư mục
 * @param {string} dirPath
 * @returns {string[]} Tên folder
 */
function listSubdirs(dirPath) {
    if (!fs.existsSync(dirPath)) return [];
    return fs.readdirSync(dirPath).filter(f => {
        try {
            return fs.statSync(path.join(dirPath, f)).isDirectory();
        } catch { return false; }
    });
}

module.exports = {
    ROOT_DIR,
    AGENT_DIR,
    SKILL_DIR,
    RULE_DIR,
    WORKFLOW_DIR,
    SHARED_DIR,
    CORE_DIR,
    SCRIPT_DIR,
    parseFrontmatter,
    listMdFiles,
    listSubdirs
};
