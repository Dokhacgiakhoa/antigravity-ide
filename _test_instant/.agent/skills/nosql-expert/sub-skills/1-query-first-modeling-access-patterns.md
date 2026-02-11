# 1. Query-First Modeling (Access Patterns)

You typically cannot "add a query later" without migration or creating a new table/index.

**Process:**
1.  **List all Entities** (User, Order, Product).
2.  **List all Access Patterns** ("Get User by Email", "Get Orders by User sorted by Date").
3.  **Design Table(s)** specifically to serve those patterns with a single lookup.