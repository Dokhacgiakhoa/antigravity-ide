# 1. Legacy Code Test Coverage Analysis

- Use Task tool with subagent_type="unit-testing::test-automator"
- Prompt: "Analyze existing test coverage for legacy components at $ARGUMENTS. Use coverage tools to identify untested code paths, missing integration tests, and absent end-to-end scenarios. For components with <40% coverage, generate characterization tests that capture current behavior without modifying functionality. Create test harness for safe refactoring."
- Expected output: Test coverage report and characterization test suite