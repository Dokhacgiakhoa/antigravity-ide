const MANIFEST = require('../../cli/manifest');

describe('CLI Manifest', () => {
    const MODES = ['eco', 'pro', 'ultra'];
    const REQUIRED_KEYS = ['rules', 'agents', 'workflows', 'skills', 'shared', 'core', 'scripts'];

    // --- Kiểm tra cấu trúc cơ bản của từng mode ---
    describe('Structure Validation', () => {
        MODES.forEach(mode => {
            it(`[${mode}] should have all required category keys`, () => {
                expect(MANIFEST[mode]).toBeDefined();
                REQUIRED_KEYS.forEach(key => {
                    expect(MANIFEST[mode]).toHaveProperty(key);
                });
            });
        });

        it('should only contain known modes', () => {
            const manifestModes = Object.keys(MANIFEST);
            manifestModes.forEach(mode => {
                expect(MODES).toContain(mode);
            });
        });
    });

    // --- Kiểm tra tính nhất quán của mode Ultra (phải dùng wildcard) ---
    describe('Ultra Mode Wildcards', () => {
        REQUIRED_KEYS.forEach(key => {
            it(`[ultra] "${key}" should use wildcard "*"`, () => {
                expect(MANIFEST.ultra[key]).toBe('*');
            });
        });
    });

    // --- Kiểm tra log-error.md có mặt ở tất cả modes ---
    describe('log-error Workflow Availability', () => {
        it('[eco] should include log-error.md in workflows', () => {
            expect(MANIFEST.eco.workflows).toContain('log-error.md');
        });

        it('[pro] should include log-error.md in workflows', () => {
            expect(MANIFEST.pro.workflows).toContain('log-error.md');
        });

        it('[ultra] should include log-error.md via wildcard', () => {
            // Ultra sử dụng '*' nên tự động bao gồm tất cả
            expect(MANIFEST.ultra.workflows).toBe('*');
        });
    });

    // --- Kiểm tra không có item trùng lặp trong mỗi array ---
    describe('No Duplicate Items', () => {
        ['eco', 'pro'].forEach(mode => {
            REQUIRED_KEYS.forEach(key => {
                const value = MANIFEST[mode][key];
                if (Array.isArray(value)) {
                    it(`[${mode}] "${key}" should have no duplicates`, () => {
                        const unique = [...new Set(value)];
                        expect(value.length).toBe(unique.length);
                    });
                }
            });
        });
    });

    // --- Kiểm tra eco là subset của pro ---
    describe('Mode Hierarchy (eco ⊂ pro)', () => {
        ['workflows', 'agents', 'skills'].forEach(key => {
            it(`eco "${key}" should be a subset of pro "${key}"`, () => {
                const ecoItems = MANIFEST.eco[key];
                const proItems = MANIFEST.pro[key];

                if (Array.isArray(ecoItems) && Array.isArray(proItems)) {
                    ecoItems.forEach(item => {
                        expect(proItems).toContain(item);
                    });
                }
            });
        });
    });

    // --- Kiểm tra các workflows/agents cốt lõi luôn có mặt ---
    describe('Core Items Present', () => {
        const CORE_WORKFLOWS = ['create.md', 'plan.md', 'debug.md', 'orchestrate.md', 'status.md'];
        const CORE_AGENTS = ['orchestrator.md', 'project-planner.md', 'debugger.md'];

        CORE_WORKFLOWS.forEach(wf => {
            it(`[eco] should include core workflow "${wf}"`, () => {
                expect(MANIFEST.eco.workflows).toContain(wf);
            });
        });

        CORE_AGENTS.forEach(agent => {
            it(`[eco] should include core agent "${agent}"`, () => {
                expect(MANIFEST.eco.agents).toContain(agent);
            });
        });
    });
});
