# 1A. Code Quality Analysis

- Use Task tool with subagent_type="code-reviewer"
- Prompt: "Perform comprehensive code quality review for: $ARGUMENTS. Analyze code complexity, maintainability index, technical debt, code duplication, naming conventions, and adherence to Clean Code principles. Integrate with SonarQube, CodeQL, and Semgrep for static analysis. Check for code smells, anti-patterns, and violations of SOLID principles. Generate cyclomatic complexity metrics and identify refactoring opportunities."
- Expected output: Quality metrics, code smell inventory, refactoring recommendations
- Context: Initial codebase analysis, no dependencies on other phases