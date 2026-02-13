# `analyze_query_performance`

Run `EXPLAIN ANALYZE` on a query to check performance.
- **sql**: The SQL query to analyze (string)

## 🚀 Usage Rules
1.  **Read-Only Preference**: Prefer `SELECT` queries unless explicitly instructed to modify data.
2.  **Transaction Safety**: For multiple write operations, ensure valid transaction logic (though often handled by the tool).
3.  **Schema Awareness**: Always run `get_schema` before constructing complex queries to ensure column names are correct.
4.  **Security**: Do not execute destructive queries (`DROP`, `TRUNCATE`) without explicit user plan approval.