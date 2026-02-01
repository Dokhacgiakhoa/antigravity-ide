
const prompts = require('prompts');
const { getProjectConfig } = require('../cli/prompts');

// Mock prompts
jest.mock('prompts');

describe('Project Setup Flow Verification', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should ask questions in the correct order: Language -> Name -> Scale -> Industry -> Agent', async () => {
        // Setup mock response
        prompts.mockResolvedValueOnce({
            language: 'vi',
            projectName: 'test-project',
            scale: 'balanced', // Balanced -> rules: balanced
            industryDomain: 'finance',
            agentName: 'Jarvis'
        });

        await getProjectConfig();

        // Check the first call to prompts
        const calls = prompts.mock.calls;
        expect(calls.length).toBeGreaterThan(0);
        
        const questions = calls[0][0]; // The array of questions
        
        // Verify Order
        expect(questions[0].name).toBe('language');
        expect(questions[1].name).toBe('projectName');
        expect(questions[2].name).toBe('scale');
        expect(questions[3].name).toBe('industryDomain');
        expect(questions[4].name).toBe('agentName');
    });

    test('should map Scale correctly to Rules', async () => {
        prompts.mockResolvedValueOnce({
            language: 'en',
            projectName: 'p1',
            scale: 'strict', // Strict -> rules: strict
            industryDomain: 'other',
            agentName: 'A1'
        });

        const config = await getProjectConfig();
        expect(config.rules).toBe('strict');
    });

    test('should map "scale" flexible to "rules" flexible', async () => {
         prompts.mockResolvedValueOnce({
            language: 'en',
            projectName: 'p1',
            scale: 'flexible', 
            industryDomain: 'other',
            agentName: 'A1'
        });

        const config = await getProjectConfig();
        expect(config.rules).toBe('flexible');
    });
});
