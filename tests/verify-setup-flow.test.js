
const prompts = require('prompts');
const { getProjectConfig } = require('../cli/prompts');

// Mock prompts
jest.mock('prompts');

describe('Project Setup 10 Scenarios Verification', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    // Case 1: VI language, Personal scale, Finance industry
    test('Case 1: VI / Personal / Finance -> Flexible rules, Finance workflows', async () => {
        prompts.mockResolvedValueOnce({
            language: 'vi',
            projectName: 'fin-bot',
            scale: 'flexible',
            industryDomain: 'finance',
            agentName: 'MoneyJarvis'
        });

        const config = await getProjectConfig();
        
        expect(config.language).toBe('vi');
        expect(config.rules).toBe('flexible'); // Personal -> flexible
        expect(config.workflows).toContain('security'); // Finance workflow
        expect(config.workflows).toContain('orchestrate'); // Finance implicit
        expect(config.agentName).toBe('MoneyJarvis');
    });

    // Case 2: EN language, Enterprise scale, Education industry
    test('Case 2: EN / Enterprise / Education -> Strict rules, Education workflows', async () => {
        prompts.mockResolvedValueOnce({
            language: 'en',
            projectName: 'edu-master',
            scale: 'strict',
            industryDomain: 'education',
            agentName: 'TeacherAI'
        });

        const config = await getProjectConfig();

        expect(config.language).toBe('en');
        expect(config.rules).toBe('strict'); // Enterprise -> strict
        expect(config.workflows).toContain('explain'); // Education workflow
        expect(config.workflows).toContain('visually');
    });

    // Case 3: VI language, Team scale, F&B industry
    test('Case 3: VI / Team / F&B -> Balanced rules, F&B workflows + UI/UX', async () => {
        prompts.mockResolvedValueOnce({
            language: 'vi',
            projectName: 'burger-king-ai',
            scale: 'balanced',
            industryDomain: 'fnb',
            agentName: 'ChefBot'
        });

        const config = await getProjectConfig();

        expect(config.rules).toBe('balanced');
        expect(config.workflows).toContain('mobile'); // F&B
        expect(config.workflows).toContain('ui-ux-pro-max'); // F&B implicit
    });

    // Case 4: EN language, Personal scale, Healthcare industry
    test('Case 4: EN / Personal / Healthcare -> Flexible rules, Compliance + Orchestrate', async () => {
        prompts.mockResolvedValueOnce({
            language: 'en',
            projectName: 'health-care-app',
            scale: 'flexible',
            industryDomain: 'healthcare',
            agentName: 'DrStrange'
        });

        const config = await getProjectConfig();

        expect(config.workflows).toContain('compliance'); // Healthcare
        expect(config.workflows).toContain('orchestrate'); // Healthcare implicit
    });

    // Case 5: VI language, Enterprise scale, Logistics industry
    test('Case 5: VI / Enterprise / Logistics -> Strict rules, API + Create', async () => {
        prompts.mockResolvedValueOnce({
            language: 'vi',
            projectName: 'ship-fast',
            scale: 'strict',
            industryDomain: 'logistics',
            agentName: 'LogiBot'
        });

        const config = await getProjectConfig();

        expect(config.workflows).toContain('api'); // Logistics
        expect(config.workflows).toContain('create'); // Logistics implicit
    });

    // Case 6: EN language, Team scale, Other (General)
    test('Case 6: EN / Team / Other -> Balanced rules, Basic workflows', async () => {
        prompts.mockResolvedValueOnce({
            language: 'en',
            projectName: 'random-app',
            scale: 'balanced',
            industryDomain: 'other',
            agentName: 'Helper'
        });

        const config = await getProjectConfig();

        expect(config.workflows).toContain('debug');
        expect(config.workflows).toContain('enhance');
        expect(config.workflows).not.toContain('orchestrate'); // Shouldn't have heavy workflows
    });

    // Case 7: Skip Prompts (Non-interactive mode)
    test('Case 7: Skip Prompts -> Defaults applied', async () => {
        const config = await getProjectConfig(true); // skipPrompts = true

        expect(config.projectName).toBe('my-agent-project');
        expect(config.language).toBe('en');
        expect(config.rules).toBe('balanced');
        expect(config.skillCategories).toEqual(['webdev']);
    });

    // Case 8: Predefined Project Name
    test('Case 8: Predefined Name -> Prompts should respect input', async () => {
        prompts.mockResolvedValueOnce({
            language: 'en',
            // projectName prompt should be skipped or value injected
            scale: 'balanced',
            industryDomain: 'other',
            agentName: 'NamedAgent'
        });

        const config = await getProjectConfig(false, 'cli-provided-name');

        // Logic in prompts.js: if predefinedName, it injects it into prompt result or response object
        expect(config.projectName).toBe('cli-provided-name');
    });

    // Case 9: VI / Personal / Personal (Portfolio)
    test('Case 9: VI / Personal / Personal -> UI/UX Pro Max', async () => {
        prompts.mockResolvedValueOnce({
            language: 'vi',
            projectName: 'my-portfolio',
            scale: 'flexible',
            industryDomain: 'personal',
            agentName: 'MeBot'
        });

        const config = await getProjectConfig();

        expect(config.workflows).toContain('seo'); // Personal specific
        expect(config.workflows).toContain('ui-ux-pro-max'); // Personal implicit
    });

    // Case 10: Workflow Intersection (Finance + Team)
    test('Case 10: VI / Team / Finance -> Security + Audit + Orchestrate', async () => {
        prompts.mockResolvedValueOnce({
            language: 'vi',
            projectName: 'bank-app',
            scale: 'balanced',
            industryDomain: 'finance',
            agentName: 'Banker'
        });

        const config = await getProjectConfig();

        expect(config.rules).toBe('balanced');
        expect(config.workflows).toContain('audit');
        expect(config.workflows).toContain('security');
        expect(config.workflows).toContain('orchestrate');
    });
});
