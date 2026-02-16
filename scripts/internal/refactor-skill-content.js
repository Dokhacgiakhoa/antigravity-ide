const fs = require('fs');
const path = require('path');

const SKILL_NAME = process.argv[2] || '3d-web-experience';
const SKILLS_DIR = 'd:\\Github\\antigravity-ide\\.agent\\skills';
const SKILL_DIR = path.join(SKILLS_DIR, SKILL_NAME);
const SKILL_FILE = path.join(SKILL_DIR, 'SKILL.md');
const SUB_SKILLS_DIR = path.join(SKILL_DIR, 'sub-skills');

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

// Main Execution for ALL skills
function main() {
  const allSkills = fs.readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  console.log(`🚀 Starting Batch Refactor for ${allSkills.length} skills...`);

  let count = 0;
  allSkills.forEach(skillName => {
    // PROTECTED SKILLS - DO NOT TOUCH
    if (skillName === 'security-auditor') return;
    
    // Check if already fractalized deeply? 
    // Heuristic: If SKILL.md is small (< 500 bytes) and sub-skills has many files, maybe skip?
    // But for now, let's force run to ensure safety. 
    // WAIT: If we run this twice on `3d-web-experience`, it might re-extract the links?
    // content.split(/^### /gm) -> The links are `### 1. [Title]...`
    // So it will extract the link line as a new file content!
    // BAD. We need to detect if it's already a link list.
    
    if (isAlreadyLinked(skillName)) {
      console.log(`⏩ Skipping ${skillName} (Already fractalized)`);
      return;
    }

    processSkill(skillName);
    count++;
  });

  console.log(`✅ Completed. Refactored ${count} skills.`);
}

function isAlreadyLinked(skillName) {
  const skillFile = path.join(SKILLS_DIR, skillName, 'SKILL.md');
  if (!fs.existsSync(skillFile)) return false;
  const content = fs.readFileSync(skillFile, 'utf-8');
  // If it has the Fractal header and mostly just links... 
  // Simple check: does it have "Knowledge Modules (Fractal Skills)"?
  return content.includes('Knowledge Modules (Fractal Skills)');
}

function processSkill(skillName) {
  const skillDir = path.join(SKILLS_DIR, skillName);
  const skillFile = path.join(skillDir, 'SKILL.md');
  const subSkillsDir = path.join(skillDir, 'sub-skills');

  if (!fs.existsSync(skillFile)) return;

  const content = fs.readFileSync(skillFile, 'utf-8');
  if (!content.includes('### ')) {
     // No headers to split
     return;
  }

  const sections = content.split(/^### /gm);
  if (sections.length < 2) return;

  if (!fs.existsSync(subSkillsDir)) {
    fs.mkdirSync(subSkillsDir, { recursive: true });
  }

  // 1. Master Content (Header)
  let masterContent = sections[0];
  let modulesList = [];

  // 2. Extract Sections
  for (let i = 1; i < sections.length; i++) {
    const rawSection = sections[i];
    const firstLineEnd = rawSection.indexOf('\n');
    let title = rawSection.substring(0, firstLineEnd).trim();
    let body = rawSection.substring(firstLineEnd).trim();
    
    // Clean Title (remote [links] etc)
    title = title.replace(/\[|\]/g, ''); 

    if (!title) continue;

    const fileName = slugify(title) + '.md';
    const filePath = path.join(subSkillsDir, fileName);

    // Only write if file doesn't exist (PREVENT OVERWRITE of moved resources)
    if (!fs.existsSync(filePath)) {
        const fileContent = `# ${title}\n\n${body}`;
        fs.writeFileSync(filePath, fileContent);
    }
    
    modulesList.push({ title, fileName });
  }

  // 3. Update SKILL.md
  // Header + Links
  let newMasterContent = masterContent.trim() + '\n\n';
  newMasterContent += '## 🧠 Knowledge Modules (Fractal Skills)\n\n';
  
  modulesList.forEach((mod, idx) => {
    newMasterContent += `### ${idx + 1}. [${mod.title}](./sub-skills/${mod.fileName})\n`;
  });
  
  // Add Version tag if missing
  if (!newMasterContent.includes('version:')) {
      newMasterContent = newMasterContent.replace('---', `---\nversion: 4.1.0-fractal`);
  }

  fs.writeFileSync(skillFile, newMasterContent);
  console.log(`fractalized: ${skillName}`);
}

main();
