const fs = require('fs');
const path = require('path');

const SKILLS_DIR = 'd:\\Github\\antigravity-ide\\.agent\\skills';

function main() {
  const allSkills = fs.readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  console.log(`🚀 Starting Rename Process...`);

  allSkills.forEach(oldName => {
    let newName = oldName;
    
    // Rename Logic
    if (oldName.startsWith('cc-skill-')) {
      newName = oldName.replace('cc-skill-', 'agent-');
    } else if (oldName.startsWith('cc-')) {
      newName = oldName.replace('cc-', 'agent-');
    } else if (oldName.includes('claude')) {
      newName = oldName.replace('claude', 'agent');
    }

    if (newName !== oldName) {
      const oldPath = path.join(SKILLS_DIR, oldName);
      const newPath = path.join(SKILLS_DIR, newName);

      // 1. Rename Directory
      try {
        if (fs.existsSync(newPath)) {
            console.warn(`⚠️ Target ${newName} already exists. Skipping rename of ${oldName}`);
        } else {
            fs.renameSync(oldPath, newPath);
            console.log(`RENAME: ${oldName} -> ${newName}`);
            
            // 2. Update Content (SKILL.md and sub-skills)
            updateContent(newPath);
        }
      } catch (e) {
        console.error(`❌ Error renaming ${oldName}:`, e.message);
      }
    }
  });
  
  console.log('✅ Done.');
}

function updateContent(skillDir) {
    const files = getAllFiles(skillDir);
    
    files.forEach(file => {
        if (!file.endsWith('.md')) return;
        
        let content = fs.readFileSync(file, 'utf-8');
        let updated = false;
        
        // Replace "Claude" with "Agent" (Case insensitive mostly, but let's be careful)
        // We want to avoid changing URLs if possible, but simple string replacement is safer for branding.
        
        if (content.includes('Claude')) {
            content = content.replace(/Claude/g, 'Agent');
            updated = true;
        }
        if (content.includes('claude')) {
            content = content.replace(/claude/g, 'agent');
            updated = true;
        }
        // Also update the 'name:' field in frontmatter if strictly necessary to match folder?
        // Yes, usually SKILL.md has `name: xxx`
        // We generally shouldn't parse frontmatter with regex purely but a simple replace is okay here.
        
        if (updated) {
            fs.writeFileSync(file, content);
            console.log(`   📝 Updated content in ${path.basename(file)}`);
        }
    });
}

function getAllFiles(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

main();
