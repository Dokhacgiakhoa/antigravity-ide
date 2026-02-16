# 7. Code Refactoring

- Use Task tool with subagent_type="tdd-workflows::code-reviewer"
- Prompt: "Refactor implementation for: $ARGUMENTS while keeping tests green. Apply SOLID principles, remove duplication, improve naming, and optimize performance. Run tests after each refactoring."
- Output: Refactored code, refactoring report
- Constraint: Tests must remain green throughout