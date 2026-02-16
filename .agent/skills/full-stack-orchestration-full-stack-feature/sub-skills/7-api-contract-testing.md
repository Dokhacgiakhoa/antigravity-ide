# 7. API Contract Testing

- Use Task tool with subagent_type="test-automator"
- Prompt: "Create contract tests for: $ARGUMENTS. Implement Pact/Dredd tests to validate API contracts between backend and frontend. Create integration tests for all API endpoints, test authentication flows, validate error responses, and ensure proper CORS configuration. Include load testing scenarios."
- Expected output: Contract test suites, integration tests, load test scenarios, API documentation validation
- Context: API implementations from Phase 2