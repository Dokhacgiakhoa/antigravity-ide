#!/usr/bin/env node

/**
 * FastCode Native (Node.js)
 * 
 * A lightweight, dependency-free codebase search engine for AI Agents.
 * - Indexes symbols (functions, classes, variables)
 * - Performs fuzzy search on file paths and symbols
 * - Outputs JSON for Agent consumption
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const stat = promisify(fs.stat);
const writeFile = promisify(fs.writeFile);

// Configuration
const IGNORE_DIRS = ['.git', 'node_modules', 'dist', 'build', '.next', 'coverage'];
const IGNORE_FILES = ['package-lock.json', 'yarn.lock', '.DS_Store'];
const INDEX_FILE = path.join(process.cwd(), '.agent', 'fastcode_index.json');

// Symbol Regex Patterns (Simple but effective)
const PATTERNS = {
  // Frontend (React/JS)
  function: /function\s+([a-zA-Z0-9_$]+)/g,
  class: /class\s+([a-zA-Z0-9_$]+)/g,
  const: /(?:const|let|var)\s+([a-zA-Z0-9_$]+)\s*=/g,
  destruct_array: /(?:const|let|var)\s+\[([^\]]+)\]\s*=/g,
  destruct_obj: /(?:const|let|var)\s+\{([^\}]+)\}\s*=/g,
  
  // Backend (Python/Node)
  python_def: /def\s+([a-zA-Z0-9_]+)/g,
  python_class: /class\s+([a-zA-Z0-9_]+)/g,
  python_route: /@(?:app|router)\.(?:get|post|put|delete|patch)\s*\(\s*['"]([^'"]+)['"]\)/g, // Flask/FastAPI routes
  node_route: /(?:app|router)\.(?:get|post|put|delete|patch)\s*\(\s*['"]([^'"]+)['"]/g,      // Express routes

  // Database (SQL/Prisma)
  prisma_model: /model\s+([a-zA-Z0-9_]+)\s+\{/g,
  sql_create: /CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?([a-zA-Z0-9_]+)/gi,
};

async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = path.resolve(dir, subdir);
    const relative = path.relative(process.cwd(), res);

    if (IGNORE_FILES.includes(subdir)) return [];
    
    // Explicitly ignore strictly forbidden dirs
    if (IGNORE_DIRS.includes(subdir)) return [];

    // Special handling for .agent: Only allow 'skills'
    if (relative.startsWith('.agent')) {
      if (relative === '.agent') {
         // Continue recursion into .agent
      } else if (relative.startsWith(path.join('.agent', 'skills'))) {
         // Allow skills folder
      } else if (subdir === 'fastcode_index.json') {
          return res; // Allow the index file itself (optional)
      } else {
         return []; // Ignore other .agent folders (brain, logs, tools)
      }
    }

    return (await stat(res)).isDirectory() ? getFiles(res) : res;
  }));
  return files.reduce((a, f) => a.concat(f), []);
}

async function extractSymbols(content, filePath) {
  const symbols = [];
  const ext = path.extname(filePath);

  if (['.js', '.ts', '.jsx', '.tsx'].includes(ext)) {
    let match;
    while ((match = PATTERNS.function.exec(content)) !== null) symbols.push({ type: 'function', name: match[1] });
    while ((match = PATTERNS.class.exec(content)) !== null) symbols.push({ type: 'class', name: match[1] });
    while ((match = PATTERNS.const.exec(content)) !== null) symbols.push({ type: 'variable', name: match[1] });
    
    // Handle destructuring
    while ((match = PATTERNS.destruct_array.exec(content)) !== null) {
      match[1].split(',').map(s => s.trim()).filter(s => s).forEach(s => symbols.push({ type: 'variable', name: s }));
    }
    while ((match = PATTERNS.destruct_obj.exec(content)) !== null) {
      match[1].split(',').map(s => s.trim().split(':')[0].trim()).filter(s => s).forEach(s => symbols.push({ type: 'variable', name: s }));
    }
    // Node Routes
    while ((match = PATTERNS.node_route.exec(content)) !== null) symbols.push({ type: 'route', name: match[1] });

  } else if (['.py'].includes(ext)) {
    let match;
    while ((match = PATTERNS.python_def.exec(content)) !== null) symbols.push({ type: 'function', name: match[1] });
    while ((match = PATTERNS.python_class.exec(content)) !== null) symbols.push({ type: 'class', name: match[1] });
    // Python Routes
    while ((match = PATTERNS.python_route.exec(content)) !== null) symbols.push({ type: 'route', name: match[1] });

  } else if (['.prisma'].includes(ext)) {
    let match;
    while ((match = PATTERNS.prisma_model.exec(content)) !== null) symbols.push({ type: 'model', name: match[1] });

  } else if (['.sql'].includes(ext)) {
    let match;
    while ((match = PATTERNS.sql_create.exec(content)) !== null) symbols.push({ type: 'table', name: match[1] });
  }
  return symbols;
}

async function index() {
  console.log('Orchestrating FastCode Indexing...');
  const files = await getFiles(process.cwd());
  const indexData = [];

  for (const file of files) {
    try {
      const content = await readFile(file, 'utf8');
      const relativePath = path.relative(process.cwd(), file);
      const symbols = await extractSymbols(content, file);
      
      if (symbols.length > 0 || content.length < 50000) { // Limit huge files
        indexData.push({
          path: relativePath,
          symbols: symbols.map(s => s.name),
        });
      }
    } catch (e) {
      // Ignore binary or unreadable files
    }
  }

  await writeFile(INDEX_FILE, JSON.stringify(indexData, null, 2));
  console.log(`Indexed ${indexData.length} files. Index saved to ${INDEX_FILE}`);
}

async function search(query) {
  if (!fs.existsSync(INDEX_FILE)) {
    console.error('Index not found. Run "index" first.');
    return;
  }

  const indexData = require(INDEX_FILE);
  const results = indexData.filter(item => {
    // 1. Path match
    if (item.path.toLowerCase().includes(query.toLowerCase())) return true;
    // 2. Symbol match
    if (item.symbols.some(s => s.toLowerCase().includes(query.toLowerCase()))) return true;
    return false;
  });

  // Rank results: Path match > Symbol match
  results.sort((a, b) => {
    const aPathMatch = a.path.toLowerCase().includes(query.toLowerCase());
    const bPathMatch = b.path.toLowerCase().includes(query.toLowerCase());
    if (aPathMatch && !bPathMatch) return -1;
    if (!aPathMatch && bPathMatch) return 1;
    return 0;
  });

  console.log(JSON.stringify(results.slice(0, 10), null, 2)); // Return top 10
}

// CLI
const args = process.argv.slice(2);
const command = args[0];
const query = args[1];

if (command === 'index') {
  index();
} else if (command === 'search') {
  if (!query) {
    console.error('Usage: search <query>');
    process.exit(1);
  }
  search(query);
} else {
  console.log('Usage: node fastcode.js [index|search <query>]');
}
