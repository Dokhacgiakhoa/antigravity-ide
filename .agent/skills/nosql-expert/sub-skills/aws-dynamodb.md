# AWS DynamoDB

-   **GSI (Global Secondary Index):** Use GSIs to create alternative views of your data (e.g., "Search Orders by Date" instead of by User).
    -   *Note:* GSIs are eventually consistent.
-   **LSI (Local Secondary Index):** Sorts data differently *within* the same partition. Must be created at table creation time.
-   **WCU / RCU:** Understand capacity modes. Single-table design helps optimize consumed capacity units.
-   **TTL:** Use Time-To-Live attributes to automatically expire old data (free delete) without creating tombstones.

## Expert Checklist

Before finalizing your NoSQL schema:

-   [ ] **Access Pattern Coverage:** Does every query pattern map to a specific table or index?
-   [ ] **Cardinality Check:** Does the Partition Key have enough unique values to spread traffic evenly?
-   [ ] **Split Partition Risk:** For any single partition (e.g., a single user's orders), will it grow indefinitely? (If > 10GB, you need to "shard" the partition, e.g., `USER#123#2024-01`).
-   [ ] **Consistency Requirement:** Can the application tolerate eventual consistency for this read pattern?

## Common Anti-Patterns

❌ **Scatter-Gather:** Querying *all* partitions to find one item (Scan).
❌ **Hot Keys:** Putting all "Monday" data into one partition.
❌ **Relational Modeling:** Creating `Author` and `Book` tables and trying to join them in code. (Instead, embed Book summaries in Author, or duplicate Author info in Books).