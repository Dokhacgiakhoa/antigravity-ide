---
name: postgres-mcp
description: Official PostgreSQL Model Context Protocol Server for database interaction.
category: database
version: 4.0.5
layer: master-skill
---

# PostgreSQL MCP Skill

## 🎯 Goal
Enable the AI Agent to inspect schemas and execute queries on PostgreSQL databases using the official Model Context Protocol standard.

## 🛠️ Tools

### `query`
Execute a unified SQL query.
- **sql**: The SQL query to execute (string)

### `get_schema`
Inspect the database schema.
- **table_name**: Optional table name to filter schema inspection (string)

### `analyze_query_performance`
Run `EXPLAIN ANALYZE` on a query to check performance.
- **sql**: The SQL query to analyze (string)

## 🚀 Usage Rules
1.  **Read-Only Preference**: Prefer `SELECT` queries unless explicitly instructed to modify data.
2.  **Transaction Safety**: For multiple write operations, ensure valid transaction logic (though often handled by the tool).
3.  **Schema Awareness**: Always run `get_schema` before constructing complex queries to ensure column names are correct.
4.  **Security**: Do not execute destructive queries (`DROP`, `TRUNCATE`) without explicit user plan approval.
