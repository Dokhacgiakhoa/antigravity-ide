# 4. Transformation with dbt

- Staging layer: incremental materialization, deduplication, late-arriving data handling
- Marts layer: dimensional models, aggregations, business logic
- Tests: unique, not_null, relationships, accepted_values, custom data quality tests
- Sources: freshness checks, loaded_at_field tracking
- Incremental strategy: merge or delete+insert