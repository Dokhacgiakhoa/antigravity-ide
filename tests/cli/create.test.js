const { generateGeminiMd } = require('../../cli/create');

describe('CLI Create', () => {
    describe('generateGeminiMd', () => {
        it('should generate English content by default', () => {
            const content = generateGeminiMd('balanced', 'en', 'other', 'AgentX');
            expect(content).toContain('# GEMINI.md - Agent Configuration');
            expect(content).toContain('Agent Identity: AgentX');
        });

        it('should generate Vietnamese content when selected', () => {
            const content = generateGeminiMd('balanced', 'vi', 'other', 'AgentX');
            expect(content).toContain('# GEMINI.md - Cấu hình Agent');
            expect(content).toContain('Danh tính Agent: AgentX');
        });

        it('should reflect strictness levels', () => {
            const strict = generateGeminiMd('strict', 'en');
            expect(strict).toContain('STRICT');
            
            const flexible = generateGeminiMd('flexible', 'en');
            expect(flexible).toContain('FLEXIBLE');
        });
    });
});
