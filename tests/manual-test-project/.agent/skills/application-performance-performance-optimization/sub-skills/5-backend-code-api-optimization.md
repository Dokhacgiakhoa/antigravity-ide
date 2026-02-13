# 5. Backend Code & API Optimization

- Use Task tool with subagent_type="backend-development::backend-architect"
- Prompt: "Optimize backend services for: $ARGUMENTS targeting bottlenecks: {context_from_phase_1}. Implement efficient algorithms, add application-level caching, optimize N+1 queries, use async/await patterns effectively. Implement pagination, response compression, GraphQL query optimization, and batch API operations. Add circuit breakers and bulkheads for resilience."
- Context: Database optimizations from step 4, profiling data from phase 1
- Output: Optimized backend code, caching implementation, API improvements, resilience patterns