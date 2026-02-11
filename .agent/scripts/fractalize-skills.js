const fs = require('fs');
const path = require('path');

const SKILLS_DIR = 'd:\\Github\\antigravity-ide\\.agent\\skills';

function fractalizeSkill(skillName) {
  const skillDir = path.join(SKILLS_DIR, skillName);
  const skillFile = path.join(skillDir, 'SKILL.md');
  
  if (!fs.existsSync(skillFile)) {
    console.warn(`⚠️ SKILL.md not found for ${skillName}, skipping.`);
    return;
  }

  const content = fs.readFileSync(skillFile, 'utf-8');

  // Regex to extract Sections that look like Sub-skills
  // This is heuristically complex. 
  // For now, simpler strategy: 
  // 1. Create `sub-skills` folder.
  // 2. Identify H3 headers (### Title) as potential sub-skills.
  // 3. Split content and create files.
  // 4. Rewrite SKILL.md to link to them.
  
  // BUT: Doing this blindly for 500 skills is DANGEROUS and LOW QUALITY.
  // Better Strategy for now (Safe Fractalization):
  // 1. Just create the `sub-skills` directory structure if missing.
  // 2. If `resources` folder exists and has .md files, MOVE them to `sub-skills`.
  // 3. Update SKILL.md frontmatter to include `version: x.x.x-fractal`.
  
  const subSkillsDir = path.join(skillDir, 'sub-skills');
  if (!fs.existsSync(subSkillsDir)) {
    fs.mkdirSync(subSkillsDir);
  }

  // Move Resources to Sub-skills
  const resourcesDir = path.join(skillDir, 'resources');
  if (fs.existsSync(resourcesDir)) {
     const files = fs.readdirSync(resourcesDir);
     files.forEach(file => {
       if (file.endsWith('.md')) {
         const src = path.join(resourcesDir, file);
         const dest = path.join(subSkillsDir, file);
         fs.renameSync(src, dest);
         console.log(`📦 Moved ${file} from resources to sub-skills for ${skillName}`);
       }
     });
     // Clean up if empty
     if (fs.readdirSync(resourcesDir).length === 0) {
       fs.rmdirSync(resourcesDir);
     }
  }

  // Update Frontmatter
  let newContent = content;
  if (!content.includes('version:')) {
    newContent = content.replace('---', `---\nversion: 4.1.0-fractal`);
  } else if (!content.includes('-fractal')) {
    newContent = content.replace(/version: (.*)/, `version: 4.1.0-fractal`);
  }

  if (fs.existsSync(subSkillsDir) && fs.readdirSync(subSkillsDir).length > 0) {
     // Append "Knowledge Modules" section if there are sub-skills and it's missing
     if (!newContent.includes('Knowledge Modules')) {
       newContent += '\n\n## 🧠 Knowledge Modules (Fractal Skills)\n\n';
       const subFiles = fs.readdirSync(subSkillsDir);
       subFiles.forEach((file, index) => {
         newContent += `### ${index + 1}. [${file.replace('.md', '')}](./sub-skills/${file})\n`;
       });
     }
  }

  fs.writeFileSync(skillFile, newContent);
  console.log(`✅ Fractalized: ${skillName}`);
}

function main() {
  const skills = fs.readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  skills.forEach(skill => {
    // Skip if already correct
    if (skill === 'security-auditor') return; 
    fractalizeSkill(skill);
  });
}

main();
