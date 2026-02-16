# 9. Write Integration Tests (Failing First)

- Use Task tool with subagent_type="unit-testing::test-automator"
- Prompt: "Write FAILING integration tests for: $ARGUMENTS. Test component interactions, API contracts, and data flow. Tests must fail initially."
- Output: Failing integration tests
- Validation: Tests fail due to missing integration logic