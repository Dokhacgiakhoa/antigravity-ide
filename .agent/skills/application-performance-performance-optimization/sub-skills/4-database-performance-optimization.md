# 4. Database Performance Optimization

- Use Task tool with subagent_type="database-cloud-optimization::database-optimizer"
- Prompt: "Optimize database performance for: $ARGUMENTS based on profiling data: {context_from_phase_1}. Analyze slow query logs, create missing indexes, optimize execution plans, implement query result caching with Redis/Memcached. Review connection pooling, prepared statements, and batch processing opportunities. Consider read replicas and database sharding if needed."
- Context: Performance bottlenecks from phase 1
- Output: Optimized queries, new indexes, caching strategy, connection pool configuration