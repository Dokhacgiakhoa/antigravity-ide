const fs = require('fs');
const path = require('path');
const {
    AGENT_DIR, SKILL_DIR, WORKFLOW_DIR, RULE_DIR, SHARED_DIR, SCRIPT_DIR,
    parseFrontmatter, listMdFiles, listSubdirs
} = require('../helpers/frontmatter');

const MANIFEST = require('../../cli/manifest');

/**
 * Cross-Resource Linkage Tests
 * Kiểm tra: manifest→disk, agent→skill, manifest consistency.
 */

describe('Linkage: Manifest → Disk', () => {
    // --- ECO & PRO modes ---
    ['eco', 'pro'].forEach(mode => {
        describe(`Mode: ${mode}`, () => {
            // Agents
            const agents = MANIFEST[mode].agents;
            if (Array.isArray(agents)) {
                describe('Agents', () => {
                    agents.forEach(agentFile => {
                        it(`agent "${agentFile}" should exist`, () => {
                            expect(fs.existsSync(path.join(AGENT_DIR, agentFile))).toBe(true);
                        });
                    });
                });
            }

            // Skills
            const skills = MANIFEST[mode].skills;
            if (Array.isArray(skills)) {
                describe('Skills', () => {
                    skills.forEach(skillName => {
                        it(`skill "${skillName}" should have SKILL.md`, () => {
                            expect(fs.existsSync(path.join(SKILL_DIR, skillName, 'SKILL.md'))).toBe(true);
                        });
                    });
                });
            }

            // Workflows
            const workflows = MANIFEST[mode].workflows;
            if (Array.isArray(workflows)) {
                describe('Workflows', () => {
                    workflows.forEach(wfFile => {
                        it(`workflow "${wfFile}" should exist`, () => {
                            expect(fs.existsSync(path.join(WORKFLOW_DIR, wfFile))).toBe(true);
                        });
                    });
                });
            }

            // Rules
            const rules = MANIFEST[mode].rules;
            if (Array.isArray(rules)) {
                describe('Rules', () => {
                    rules.forEach(ruleFile => {
                        it(`rule "${ruleFile}" should exist`, () => {
                            expect(fs.existsSync(path.join(RULE_DIR, ruleFile))).toBe(true);
                        });
                    });
                });
            }

            // Shared
            const shared = MANIFEST[mode].shared;
            if (Array.isArray(shared)) {
                describe('Shared Modules', () => {
                    shared.forEach(modName => {
                        it(`shared "${modName}" should exist as folder`, () => {
                            expect(fs.existsSync(path.join(SHARED_DIR, modName))).toBe(true);
                        });
                    });
                });
            }

            // Scripts
            const scripts = MANIFEST[mode].scripts;
            if (Array.isArray(scripts)) {
                describe('Scripts', () => {
                    scripts.forEach(scriptFile => {
                        it(`script "${scriptFile}" should exist`, () => {
                            expect(fs.existsSync(path.join(SCRIPT_DIR, scriptFile))).toBe(true);
                        });
                    });
                });
            }
        });
    });
});

describe('Linkage: Agent → Skill', () => {
    const agentFiles = listMdFiles(AGENT_DIR);

    agentFiles.forEach(agentFile => {
        const fm = parseFrontmatter(path.join(AGENT_DIR, agentFile));
        if (fm.skills && fm.skills.length > 0) {
            fm.skills.forEach(skill => {
                it(`"${agentFile}" → skill "${skill}" should have SKILL.md`, () => {
                    const skillPath = path.join(SKILL_DIR, skill, 'SKILL.md');
                    expect(fs.existsSync(skillPath)).toBe(true);
                });
            });
        }
    });
});

describe('Linkage: Manifest Consistency', () => {
    // --- No duplicates within mode ---
    ['eco', 'pro'].forEach(mode => {
        ['agents', 'skills', 'workflows'].forEach(type => {
            const items = MANIFEST[mode][type];
            if (Array.isArray(items)) {
                it(`[${mode}] "${type}" should have no duplicates`, () => {
                    const unique = [...new Set(items)];
                    expect(items.length).toBe(unique.length);
                });
            }
        });
    });

    // --- eco phải là subset của pro ---
    it('eco agents should be subset of pro agents', () => {
        const ecoAgents = MANIFEST.eco.agents;
        const proAgents = MANIFEST.pro.agents;
        if (Array.isArray(ecoAgents) && Array.isArray(proAgents)) {
            ecoAgents.forEach(a => {
                expect(proAgents).toContain(a);
            });
        }
    });

    it('eco skills should be subset of pro skills', () => {
        const ecoSkills = MANIFEST.eco.skills;
        const proSkills = MANIFEST.pro.skills;
        if (Array.isArray(ecoSkills) && Array.isArray(proSkills)) {
            ecoSkills.forEach(s => {
                expect(proSkills).toContain(s);
            });
        }
    });

    it('eco workflows should be subset of pro workflows', () => {
        const ecoWf = MANIFEST.eco.workflows;
        const proWf = MANIFEST.pro.workflows;
        if (Array.isArray(ecoWf) && Array.isArray(proWf)) {
            ecoWf.forEach(w => {
                expect(proWf).toContain(w);
            });
        }
    });

    // --- Ultra mode phải là wildcard ---
    it('ultra mode should use wildcards (*)', () => {
        expect(MANIFEST.ultra.agents).toBe('*');
        expect(MANIFEST.ultra.skills).toBe('*');
        expect(MANIFEST.ultra.workflows).toBe('*');
        expect(MANIFEST.ultra.rules).toBe('*');
    });
});
