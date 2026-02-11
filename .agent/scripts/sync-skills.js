const fs = require('fs');
const path = require('path');

// Configuration
const SOURCE_DIR = 'd:\\Github\\antigravity-awesome-skills\\skills';
const DEST_DIR = 'd:\\Github\\antigravity-ide\\.agent\\skills';
const CATALOG_FILE = 'd:\\Github\\antigravity-awesome-skills\\CATALOG.md';
const SKILLS_MD_FILE = 'd:\\Github\\antigravity-ide\\SKILLS.md';

// Stats
let stats = {
  new: 0,
  skipped: 0,
  updated: 0,
  errors: 0
};

function main() {
  console.log('🚀 Starting Massive Skill Sync...');

  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`❌ Source directory not found: ${SOURCE_DIR}`);
    return;
  }

  // 1. Get List of Skills
  const sourceSkills = fs.readdirSync(SOURCE_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  console.log(`📦 Found ${sourceSkills.length} skills in source.`);

  // 2. Sync Loop
  sourceSkills.forEach(skillName => {
    const srcPath = path.join(SOURCE_DIR, skillName);
    const destPath = path.join(DEST_DIR, skillName);

    if (fs.existsSync(destPath)) {
      // SKIP existing to protect customizations (Safety First)
      // console.log(`⏭️  Skipping existing: ${skillName}`);
      stats.skipped++;
    } else {
      try {
        // COPY New
        fs.cpSync(srcPath, destPath, { recursive: true });
        console.log(`✅ Imported: ${skillName}`);
        stats.new++;
      } catch (err) {
        console.error(`❌ Failed to copy ${skillName}:`, err.message);
        stats.errors++;
      }
    }
  });

  // 3. Generate Report
  console.log('\n--- SYNC REPORT ---');
  console.log(`🆕 New Skills: ${stats.new}`);
  console.log(`⏭️  Skipped: ${stats.skipped}`);
  console.log(`❌ Errors: ${stats.errors}`);

  // 4. Update SKILLS.md from CATALOG
  updateSkillsMd();
}

function updateSkillsMd() {
  console.log('\n📝 Updating SKILLS.md...');
  
  if (!fs.existsSync(CATALOG_FILE)) {
    console.warn('⚠️ Catalog file not found, skipping SKILLS.md update.');
    return;
  }

  try {
    const catalogContent = fs.readFileSync(CATALOG_FILE, 'utf-8');
    
    // Simple header replacement or append strategy?
    // Since the structure might be different, let's create a NEW section for "Community Skills"
    // OR replace the content if we are confident.
    
    // Current Strategy: Read all skills from CATALOG and format them into Antigravity MD format
    // But CATALOG format is: | Skill | Description | Tags | Triggers |
    // SKILLS.md format matches this table structure usually.
    
    // Let's backup old SKILLS.md
    fs.copyFileSync(SKILLS_MD_FILE, SKILLS_MD_FILE + '.bak');
    
    // Create new content
    const header = `# AntiGravity Master Skills
    
> **Total Skills**: ${stats.new + stats.skipped}
> **Generated**: ${new Date().toISOString()}

This is the complete list of available skills in the system.

`;
    
    // We can just append the CATALOG content essentially, maybe stripping some headers
    // The CATALOG.md from awesome-skills seems to be well formatted. 
    // Let's use it as the base but prefix with our header.
    
    // Let's just Read CATALOG and write to SKILLS.md (Overwriting old manual list)
    // This assumes CATALOG.md is better source of truth now.
    
    fs.writeFileSync(SKILLS_MD_FILE, header + catalogContent);
    console.log('✅ SKILLS.md updated using CATALOG.md source.');
    
  } catch (err) {
    console.error('❌ Failed to update SKILLS.md:', err.message);
  }
}

main();
