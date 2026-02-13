# 6. Verify Test Success

- Use Task tool with subagent_type="unit-testing::test-automator"
- Prompt: "Run all tests for: $ARGUMENTS and verify they pass. Check test coverage metrics. Ensure no tests were accidentally broken."
- Output: Test execution report, coverage metrics
- **GATE**: All tests must pass before proceeding

## Phase 4: REFACTOR - Improve Code Quality