# Apache Cassandra / ScyllaDB

-   **Primary Key Structure:** `((Partition Key), Clustering Columns)`
-   **No Joins, No Aggregates:** Do not try to `JOIN` or `GROUP BY`. Pre-calculate aggregates in a separate counter table.
-   **Avoid `ALLOW FILTERING`:** If you see this in production, your data model is wrong. It implies a full cluster scan.
-   **Writes are Cheap:** Inserts and Updates are just appends to the LSM tree. Don't worry about write volume as much as read efficiency.
-   **Tombstones:** Deletes are expensive markers. Avoid high-velocity delete patterns (like queues) in standard tables.