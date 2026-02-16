/**
 * @script audit-dna.js
 * @version 4.2.0
 * @layer verification
 * @protocol unified-protocol-v1
 * @description Quét và kiểm tra tính hợp lệ của metadata trong kho DNA (.shared).
 */

const fs = require('fs');
const path = require('path');

const DNA_PATH = path.join(__dirname, '..', '..', '.shared');
const REQUIRED_FIELDS = ['module', 'version', 'layer'];

function auditFile(filePath) {
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
    if (key && value) {
      metadata[key.trim()] = value.join(':').trim();
    }
  });

  const missing = REQUIRED_FIELDS.filter(f => !metadata[f]);
  if (missing.length > 0) {
    console.error(`[FAIL] Missing fields (${missing.join(', ')}) in: ${filePath}`);
    return false;
  }

  console.log(`[PASS] ${metadata.module} (v${metadata.version}) - ${metadata.layer}`);
  return true;
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (file === 'README.md') {
      auditFile(fullPath);
    }
  });
}

console.log('--- DNA Metadata Audit ---');
walkDir(DNA_PATH);
