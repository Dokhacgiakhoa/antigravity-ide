# 11. Performance Regression Testing

- Use Task tool with subagent_type="performance-testing-review::test-automator"
- Prompt: "Create automated performance regression tests for: $ARGUMENTS. Set up performance budgets for key metrics, integrate with CI/CD pipeline using GitHub Actions or similar. Create Lighthouse CI tests for frontend, API performance tests with Artillery, and database performance benchmarks. Implement automatic rollback triggers for performance regressions."
- Context: Load test results from step 10, baseline metrics from phase 1
- Output: Performance test suite, CI/CD integration, regression prevention system

## Phase 5: Monitoring & Continuous Optimization