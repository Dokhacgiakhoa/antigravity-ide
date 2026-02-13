# 4. Feature Architecture Planning

- Use Task tool with subagent_type="data-engineering::backend-architect"
- Context: Business requirements and experiment design
- Prompt: "Design feature architecture for: $ARGUMENTS with A/B testing capability. Include feature flag integration (LaunchDarkly, Split.io, or Optimizely), gradual rollout strategy, circuit breakers for safety, and clean separation between control and treatment logic. Ensure architecture supports real-time configuration updates."
- Output: Architecture diagrams, feature flag schema, rollout strategy