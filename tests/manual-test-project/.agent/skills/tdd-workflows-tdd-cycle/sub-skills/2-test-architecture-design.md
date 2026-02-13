# 2. Test Architecture Design

- Use Task tool with subagent_type="unit-testing::test-automator"
- Prompt: "Design test architecture for: $ARGUMENTS based on test specification. Define test structure, fixtures, mocks, and test data strategy. Ensure testability and maintainability."
- Output: Test architecture, fixture design, mock strategy
- Validation: Architecture supports isolated, fast, reliable tests

## Phase 2: RED - Write Failing Tests