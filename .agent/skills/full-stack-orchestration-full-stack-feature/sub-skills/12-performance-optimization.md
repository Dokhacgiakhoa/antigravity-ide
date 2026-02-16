# 12. Performance Optimization

- Use Task tool with subagent_type="performance-engineer"
- Prompt: "Optimize performance across stack for: $ARGUMENTS. Analyze and optimize database queries, implement caching strategies (Redis/CDN), optimize frontend bundle size and loading performance, setup lazy loading and code splitting, and tune backend service performance. Include before/after metrics."
- Expected output: Performance improvements, caching configuration, CDN setup, optimized bundles, performance metrics report
- Context: Monitoring data from step 11, load test results

## Configuration Options
- `stack`: Specify technology stack (e.g., "React/FastAPI/PostgreSQL", "Next.js/Django/MongoDB")
- `deployment_target`: Cloud platform (AWS/GCP/Azure) or on-premises
- `feature_flags`: Enable/disable feature flag integration
- `api_style`: REST or GraphQL
- `testing_depth`: Comprehensive or essential
- `compliance`: Specific compliance requirements (GDPR, HIPAA, SOC2)

## Success Criteria
- All API contracts validated through contract tests
- Frontend and backend integration tests passing
- E2E tests covering critical user journeys
- Security audit passed with no critical vulnerabilities
- Performance metrics meeting defined SLOs
- Observability stack capturing all key metrics
- Feature flags configured for progressive rollout
- Documentation complete for all components
- CI/CD pipeline with automated quality gates
- Zero-downtime deployment capability verified

## Coordination Notes
- Each phase builds upon outputs from previous phases
- Parallel tasks in Phase 2 can run simultaneously but must converge for Phase 3
- Maintain traceability between requirements and implementations
- Use correlation IDs across all services for distributed tracing
- Document all architectural decisions in ADRs
- Ensure consistent error handling and API responses across services

Feature to implement: $ARGUMENTS