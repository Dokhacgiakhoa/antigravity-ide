
const prompts = require('prompts');
const { getProjectConfig, skillCategories } = require('../cli/prompts');

// Mock prompts
jest.mock('prompts');

describe('Project Setup 10 Scenarios Verification', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });



// Case 1: VI language, Personal scale, User App (Default Industry: Other/All)
    test('Case 1: VI / Personal (Flexible) / User App -> Standard Engine, Limited Skills', async () => {
        prompts.mockResolvedValueOnce({
            language: 'vi',
            projectName: 'fin-bot',
            scale: 'flexible',
            productType: 'user_app',
            agentName: 'MoneyJarvis'
        });

        const config = await getProjectConfig();
        
        expect(config.language).toBe('vi');
        expect(config.rules).toBe('flexible'); 
        expect(config.engineMode).toBe('standard'); 
        expect(config.skillCategories).toContain('webdev');
        expect(config.skillCategories).toContain('ai');
        expect(config.skillCategories).toContain('mobile'); // User App now includes mobile
        expect(config.skillCategories).toContain('testing'); // User App now includes testing
        expect(config.skillCategories).toContain('uiux'); // New
        expect(config.industryDomain).toBe('other');
        expect(config.workflows).toContain('security'); // From 'other' = all
    });

    // Case 2: EN language, Enterprise scale, User App (Mobile focus implicit by type)
    test('Case 2: EN / Enterprise (Strict) / User App -> Advanced Engine, All Skills', async () => {
        prompts.mockResolvedValueOnce({
            language: 'en',
            projectName: 'edu-master',
            scale: 'strict',
            productType: 'user_app',
            agentName: 'TeacherAI'
        });

        const config = await getProjectConfig();

        expect(config.engineMode).toBe('advanced'); 
        expect(config.skillCategories).toContain('mobile');
        expect(config.skillCategories).toContain('security');
        expect(config.skillCategories).toContain('research'); // Enterprise adds research
        expect(config.skillCategories).toContain('uiux');
        expect(config.rules).toBe('strict');
        // From 'other' = all, 'explain' is in education but other has everything
        expect(config.workflows).toContain('explain'); 
    });

    // Case 3: VI language, Team scale, Digital Asset (Game)
    test('Case 3: VI / Team (Balanced) / Digital Asset -> Advanced Engine, Mobile Skills', async () => {
        prompts.mockResolvedValueOnce({
            language: 'vi',
            projectName: 'game-ai',
            scale: 'balanced',
            productType: 'digital_asset',
            agentName: 'ChefBot'
        });

        const config = await getProjectConfig();

        expect(config.engineMode).toBe('advanced'); 
        expect(config.skillCategories).toContain('mobile'); // Digital Asset maps to Mobile
        expect(config.skillCategories).toContain('webdev'); // Digital Asset maps to Webdev
        expect(config.skillCategories).toContain('ai');
        expect(config.skillCategories).toContain('devops');
        expect(config.skillCategories).toContain('uiux'); // Team adds uiux
        
        expect(config.rules).toBe('balanced');
        expect(config.workflows).toContain('mobile'); 
    });

    // Case 4: EN language, Personal scale, Dev Tool
    test('Case 4: EN / Personal / Dev Tool -> Standard Engine', async () => {
        prompts.mockResolvedValueOnce({
            language: 'en',
            projectName: 'cli-app',
            scale: 'flexible',
            productType: 'dev_tool',
            agentName: 'DrStrange'
        });

        const config = await getProjectConfig();

        expect(config.engineMode).toBe('standard');
        expect(config.skillCategories).toContain('devops'); 
        expect(config.skillCategories).toContain('testing'); 
        expect(config.workflows).toContain('create'); 
    });

    // Case 5: VI language, Enterprise scale, Dev Tool (API)
    test('Case 5: VI / Enterprise / Dev Tool -> Advanced Engine', async () => {
        prompts.mockResolvedValueOnce({
            language: 'vi',
            projectName: 'ship-fast',
            scale: 'strict',
            productType: 'dev_tool',
            agentName: 'LogiBot'
        });

        const config = await getProjectConfig();

        expect(config.engineMode).toBe('advanced');
        expect(config.skillCategories).toContain('devops');
        expect(config.workflows).toContain('api'); 
    });

    // Case 6: EN language, Team scale, User App (Desktop)
    test('Case 6: EN / Team / User App -> Advanced Engine, All Workflows', async () => {
        prompts.mockResolvedValueOnce({
            language: 'en',
            projectName: 'random-app',
            scale: 'balanced',
            productType: 'user_app',
            agentName: 'Helper'
        });

        const config = await getProjectConfig();

        expect(config.engineMode).toBe('advanced');
        expect(config.skillCategories).toContain('webdev'); 
        expect(config.workflows).toContain('debug');
        expect(config.workflows).toContain('mobile'); 
    });

    // Case 7: Skip Prompts (Non-interactive mode)
    test('Case 7: Skip Prompts -> Defaults applied', async () => {
        const config = await getProjectConfig(true); 

        expect(config.projectName).toBe('my-agent-project');
        expect(config.engineMode).toBe('standard');
        expect(config.productType).toBe('user_app'); // Updated default
    });

    // Case 8: Predefined Project Name (User App)
    test('Case 8: Predefined Name', async () => {
        prompts.mockResolvedValueOnce({
            language: 'en',
            scale: 'balanced',
            productType: 'user_app',
            agentName: 'NamedAgent'
        });

        const config = await getProjectConfig(false, 'cli-provided-name');
        expect(config.projectName).toBe('cli-provided-name');
    });

    // Case 9: VI / Personal / Digital Asset (Template)
    test('Case 9: VI / Personal / Digital Asset -> Standard Engine', async () => {
        prompts.mockResolvedValueOnce({
            language: 'vi',
            projectName: 'my-portfolio',
            scale: 'flexible',
            productType: 'digital_asset',
            agentName: 'MeBot'
        });

        const config = await getProjectConfig();

        expect(config.engineMode).toBe('standard');
        expect(config.skillCategories).toContain('webdev'); 
        expect(config.skillCategories).toContain('uiux'); 
        expect(config.workflows).toContain('seo'); // From 'other' = all + digital_asset adds seo
    });

    // Case 10: VI / Team / User App
    test('Case 10: VI / Team / User App -> Advanced Engine', async () => {
        prompts.mockResolvedValueOnce({
            language: 'vi',
            projectName: 'bank-app',
            scale: 'balanced',
            productType: 'user_app',
            agentName: 'Banker'
        });

        const config = await getProjectConfig();

        expect(config.engineMode).toBe('advanced');
        expect(config.skillCategories).toContain('uiux'); 
        expect(config.workflows).toContain('orchestrate'); // From 'other' = all
    });
});
