# 2. Backend Service Architecture

- Use Task tool with subagent_type="backend-development::backend-architect"
- Prompt: "Design backend service architecture for: $ARGUMENTS. Using the database design from previous step, create service boundaries, define API contracts (OpenAPI/GraphQL), design authentication/authorization strategy, and specify inter-service communication patterns. Include resilience patterns (circuit breakers, retries) and caching strategy."
- Expected output: Service architecture diagram, OpenAPI specifications, authentication flows, caching architecture, message queue design (if applicable)
- Context: Database schema from step 1, non-functional requirements