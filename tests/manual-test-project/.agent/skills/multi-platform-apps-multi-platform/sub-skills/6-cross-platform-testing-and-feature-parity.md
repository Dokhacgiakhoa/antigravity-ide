# 6. Cross-Platform Testing and Feature Parity

- Use Task tool with subagent_type="unit-testing::test-automator"
- Prompt: "Validate feature parity across all platforms:
  - Functional testing matrix (features work identically)
  - UI consistency verification (follows design system)
  - Performance benchmarks per platform
  - Accessibility testing (platform-specific tools)
  - Network resilience testing (offline, slow connections)
  - Data synchronization validation
  - Platform-specific edge cases
  - End-to-end user journey tests
  Create test report with any platform discrepancies."
- Context from previous: All platform implementations, API documentation
- Expected output: Test report, parity matrix, performance metrics