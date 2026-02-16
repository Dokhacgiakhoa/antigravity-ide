# 3. Write Unit Tests (Failing)

- Use Task tool with subagent_type="unit-testing::test-automator"
- Prompt: "Write FAILING unit tests for: $ARGUMENTS. Tests must fail initially. Include edge cases, error scenarios, and happy paths. DO NOT implement production code."
- Output: Failing unit tests, test documentation
- **CRITICAL**: Verify all tests fail with expected error messages