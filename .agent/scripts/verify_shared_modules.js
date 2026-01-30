const fs = require('fs');
const path = require('path');
const chalk = require('chalk'); // Assuming chalk is available based on previous context, or use simple logging

const SHARED_DIR = path.join(__dirname, '../.shared');

// Simple logger fallback if chalk is not installed
const log = {
  info: (msg) => console.log(msg),
  success: (msg) => console.log('\x1b[32m%s\x1b[0m', '✅ ' + msg),
  error: (msg) => console.log('\x1b[31m%s\x1b[0m', '❌ ' + msg),
  warn: (msg) => console.log('\x1b[33m%s\x1b[0m', '⚠️ ' + msg),
  header: (msg) => console.log('\n\x1b[1m\x1b[36m%s\x1b[0m', '=== ' + msg + ' ===\n'),
};

function verifyJson(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    JSON.parse(content);
    return true;
  } catch (e) {
    return false;
  }
}

function verifyMarkdown(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return content.trim().length > 10; // Must have some content
  } catch (e) {
    return false;
  }
}

function auditModule(moduleName) {
  const modulePath = path.join(SHARED_DIR, moduleName);
  const stats = fs.statSync(modulePath);
  
  if (!stats.isDirectory()) return null;

  log.header(`Auditing: ${moduleName}`);
  let errors = 0;

  // 1. Check README
  const readmePath = path.join(modulePath, 'README.md');
  if (fs.existsSync(readmePath)) {
    if (verifyMarkdown(readmePath)) {
      log.success('README.md exists and is valid');
    } else {
      log.error('README.md is empty');
      errors++;
    }
  } else {
    log.error('Missing README.md');
    errors++;
  }

  // 2. Check Checklists (if dir exists)
  const checklistDir = path.join(modulePath, 'checklists');
  if (fs.existsSync(checklistDir)) {
    const files = fs.readdirSync(checklistDir).filter(f => f.endsWith('.md'));
    if (files.length > 0) {
      files.forEach(f => {
        if (verifyMarkdown(path.join(checklistDir, f))) {
          log.success(`Checklist: ${f} valid`);
        } else {
          log.error(`Checklist: ${f} empty`);
          errors++;
        }
      });
    } else {
      log.warn('checklists/ directory empty');
    }
  }

  // 3. Check Presets/Data (JSON validation)
  ['presets', 'data'].forEach(subDir => {
    const dirPath = path.join(modulePath, subDir);
    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.json'));
      files.forEach(f => {
        if (verifyJson(path.join(dirPath, f))) {
          log.success(`${subDir}/${f} valid JSON`);
        } else {
          log.error(`${subDir}/${f} INVALID JSON`);
          errors++;
        }
      });
    }
  });

  return errors;
}

function main() {
  if (!fs.existsSync(SHARED_DIR)) {
    log.error('.shared directory not found!');
    process.exit(1);
  }

  const modules = fs.readdirSync(SHARED_DIR);
  let totalErrors = 0;

  modules.forEach(mod => {
    // Skip specific non-module files if any
    if (mod.startsWith('.')) return;
    
    // Only verify directories
    try {
        const errs = auditModule(mod);
        if (errs !== null) totalErrors += errs;
    } catch (e) {
        // Not a directory or permission error
    }
  });

  console.log('\n----------------------------------------');
  if (totalErrors === 0) {
    log.success('ALL MODULES PASSED VERIFICATION');
  } else {
    log.error(`FOUND ${totalErrors} ISSUES`);
    process.exit(1);
  }
}

main();
