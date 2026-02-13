# 12. Final Code Review

- Use Task tool with subagent_type="comprehensive-review::architect-review"
- Prompt: "Perform comprehensive review of: $ARGUMENTS. Verify TDD process was followed, check code quality, test quality, and coverage. Suggest improvements."
- Output: Review report, improvement suggestions
- Action: Implement critical suggestions while maintaining green tests

## Incremental Development Mode

For test-by-test development:
1. Write ONE failing test
2. Make ONLY that test pass
3. Refactor if needed
4. Repeat for next test

Use this approach by adding `--incremental` flag to focus on one test at a time.

## Test Suite Mode

For comprehensive test suite development:
1. Write ALL tests for a feature/module (failing)
2. Implement code to pass ALL tests
3. Refactor entire module
4. Add integration tests

Use this approach by adding `--suite` flag for batch test development.

## Validation Checkpoints