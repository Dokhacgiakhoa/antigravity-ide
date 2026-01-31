const prompts = require('../../cli/prompts');

describe('CLI Prompts', () => {
  describe('getSkillsForCategories', () => {
    it('should return skills for valid categories', () => {
      const skills = prompts.getSkillsForCategories(['webdev']);
      expect(skills).toContain('modern-web-architect');
    });

    it('should return empty array for invalid categories', () => {
      const skills = prompts.getSkillsForCategories(['invalid']);
      expect(skills).toEqual([]);
    });

    it('should handle multiple categories', () => {
      const skills = prompts.getSkillsForCategories(['webdev', 'mobile']);
      expect(skills).toContain('modern-web-architect');
      expect(skills).toContain('mobile-design');
    });
  });

  // Note: getProjectConfig involves interactive prompts which are harder to unit test without heavy mocking.
  // We will rely on integration/reproduction scripts for that, or simple smoke tests if possible.
  describe('Configuration Defaults', () => {
    it('should have valid skill categories', () => {
        expect(prompts.skillCategories).toBeDefined();
        expect(prompts.skillCategories.webdev).toBeDefined();
    });
  });
});
