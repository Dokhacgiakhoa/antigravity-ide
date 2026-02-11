# 2. The Partition Key is King

Data is distributed across physical nodes based on the **Partition Key (PK)**.
-   **Goal:** Even distribution of data and traffic.
-   **Anti-Pattern:** Using a low-cardinality PK (e.g., `status="active"` or `gender="m"`) creates **Hot Partitions**, limiting throughput to a single node's capacity.
-   **Best Practice:** Use high-cardinality keys (User IDs, Device IDs, Composite Keys).