# 3A. Test Coverage & Quality Analysis

- Use Task tool with subagent_type="unit-testing::test-automator"
- Prompt: "Evaluate testing strategy and implementation for: $ARGUMENTS. Analyze unit test coverage, integration test completeness, end-to-end test scenarios, test pyramid adherence, and test maintainability. Review test quality metrics including assertion density, test isolation, mock usage, and flakiness. Consider security and performance test requirements from Phase 2: {phase2_security_context}, {phase2_performance_context}. Verify TDD practices if --tdd-review flag is set."
- Expected output: Coverage report, test quality metrics, testing gap analysis
- Context: Incorporates security and performance testing requirements from Phase 2