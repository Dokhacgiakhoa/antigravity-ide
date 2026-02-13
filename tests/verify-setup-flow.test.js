
const prompts = require('prompts');
const { getProjectConfig } = require('../cli/prompts');
// const { getScaleConfig } = require('../cli/logic/scale-rules'); // Not directly exported from prompts, need to mock or inspect result

// Mock prompts
jest.mock('prompts');

const LANGUAGES = ['en', 'vi'];
const SCALES = ['instant', 'creative', 'sme'];
const PRODUCT_TYPES = ['user_app', 'dev_tool', 'ai_agent', 'digital_asset'];

// Expected baseline counts (approximate based on latest tuning)
const EXPECTATIONS = {
    instant: { minSkills: 3, workflows: 8 }, 
    sme: { minSkills: 5, workflows: 15 },     
    creative: { minSkills: 10, workflows: 30 } 
};

describe('Project Setup - 24 Comprehensive Cases', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const testCases = [];
    LANGUAGES.forEach(lang => {
        SCALES.forEach(scale => {
            PRODUCT_TYPES.forEach(prod => {
                testCases.push({ lang, scale, prod });
            });
        });
    });

    test.each(testCases)(
        'Case %#: [%s] %s / %s -> Valid Config & Ratios',
        async ({ lang, scale, prod }) => {
            const agentName = `Agent-${scale}-${prod}`;
            prompts.mockResolvedValueOnce({
                language: lang,
                projectName: `test-${lang}-${scale}-${prod}`,
                scale: scale,
                productType: prod,
                agentName: agentName
            });

            const config = await getProjectConfig();

            // 1. Verify Basic Config
            expect(config.language).toBe(lang);
            expect(config.rules).toBe(scale);
            expect(config.productType).toBe(prod);
            expect(config.agentName).toBe(agentName);

            // 2. Verify Scale Logic (Engine Mode)
            if (scale === 'instant') {
                expect(config.engineMode).toBe('standard');
            } else {
                expect(config.engineMode).toBe('advanced');
            }

            // 3. Verify Resource Counts (The "Percentage" Check)
            const categories = config.skillCategories;
            const expected = EXPECTATIONS[scale];
            
            // Should match or exceed base (Product adds more skills)
            expect(categories.length).toBeGreaterThanOrEqual(expected.minSkills);

            // 4. Verify Workflows
            const workflows = config.workflows;
            
            expect(workflows.length).toBeGreaterThanOrEqual(expected.workflows);
            
            // Specific Checks for Creative (Full)
            if (scale === 'creative') {
                expect(workflows).toContain('ui-ux-pro-max');
                expect(workflows).toContain('orchestrate');
                expect(workflows.length).toBeGreaterThanOrEqual(30);
            }
            // Specific Checks for SME (Ops)
            if (scale === 'sme') {
                expect(workflows).toContain('release-version');
                expect(workflows).toContain('log-error');
                expect(workflows).toContain('onboard');
            }
            // Specific Checks for Instant (Fast)
            if (scale === 'instant') {
                expect(workflows).toContain('preview');
                expect(workflows).toContain('visually');
            }
        }
    );
});
