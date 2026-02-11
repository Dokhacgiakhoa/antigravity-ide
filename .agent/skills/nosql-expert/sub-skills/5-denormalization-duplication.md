# 5. Denormalization & Duplication

Don't be afraid to store the same data in multiple tables to serve different query patterns.
-   **Table A:** `users_by_id` (PK: uuid)
-   **Table B:** `users_by_email` (PK: email)

*Trade-off: You must manage data consistency across tables (often using eventual consistency or batch writes).*

## Specific Guidance