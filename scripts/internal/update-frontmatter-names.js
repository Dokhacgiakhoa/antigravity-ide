const fs = require('fs');
const path = require('path');

const SKILLS_DIR = 'd:\\Github\\antigravity-ide\\.agent\\skills';
const SKILLS_CATALOG = 'd:\\Github\\antigravity-ide\\SKILLS.md';

function main() {
  const skills = fs.readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  console.log(`🚀 Auditing ${skills.length} skills for consistency...`);

  let fixes = 0;

  // 1. Fix Frontmatter Name vs Folder Name
  skills.forEach(skillName => {
    const skillFile = path.join(SKILLS_DIR, skillName, 'SKILL.md');
    if (!fs.existsSync(skillFile)) return;

    let content = fs.readFileSync(skillFile, 'utf-8');
    
    // Regex to find "name: old-name"
    const nameMatch = content.match(/^name:\s+(.*)$/m);
    if (nameMatch) {
      const currentName = nameMatch[1].trim();
      if (currentName !== skillName && skillName.startsWith('agent-')) {
         // Mismatch found in a renamed skill
         console.log(`🔧 Fixing mismatch: ${currentName} -> ${skillName}`);
         content = content.replace(/^name:\s+.*$/m, `name: ${skillName}`);
         
         // Also update H1 title if it matches old name
         content = content.replace(new RegExp(`# ${currentName}`, 'g'), `# ${skillName}`);
         
         fs.writeFileSync(skillFile, content);
         fixes++;
      }
    }
  });

  console.log(`✅ Fixed ${fixes} frontmatter mismatches.`);

  // 2. Fix Links in SKILLS.md
  console.log('\n📝 Rebuilding SKILLS.md Index...');
  updateSkillsCatalog(skills);
}

function updateSkillsCatalog(skillsList) {
    if (!fs.existsSync(SKILLS_CATALOG)) {
        console.warn('⚠️ SKILLS.md not found.');
        return;
    }

    let catalog = fs.readFileSync(SKILLS_CATALOG, 'utf-8');
    
    // We need to replace links like `[cc-skill-xxx]` with `[agent-xxx]`
    // Ideally, we should regenerate the table, but that removes descriptions.
    // Better: smart replace based on the actual renames we did.
    // Or simpler: Iterate all current skills, and if they are missing from catalog but their "old versions" are there, update them.
    
    let catalogUpdates = 0;
    
    // Heuristic: Identify broken links or outdated names
    // For every `agent-x`, look if `cc-skill-x` or `claude-x` exists in catalog
    skillsList.forEach(newSkill => {
        if (!newSkill.startsWith('agent-')) return;
        
        let oldNamePattern = '';
        if (newSkill.includes('code-guide')) oldNamePattern = 'claude-code-guide';
        else if (newSkill.includes('d3js')) oldNamePattern = 'claude-d3js-skill';
        else oldNamePattern = newSkill.replace('agent-', 'cc-skill-'); // Try cc-skill- first
        
        if (catalog.includes(oldNamePattern)) {
            // Replace all occurrences of oldName with newSkill
            const regex = new RegExp(oldNamePattern, 'g');
            catalog = catalog.replace(regex, newSkill);
            console.log(`   🔗 Updated catalog link: ${oldNamePattern} -> ${newSkill}`);
            catalogUpdates++;
        } else {
             // Try just 'cc-'
             const oldNamePattern2 = newSkill.replace('agent-', 'cc-');
             if (catalog.includes(oldNamePattern2)) {
                const regex = new RegExp(oldNamePattern2, 'g');
                catalog = catalog.replace(regex, newSkill);
                console.log(`   🔗 Updated catalog link: ${oldNamePattern2} -> ${newSkill}`);
                catalogUpdates++;
             }
        }
    });

    if (catalogUpdates > 0) {
        fs.writeFileSync(SKILLS_CATALOG, catalog);
        console.log(`✅ Updated ${catalogUpdates} links in SKILLS.md`);
    } else {
        console.log('✨ SKILLS.md is up to date.');
    }
}

main();
