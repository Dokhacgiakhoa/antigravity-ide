const fs = require('fs-extra');
const path = require('path');
const { generateGeminiMd } = require('../../cli/create');

/**
 * Test các helper functions bên trong cli/create.js
 * Bổ sung coverage cho các hàm chưa được test.
 */

describe('CLI Create - Helper Functions', () => {
    // --- generateGeminiMd: Edge cases ---
    describe('generateGeminiMd - Edge Cases', () => {
        it('should handle empty agent name gracefully', () => {
            const content = generateGeminiMd('balanced', 'en', 'other', '');
            expect(content).toBeDefined();
            expect(typeof content).toBe('string');
            expect(content.length).toBeGreaterThan(0);
        });

        it('should handle undefined agent name', () => {
            const content = generateGeminiMd('balanced', 'en', 'other');
            expect(content).toBeDefined();
            expect(content).toContain('GEMINI.md');
        });

        it('should handle unknown industry gracefully', () => {
            const content = generateGeminiMd('balanced', 'en', 'unknown_industry', 'TestBot');
            expect(content).toBeDefined();
            // Nên fallback về mục "other" hoặc general
            expect(content.length).toBeGreaterThan(100);
        });

        it('should produce different content for different strictness levels', () => {
            const strict = generateGeminiMd('strict', 'en', 'other', 'Bot');
            const flexible = generateGeminiMd('flexible', 'en', 'other', 'Bot');
            const balanced = generateGeminiMd('balanced', 'en', 'other', 'Bot');

            // Các mức strictness khác nhau phải cho ra nội dung khác nhau
            expect(strict).not.toBe(flexible);
            expect(strict).not.toBe(balanced);
        });

        it('should contain agent name in output', () => {
            const content = generateGeminiMd('balanced', 'en', 'other', 'SuperAgent');
            expect(content).toContain('SuperAgent');
        });
    });

    // --- generateGeminiMd: Industry-specific content ---
    describe('generateGeminiMd - Industry Content', () => {
        const industries = ['finance', 'education', 'fnb', 'personal', 'healthcare', 'logistics', 'other'];

        industries.forEach(industry => {
            it(`should generate valid content for industry "${industry}"`, () => {
                const content = generateGeminiMd('balanced', 'en', industry, 'TestAgent');
                expect(content).toBeDefined();
                expect(content.length).toBeGreaterThan(100);
                // Kiểm tra cấu trúc cơ bản
                expect(content).toContain('# GEMINI.md');
            });
        });
    });

    // --- generateGeminiMd: Bilingual consistency ---
    describe('generateGeminiMd - Language Parity', () => {
        const industries = ['finance', 'other'];

        industries.forEach(industry => {
            it(`[${industry}] EN and VI should have similar structure`, () => {
                const en = generateGeminiMd('balanced', 'en', industry, 'TestAgent');
                const vi = generateGeminiMd('balanced', 'vi', industry, 'TestAgent');

                // Cả 2 đều phải chứa agent name
                expect(en).toContain('TestAgent');
                expect(vi).toContain('TestAgent');

                // Độ dài tương đương (chênh lệch không quá 50%)
                const ratio = Math.abs(en.length - vi.length) / Math.max(en.length, vi.length);
                expect(ratio).toBeLessThan(0.5);
            });
        });
    });
});
