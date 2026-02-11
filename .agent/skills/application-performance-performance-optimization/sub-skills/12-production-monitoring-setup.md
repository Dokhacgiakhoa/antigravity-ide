# 12. Production Monitoring Setup

- Use Task tool with subagent_type="observability-engineer"
- Prompt: "Implement production performance monitoring for: $ARGUMENTS. Set up APM with DataDog/New Relic/Dynatrace, configure distributed tracing with OpenTelemetry, implement custom business metrics. Create Grafana dashboards for key metrics, set up PagerDuty alerts for performance degradation. Define SLIs/SLOs for critical services with error budgets."
- Context: Performance improvements from all previous phases
- Output: Monitoring dashboards, alert rules, SLI/SLO definitions, runbooks