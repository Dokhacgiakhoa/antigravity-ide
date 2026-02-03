const fs = require('fs-extra');
const path = require('path');
const { createProject } = require('../../cli/create');

// Mock prompts to control user input
jest.mock('prompts', () => jest.fn());
const prompts = require('prompts');

// Mock child_process to avoid running real git commands
jest.mock('child_process', () => ({
  execSync: jest.fn(),
  exec: jest.fn()
}));

// Mock ora to avoid spinner spam
jest.mock('ora', () => {
    const spinner = {
        start: jest.fn().mockReturnThis(),
        succeed: jest.fn().mockReturnThis(),
        fail: jest.fn().mockReturnThis(),
        warn: jest.fn().mockReturnThis(),
        stop: jest.fn().mockReturnThis()
    };
    return () => spinner;
});

// Suppress console output
global.console = { 
    ...console, 
    log: jest.fn(),
    error: console.error, // Allow error logging to see what went wrong
    warn: jest.fn()
};

describe('CLI E2E Stress Test (10 Scenarios)', () => {
    const testRoot = path.join(__dirname, 'stress_temp');
    
    beforeAll(() => {
        fs.emptyDirSync(testRoot);
    });

    afterAll(() => {
        // Clean up entire test loop folder
        fs.removeSync(testRoot);
    });

    const scenarios = [
        { name: 'project_01', lang: 'en', rules: 'strict', industry: 'finance' },
        { name: 'project_02', lang: 'vi', rules: 'balanced', industry: 'education' },
        { name: 'project_03', lang: 'en', rules: 'flexible', industry: 'fnb' },
        { name: 'project_04', lang: 'vi', rules: 'strict', industry: 'personal' },
        { name: 'project_05', lang: 'en', rules: 'balanced', industry: 'healthcare' },
        { name: 'project_06', lang: 'vi', rules: 'flexible', industry: 'logistics' },
        { name: 'project_07', lang: 'en', rules: 'strict', industry: 'other' },
        { name: 'project_08', lang: 'vi', rules: 'balanced', industry: 'finance' },
        { name: 'project_09', lang: 'en', rules: 'flexible', industry: 'education' },
        { name: 'project_10', lang: 'vi', rules: 'strict', industry: 'fnb' },
    ];

    scenarios.forEach((scenario, index) => {
        it(`Run #${index + 1}: Should create ${scenario.name} [${scenario.lang}/${scenario.rules}/${scenario.industry}]`, async () => {
            const projectPath = path.join(testRoot, scenario.name);
            
            // Ensure target doesn't exist (clean slate)
            fs.removeSync(projectPath);

            // Test setup setup mock responses for prompts
            // Must match the fields in cli/prompts.js: language, projectName, scale, productType, agentName
            prompts.mockResolvedValueOnce({
                projectName: scenario.name,
                language: scenario.lang,
                scale: scenario.rules, // maps to rules (flexible/balanced/strict)
                productType: 'user_app', // Required field
                agentName: 'TestAgent'
            });

            // Run the creator
            // Note: createProject arguments are (projectName, options)
            // options = { skipPrompts: false } to trigger our mocked prompts
            // BUT createProject logic parses 'projectName' argument first.
            // If we run 'createProject(null, {})', it asks for name. 
            // Our prompt mock provides it.
            
            // WE MUST MOCK process.cwd() or pass absolute path?
            // createProject uses process.cwd() to verify existence. 
            // Easier: pass the target path as projectName argument, but prompts might override?
            // Let's pass null and let prompts handle it, BUT createProject logic lines 16-17:
            // const isCurrentDir = !projectName || ...
            // If we pass null, it prompts.
            // HOWEVER, createProject creates it in process.cwd(). 
            // We need to temporarily switch process.cwd() or modify createProject to accept content root.
            // Since we can't easily change CWD safely in parallel tests (though Jest runs serial files, tests are serial too),
            // let's change CWD to testRoot for this suite.
            
            const originalCwd = process.cwd();
            process.chdir(testRoot);

            try {
                await createProject(scenario.name, { skipPrompts: false });
            } finally {
                process.chdir(originalCwd);
            }

            // Verification
            expect(fs.existsSync(projectPath)).toBe(true);
            expect(fs.existsSync(path.join(projectPath, 'package.json'))).toBe(true);
            expect(fs.existsSync(path.join(projectPath, '.agent', 'GEMINI.md'))).toBe(true);
            
            // Check GEMINI.md content matches config
            const geminiContent = fs.readFileSync(path.join(projectPath, '.agent', 'GEMINI.md'), 'utf-8');
            const langMarker = scenario.lang === 'vi' ? 'Giao thức Ngôn ngữ' : 'Language Protocol';
            expect(geminiContent).toContain(langMarker);

        }, 30000); // 30s timeout per test
    });
});
