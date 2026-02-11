# 2. Dependency and Breaking Change Analysis

- Use Task tool with subagent_type="code-reviewer"
- Prompt: "Analyze the changes for: 1) New dependencies or version changes, 2) Breaking API changes, 3) Database schema modifications, 4) Configuration changes, 5) Backward compatibility issues. Context from previous review: [insert issues summary]. Identify any changes that require migration scripts or documentation updates."
- Context from previous: Code quality issues that might indicate breaking changes
- Expected output: Breaking change assessment and migration requirements

## Phase 2: Testing and Validation