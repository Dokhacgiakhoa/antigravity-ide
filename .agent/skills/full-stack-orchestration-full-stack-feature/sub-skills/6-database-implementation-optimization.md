# 6. Database Implementation & Optimization

- Use Task tool with subagent_type="database-design::sql-pro"
- Prompt: "Implement and optimize database layer for: $ARGUMENTS. Create migration scripts, stored procedures (if needed), optimize queries identified by backend implementation, set up proper indexes, and implement data validation constraints. Include database-level security measures and backup strategies."
- Expected output: Migration scripts, optimized queries, stored procedures, index definitions, database security configuration
- Context: Database design from step 1, query patterns from backend implementation

## Phase 3: Integration & Testing