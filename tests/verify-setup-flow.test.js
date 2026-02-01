
const prompts = require('prompts');
const { getProjectConfig, skillCategories } = require('../cli/prompts');

// Mock prompts
jest.mock('prompts');

describe('Project Setup 10 Scenarios Verification', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    // Case 1: VI language, Personal scale, Finance industry
    test('Case 1: VI / Personal (Flexible) -> Standard Engine, Limited Skills', async () => {
        prompts.mockResolvedValueOnce({
            language: 'vi',
            projectName: 'fin-bot',
            scale: 'flexible',
            industryDomain: 'finance',
            agentName: 'MoneyJarvis'
        });

        const config = await getProjectConfig();
        
        expect(config.language).toBe('vi');
        expect(config.rules).toBe('flexible'); 
        expect(config.engineMode).toBe('standard'); // Personal -> Standard
        expect(config.skillCategories).toEqual(['webdev', 'ai']); // Limited skills
        expect(config.workflows).toContain('security'); // Finance workflow
    });

    // Case 2: EN language, Enterprise scale, Education industry
    test('Case 2: EN / Enterprise (Strict) -> Advanced Engine, All Skills', async () => {
        prompts.mockResolvedValueOnce({
            language: 'en',
            projectName: 'edu-master',
            scale: 'strict',
            industryDomain: 'education',
            agentName: 'TeacherAI'
        });

        const config = await getProjectConfig();

        expect(config.engineMode).toBe('advanced'); // Enterprise -> Advanced
        expect(config.skillCategories).toHaveLength(Object.keys(skillCategories).length); // All skills
        expect(config.rules).toBe('strict');
        expect(config.workflows).toContain('explain');
    });

    // Case 3: VI language, Team scale, F&B industry
    test('Case 3: VI / Team (Balanced) -> Advanced Engine, Hybrid Skills', async () => {
        prompts.mockResolvedValueOnce({
            language: 'vi',
            projectName: 'burger-king-ai',
            scale: 'balanced',
            industryDomain: 'fnb',
            agentName: 'ChefBot'
        });

        const config = await getProjectConfig();

        expect(config.engineMode).toBe('advanced'); // Team -> Advanced
        expect(config.skillCategories).toEqual(expect.arrayContaining(['webdev', 'mobile', 'ai', 'growth', 'devops']));
        expect(config.rules).toBe('balanced');
        expect(config.workflows).toContain('mobile');
    });

    // Case 4: EN language, Personal scale, Healthcare industry
    test('Case 4: EN / Personal -> Standard Engine', async () => {
        prompts.mockResolvedValueOnce({
            language: 'en',
            projectName: 'health-care-app',
            scale: 'flexible',
            industryDomain: 'healthcare',
            agentName: 'DrStrange'
        });

        const config = await getProjectConfig();

        expect(config.engineMode).toBe('standard');
        expect(config.skillCategories).toEqual(['webdev', 'ai']);
        expect(config.workflows).toContain('compliance');
    });

    // Case 5: VI language, Enterprise scale, Logistics industry
    test('Case 5: VI / Enterprise -> Advanced Engine', async () => {
        prompts.mockResolvedValueOnce({
            language: 'vi',
            projectName: 'ship-fast',
            scale: 'strict',
            industryDomain: 'logistics',
            agentName: 'LogiBot'
        });

        const config = await getProjectConfig();

        expect(config.engineMode).toBe('advanced');
        expect(config.skillCategories).toHaveLength(Object.keys(skillCategories).length);
        expect(config.workflows).toContain('api');
    });

    // Case 6: EN language, Team scale, Other (All Fields)
    test('Case 6: EN / Team -> Advanced Engine, All Workflows', async () => {
        prompts.mockResolvedValueOnce({
            language: 'en',
            projectName: 'random-app',
            scale: 'balanced',
            industryDomain: 'other',
            agentName: 'Helper'
        });

        const config = await getProjectConfig();

        expect(config.engineMode).toBe('advanced');
        // Now 'other' should include everything
        expect(config.workflows).toContain('debug');
        expect(config.workflows).toContain('explain'); // From Education
        expect(config.workflows).toContain('security'); // From Finance
        expect(config.workflows).toContain('mobile'); // From F&B
    });

    // Case 7: Skip Prompts (Non-interactive mode)
    test('Case 7: Skip Prompts -> Defaults applied', async () => {
        const config = await getProjectConfig(true); 

        // Check defaults logic validation if needed, assuming default is standard
        expect(config.projectName).toBe('my-agent-project');
        expect(config.engineMode).toBe('standard');
    });

    // Case 8: Predefined Project Name
    test('Case 8: Predefined Name', async () => {
        prompts.mockResolvedValueOnce({
            language: 'en',
            scale: 'balanced',
            industryDomain: 'other',
            agentName: 'NamedAgent'
        });

        const config = await getProjectConfig(false, 'cli-provided-name');
        expect(config.projectName).toBe('cli-provided-name');
    });

    // Case 9: VI / Personal / Personal (Portfolio)
    test('Case 9: VI / Personal -> Standard Engine', async () => {
        prompts.mockResolvedValueOnce({
            language: 'vi',
            projectName: 'my-portfolio',
            scale: 'flexible',
            industryDomain: 'personal',
            agentName: 'MeBot'
        });

        const config = await getProjectConfig();

        expect(config.engineMode).toBe('standard');
        expect(config.workflows).toContain('seo');
    });

    // Case 10: Workflow Intersection (Finance + Team)
    test('Case 10: VI / Team -> Advanced Engine', async () => {
        prompts.mockResolvedValueOnce({
            language: 'vi',
            projectName: 'bank-app',
            scale: 'balanced',
            industryDomain: 'finance',
            agentName: 'Banker'
        });

        const config = await getProjectConfig();

        expect(config.engineMode).toBe('advanced');
        expect(config.workflows).toContain('orchestrate');
    });
});
