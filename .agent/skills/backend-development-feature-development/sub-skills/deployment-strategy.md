# Deployment Strategy

- **direct**: Immediate rollout to all users
- **canary**: Gradual rollout starting with 5% of traffic
- **feature-flag**: Controlled activation via feature toggles
- **blue-green**: Zero-downtime deployment with instant rollback
- **a-b-test**: Split traffic for experimentation and metrics

## Phase 1: Discovery & Requirements Planning

1. **Business Analysis & Requirements**
   - Use Task tool with subagent_type="business-analytics::business-analyst"
   - Prompt: "Analyze feature requirements for: $ARGUMENTS. Define user stories, acceptance criteria, success metrics, and business value. Identify stakeholders, dependencies, and risks. Create feature specification document with clear scope boundaries."
   - Expected output: Requirements document with user stories, success metrics, risk assessment
   - Context: Initial feature request and business context

2. **Technical Architecture Design**
   - Use Task tool with subagent_type="comprehensive-review::architect-review"
   - Prompt: "Design technical architecture for feature: $ARGUMENTS. Using requirements: [include business analysis from step 1]. Define service boundaries, API contracts, data models, integration points, and technology stack. Consider scalability, performance, and security requirements."
   - Expected output: Technical design document with architecture diagrams, API specifications, data models
   - Context: Business requirements, existing system architecture

3. **Feasibility & Risk Assessment**
   - Use Task tool with subagent_type="security-scanning::security-auditor"
   - Prompt: "Assess security implications and risks for feature: $ARGUMENTS. Review architecture: [include technical design from step 2]. Identify security requirements, compliance needs, data privacy concerns, and potential vulnerabilities."
   - Expected output: Security assessment with risk matrix, compliance checklist, mitigation strategies
   - Context: Technical design, regulatory requirements

## Phase 2: Implementation & Development

4. **Backend Services Implementation**
   - Use Task tool with subagent_type="backend-architect"
   - Prompt: "Implement backend services for: $ARGUMENTS. Follow technical design: [include architecture from step 2]. Build RESTful/GraphQL APIs, implement business logic, integrate with data layer, add resilience patterns (circuit breakers, retries), implement caching strategies. Include feature flags for gradual rollout."
   - Expected output: Backend services with APIs, business logic, database integration, feature flags
   - Context: Technical design, API contracts, data models

5. **Frontend Implementation**
   - Use Task tool with subagent_type="frontend-mobile-development::frontend-developer"
   - Prompt: "Build frontend components for: $ARGUMENTS. Integrate with backend APIs: [include API endpoints from step 4]. Implement responsive UI, state management, error handling, loading states, and analytics tracking. Add feature flag integration for A/B testing capabilities."
   - Expected output: Frontend components with API integration, state management, analytics
   - Context: Backend APIs, UI/UX designs, user stories

6. **Data Pipeline & Integration**
   - Use Task tool with subagent_type="data-engineering::data-engineer"
   - Prompt: "Build data pipelines for: $ARGUMENTS. Design ETL/ELT processes, implement data validation, create analytics events, set up data quality monitoring. Integrate with product analytics platforms for feature usage tracking."
   - Expected output: Data pipelines, analytics events, data quality checks
   - Context: Data requirements, analytics needs, existing data infrastructure

## Phase 3: Testing & Quality Assurance

7. **Automated Test Suite**
   - Use Task tool with subagent_type="unit-testing::test-automator"
   - Prompt: "Create comprehensive test suite for: $ARGUMENTS. Write unit tests for backend: [from step 4] and frontend: [from step 5]. Add integration tests for API endpoints, E2E tests for critical user journeys, performance tests for scalability validation. Ensure minimum 80% code coverage."
   - Expected output: Test suites with unit, integration, E2E, and performance tests
   - Context: Implementation code, acceptance criteria, test requirements

8. **Security Validation**
   - Use Task tool with subagent_type="security-scanning::security-auditor"
   - Prompt: "Perform security testing for: $ARGUMENTS. Review implementation: [include backend and frontend from steps 4-5]. Run OWASP checks, penetration testing, dependency scanning, and compliance validation. Verify data encryption, authentication, and authorization."
   - Expected output: Security test results, vulnerability report, remediation actions
   - Context: Implementation code, security requirements

9. **Performance Optimization**
   - Use Task tool with subagent_type="application-performance::performance-engineer"
   - Prompt: "Optimize performance for: $ARGUMENTS. Analyze backend services: [from step 4] and frontend: [from step 5]. Profile code, optimize queries, implement caching, reduce bundle sizes, improve load times. Set up performance budgets and monitoring."
   - Expected output: Performance improvements, optimization report, performance metrics
   - Context: Implementation code, performance requirements

## Phase 4: Deployment & Monitoring

10. **Deployment Strategy & Pipeline**
    - Use Task tool with subagent_type="deployment-strategies::deployment-engineer"
    - Prompt: "Prepare deployment for: $ARGUMENTS. Create CI/CD pipeline with automated tests: [from step 7]. Configure feature flags for gradual rollout, implement blue-green deployment, set up rollback procedures. Create deployment runbook and rollback plan."
    - Expected output: CI/CD pipeline, deployment configuration, rollback procedures
    - Context: Test suites, infrastructure requirements, deployment strategy

11. **Observability & Monitoring**
    - Use Task tool with subagent_type="observability-monitoring::observability-engineer"
    - Prompt: "Set up observability for: $ARGUMENTS. Implement distributed tracing, custom metrics, error tracking, and alerting. Create dashboards for feature usage, performance metrics, error rates, and business KPIs. Set up SLOs/SLIs with automated alerts."
    - Expected output: Monitoring dashboards, alerts, SLO definitions, observability infrastructure
    - Context: Feature implementation, success metrics, operational requirements

12. **Documentation & Knowledge Transfer**
    - Use Task tool with subagent_type="documentation-generation::docs-architect"
    - Prompt: "Generate comprehensive documentation for: $ARGUMENTS. Create API documentation, user guides, deployment guides, troubleshooting runbooks. Include architecture diagrams, data flow diagrams, and integration guides. Generate automated changelog from commits."
    - Expected output: API docs, user guides, runbooks, architecture documentation
    - Context: All previous phases' outputs

## Execution Parameters