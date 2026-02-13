# 13. Continuous Performance Optimization

- Use Task tool with subagent_type="performance-engineer"
- Prompt: "Establish continuous optimization process for: $ARGUMENTS. Create performance budget tracking, implement A/B testing for performance changes, set up continuous profiling in production. Document optimization opportunities backlog, create capacity planning models, and establish regular performance review cycles."
- Context: Monitoring setup from step 12, all previous optimization work
- Output: Performance budget tracking, optimization backlog, capacity planning, review process

## Configuration Options

- **performance_focus**: "latency" | "throughput" | "cost" | "balanced" (default: "balanced")
- **optimization_depth**: "quick-wins" | "comprehensive" | "enterprise" (default: "comprehensive")
- **tools_available**: ["datadog", "newrelic", "prometheus", "grafana", "k6", "gatling"]
- **budget_constraints**: Set maximum acceptable costs for infrastructure changes
- **user_impact_tolerance**: "zero-downtime" | "maintenance-window" | "gradual-rollout"

## Success Criteria

- **Response Time**: P50 < 200ms, P95 < 1s, P99 < 2s for critical endpoints
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Throughput**: Support 2x current peak load with <1% error rate
- **Database Performance**: Query P95 < 100ms, no queries > 1s
- **Resource Utilization**: CPU < 70%, Memory < 80% under normal load
- **Cost Efficiency**: Performance per dollar improved by minimum 30%
- **Monitoring Coverage**: 100% of critical paths instrumented with alerting

Performance optimization target: $ARGUMENTS