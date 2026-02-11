# 1. Database Architecture Design

- Use Task tool with subagent_type="database-design::database-architect"
- Prompt: "Design database schema and data models for: $ARGUMENTS. Consider scalability, query patterns, indexing strategy, and data consistency requirements. Include migration strategy if modifying existing schema. Provide both logical and physical data models."
- Expected output: Entity relationship diagrams, table schemas, indexing strategy, migration scripts, data access patterns
- Context: Initial requirements and business domain model