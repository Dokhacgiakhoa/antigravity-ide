# 3. Clustering / Sort Keys

Within a partition, data is sorted on disk by the **Clustering Key (Cassandra)** or **Sort Key (DynamoDB)**.
-   This allows for efficient **Range Queries** (e.g., `WHERE user_id=X AND date > Y`).
-   It effectively pre-sorts your data for specific retrieval requirements.