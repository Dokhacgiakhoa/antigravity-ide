# 2. Test Recommendations and Gap Analysis

- Use Task tool with subagent_type="unit-testing::test-automator"
- Prompt: "Based on test results [insert summary] and code changes, identify: 1) Missing test scenarios, 2) Edge cases not covered, 3) Integration points needing verification, 4) Performance benchmarks needed. Generate test implementation recommendations prioritized by risk. Consider the breaking changes identified: [insert breaking changes]."
- Context from previous: Test results, breaking changes, untested paths
- Expected output: Prioritized list of additional tests needed

## Phase 3: Commit Message Generation