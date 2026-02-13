# 1. Test Execution and Coverage

- Use Task tool with subagent_type="unit-testing::test-automator"
- Prompt: "Execute all test suites for the modified code. Run: 1) Unit tests, 2) Integration tests, 3) End-to-end tests if applicable. Generate coverage report and identify any untested code paths. Based on review issues: [insert critical/high issues], ensure tests cover the problem areas. Provide test results in format: {passed: [], failed: [], skipped: [], coverage: {statements: %, branches: %, functions: %, lines: %}, untested_critical_paths: []}"
- Context from previous: Critical code review issues that need test coverage
- Expected output: Complete test results and coverage metrics