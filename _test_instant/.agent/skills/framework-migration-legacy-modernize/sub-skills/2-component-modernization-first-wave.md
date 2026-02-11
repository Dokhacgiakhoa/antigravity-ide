# 2. Component Modernization - First Wave

- Use Task tool with subagent_type="python-development::python-pro" or "golang-pro" (based on target stack)
- Prompt: "Modernize first-wave components (quick wins identified in assessment). For each component: extract business logic from legacy code, implement using modern patterns (dependency injection, SOLID principles), ensure backward compatibility through adapter patterns, maintain data consistency with event sourcing or dual writes. Follow 12-factor app principles. Components to modernize: [list from prioritized roadmap]"
- Context from previous: Characterization tests, contract tests, infrastructure setup
- Expected output: Modernized components with adapters