# Optional Parameters

- **--deployment-strategy**: Deployment approach (direct|canary|feature-flag|blue-green|a-b-test)
- **--test-coverage-min**: Minimum test coverage threshold (default: 80%)
- **--performance-budget**: Performance requirements (e.g., <200ms response time)
- **--rollout-percentage**: Initial rollout percentage for gradual deployment (default: 5%)
- **--feature-flag-service**: Feature flag provider (launchdarkly|split|unleash|custom)
- **--analytics-platform**: Analytics integration (segment|amplitude|mixpanel|custom)
- **--monitoring-stack**: Observability tools (datadog|newrelic|grafana|custom)

## Success Criteria

- All acceptance criteria from business requirements are met
- Test coverage exceeds minimum threshold (80% default)
- Security scan shows no critical vulnerabilities
- Performance meets defined budgets and SLOs
- Feature flags configured for controlled rollout
- Monitoring and alerting fully operational
- Documentation complete and approved
- Successful deployment to production with rollback capability
- Product analytics tracking feature usage
- A/B test metrics configured (if applicable)

## Rollback Strategy

If issues arise during or after deployment:

1. Immediate feature flag disable (< 1 minute)
2. Blue-green traffic switch (< 5 minutes)
3. Full deployment rollback via CI/CD (< 15 minutes)
4. Database migration rollback if needed (coordinate with data team)
5. Incident post-mortem and fixes before re-deployment

Feature description: $ARGUMENTS