/**
 * @script audit-skills.js
 * @version 4.2.0
 * @layer verification
 * @protocol unified-protocol-v1
 * @description Quét và kiểm tra tính hợp lệ của metadata trong kho Skills (.agent/skills).
 */

const fs = require('fs');
const path = require('path');

const SKILLS_PATH = path.join(__dirname, '..', '..', 'skills');
const REQUIRED_FIELDS = ['name', 'description', 'category', 'version'];

function auditSkill(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);

  if (!frontmatterMatch) {
    console.error(`[FAIL] No metadata found in: ${filePath}`);
    return false;
  }

  const metadataStr = frontmatterMatch[1];
  const metadata = {};
  metadataStr.split('\n').forEach(line => {
    const [key, ...value] = line.split(':');
    if (key && value && value.length > 0) {
      metadata[key.trim()] = value.join(':').trim();
    }
  });

  const missing = REQUIRED_FIELDS.filter(f => !metadata[f]);
  if (missing.length > 0) {
    console.error(`[FAIL] Missing fields (${missing.join(', ')}) in: ${filePath}`);
    return false;
  }

  console.log(`[PASS] ${metadata.name} (v${metadata.version}) - Category: ${metadata.category}`);
  return true;
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) {
    console.error(`[ERROR] Directory not found: ${dir}`);
    return;
  }

  const items = fs.readdirSync(dir, { withFileTypes: true });
  items.forEach(item => {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      const skillMdPath = path.join(fullPath, 'SKILL.md');
      if (fs.existsSync(skillMdPath)) {
        auditSkill(skillMdPath);
      } else {
        // Recursively search if no SKILL.md found directly (for nested structures if any)
        walkDir(fullPath);
      }
    }
  });
}

console.log('--- Agent Skills Metadata Audit ---');
walkDir(SKILLS_PATH);
