# 2. Progressive Rollout and Monitoring

- Use Task tool with subagent_type="deployment-strategies::deployment-engineer"
- Prompt: "Implement progressive rollout strategy using feature flags. Start with 5% traffic to modernized components, monitor error rates, latency, and business metrics. Define automatic rollback triggers: error rate >1%, latency >2x baseline, or business metric degradation. Create runbook for traffic shifting: 5% → 25% → 50% → 100% with 24-hour observation periods."
- Context from previous: Feature flag configuration, monitoring dashboard
- Expected output: Rollout plan with automated safeguards

## Phase 5: Migration Completion and Documentation