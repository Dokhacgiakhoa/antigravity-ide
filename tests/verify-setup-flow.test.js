
const prompts = require('prompts');
const { getProjectConfig } = require('../cli/prompts');

// Mock prompts
jest.mock('prompts');

/**
 * Verify Setup Flow - Test getProjectConfig() với mock prompts
 * Đảm bảo config trả về đúng format cho từng tình huống.
 *
 * API hiện tại trả về: { projectName, language, operationMode, engineMode, agentName, projectScale, skillCategories }
 */

describe('Project Setup Flow Verification', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    // Case 1: Vietnamese, eco mode
    test('Case 1: VI / eco mode -> Returns correct config shape', async () => {
        prompts.mockResolvedValueOnce({
            language: 'vi',
            projectName: 'fin-bot',
            operationMode: 'eco'
        });

        const config = await getProjectConfig();
        
        expect(config.language).toBe('vi');
        expect(config.projectName).toBe('fin-bot');
        expect(config.operationMode).toBe('eco');
        expect(config.engineMode).toBeDefined();
    });

    // Case 2: English, pro mode
    test('Case 2: EN / pro mode -> Returns correct config', async () => {
        prompts.mockResolvedValueOnce({
            language: 'en',
            projectName: 'edu-master',
            operationMode: 'pro'
        });

        const config = await getProjectConfig();

        expect(config.language).toBe('en');
        expect(config.operationMode).toBe('pro');
    });

    // Case 3: Ultra mode
    test('Case 3: VI / ultra mode -> engineMode is advanced', async () => {
        prompts.mockResolvedValueOnce({
            language: 'vi',
            projectName: 'ultra-app',
            operationMode: 'creative'
        });

        const config = await getProjectConfig();

        expect(config.engineMode).toBe('advanced');
        expect(config.projectScale).toBe('creative');
    });

    // Case 4: Skip Prompts (Non-interactive mode)
    test('Case 4: Skip Prompts -> Defaults applied', async () => {
        const config = await getProjectConfig(true); // skipPrompts = true

        expect(config.projectName).toBe('my-agent-project');
        expect(config.language).toBe('en');
        expect(config.operationMode).toBe('standard');
        expect(config.engineMode).toBe('standard');
    });

    // Case 5: Predefined Project Name
    test('Case 5: Predefined Name -> Name injected correctly', async () => {
        prompts.mockResolvedValueOnce({
            language: 'en',
            operationMode: 'pro'
        });

        const config = await getProjectConfig(false, 'cli-provided-name');

        expect(config.projectName).toBe('cli-provided-name');
    });

    // Case 6: Skip prompts with predefined name
    test('Case 6: Skip Prompts + Predefined Name -> Both applied', async () => {
        const config = await getProjectConfig(true, 'my-awesome-project');

        expect(config.projectName).toBe('my-awesome-project');
        expect(config.operationMode).toBe('standard');
    });

    // Case 7: Skip prompts returns minimal config (no skillCategories)
    test('Case 7: Skip prompts -> minimal config shape', async () => {
        const config = await getProjectConfig(true);

        expect(config.projectName).toBeDefined();
        expect(config.language).toBeDefined();
        expect(config.operationMode).toBeDefined();
        expect(config.engineMode).toBeDefined();
    });

    // Case 8: Standard mode -> standard engine
    test('Case 8: Standard/Pro mode -> standard engine', async () => {
        prompts.mockResolvedValueOnce({
            language: 'en',
            projectName: 'test-app',
            operationMode: 'pro'
        });

        const config = await getProjectConfig();

        expect(config.engineMode).toBe('standard');
    });

    // Case 9: Non-skip config includes agentName
    test('Case 9: Non-skip mode includes agentName', async () => {
        prompts.mockResolvedValueOnce({
            language: 'en',
            projectName: 'test-app',
            operationMode: 'pro'
        });

        const config = await getProjectConfig();
        expect(config.agentName).toBe('Antigravity');
    });

    // Case 10: Eco mode -> standard engine  
    test('Case 10: Eco mode -> standard engine', async () => {
        prompts.mockResolvedValueOnce({
            language: 'vi',
            projectName: 'eco-app',
            operationMode: 'eco'
        });

        const config = await getProjectConfig();

        expect(config.engineMode).toBe('standard');
        expect(config.projectScale).toBe('eco');
    });
});
