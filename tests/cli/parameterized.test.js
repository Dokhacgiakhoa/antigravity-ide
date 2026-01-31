const { generateGeminiMd } = require('../../cli/create');

describe('CLI Extensive Parameterized Tests', () => {
    const languages = ['en', 'vi'];
    const rules = ['strict', 'balanced', 'flexible'];
    const industries = [
        'finance', 'education', 'fnb', 'personal', 
        'healthcare', 'logistics', 'other'
    ];

    // Total combinations: 2 * 3 * 7 = 42 tests
    languages.forEach(lang => {
        rules.forEach(rule => {
            industries.forEach(industry => {
                it(`should generate valid GEMINI.md for [${lang} - ${rule} - ${industry}]`, () => {
                    const content = generateGeminiMd(rule, lang, industry, 'TestAgent');
                    
                    // Basic Structure Checks
                    if (lang === 'vi') {
                        expect(content).toContain('# GEMINI.md - Cấu hình Agent');
                        expect(content).toContain('Giao thức Ngôn ngữ');
                    } else {
                        expect(content).toContain('# GEMINI.md - Agent Configuration');
                        expect(content).toContain('Language Protocol');
                    }

                    // Rule Checks
                    const strictnessMarker = rule.toUpperCase();
                    expect(content).toContain(strictnessMarker);

                    // Industry Checks
                    // Just verify the industry section isn't undefined or empty
                    if (lang === 'vi') {
                         expect(content).toContain('Trọng tâm Chính:');
                    } else {
                         expect(content).toContain('Primary Focus:');
                    }
                });
            });
        });
    });
});
