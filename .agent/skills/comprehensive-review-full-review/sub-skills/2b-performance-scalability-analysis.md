# 2B. Performance & Scalability Analysis

- Use Task tool with subagent_type="application-performance::performance-engineer"
- Prompt: "Conduct performance analysis and scalability assessment for: $ARGUMENTS. Profile code for CPU/memory hotspots, analyze database query performance, review caching strategies, identify N+1 problems, assess connection pooling, and evaluate asynchronous processing patterns. Consider architectural findings from Phase 1: {phase1_architecture_context}. Check for memory leaks, resource contention, and bottlenecks under load."
- Expected output: Performance metrics, bottleneck analysis, optimization recommendations
- Context: Uses architecture insights to identify systemic performance issues

## Phase 3: Testing & Documentation Review

Use Task tool for test and documentation quality assessment: