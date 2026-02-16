# 1B. Architecture & Design Review

- Use Task tool with subagent_type="architect-review"
- Prompt: "Review architectural design patterns and structural integrity in: $ARGUMENTS. Evaluate microservices boundaries, API design, database schema, dependency management, and adherence to Domain-Driven Design principles. Check for circular dependencies, inappropriate coupling, missing abstractions, and architectural drift. Verify compliance with enterprise architecture standards and cloud-native patterns."
- Expected output: Architecture assessment, design pattern analysis, structural recommendations
- Context: Runs parallel with code quality analysis

## Phase 2: Security & Performance Review

Use Task tool with security and performance agents, incorporating Phase 1 findings: