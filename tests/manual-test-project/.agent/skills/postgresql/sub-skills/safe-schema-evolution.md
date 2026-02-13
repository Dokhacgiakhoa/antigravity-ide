# Safe Schema Evolution

- **Transactional DDL**: most DDL operations can run in transactions and be rolled back—`BEGIN; ALTER TABLE...; ROLLBACK;` for safe testing.
- **Concurrent index creation**: `CREATE INDEX CONCURRENTLY` avoids blocking writes but can't run in transactions.
- **Volatile defaults cause rewrites**: adding `NOT NULL` columns with volatile defaults (e.g., `now()`, `gen_random_uuid()`) rewrites entire table. Non-volatile defaults are fast.
- **Drop constraints before columns**: `ALTER TABLE DROP CONSTRAINT` then `DROP COLUMN` to avoid dependency issues.
- **Function signature changes**: `CREATE OR REPLACE` with different arguments creates overloads, not replacements. DROP old version if no overload desired.

## Generated Columns

- `... GENERATED ALWAYS AS (<expr>) STORED` for computed, indexable fields. PG18+ adds `VIRTUAL` columns (computed on read, not stored).

## Extensions

- **`pgcrypto`**: `crypt()` for password hashing.
- **`uuid-ossp`**: alternative UUID functions; prefer `pgcrypto` for new projects.
- **`pg_trgm`**: fuzzy text search with `%` operator, `similarity()` function. Index with GIN for `LIKE '%pattern%'` acceleration.
- **`citext`**: case-insensitive text type. Prefer expression indexes on `LOWER(col)` unless you need case-insensitive constraints.
- **`btree_gin`/`btree_gist`**: enable mixed-type indexes (e.g., GIN index on both JSONB and text columns).
- **`hstore`**: key-value pairs; mostly superseded by JSONB but useful for simple string mappings.
- **`timescaledb`**: essential for time-series—automated partitioning, retention, compression, continuous aggregates.
- **`postgis`**: comprehensive geospatial support beyond basic geometric types—essential for location-based applications.
- **`pgvector`**: vector similarity search for embeddings.
- **`pgaudit`**: audit logging for all database activity.

## JSONB Guidance

- Prefer `JSONB` with **GIN** index.
- Default: `CREATE INDEX ON tbl USING GIN (jsonb_col);` → accelerates:
  - **Containment** `jsonb_col @> '{"k":"v"}'`
  - **Key existence** `jsonb_col ? 'k'`, **any/all keys** `?\|`, `?&`
  - **Path containment** on nested docs
  - **Disjunction** `jsonb_col @> ANY(ARRAY['{"status":"active"}', '{"status":"pending"}'])`
- Heavy `@>` workloads: consider opclass `jsonb_path_ops` for smaller/faster containment-only indexes:
  - `CREATE INDEX ON tbl USING GIN (jsonb_col jsonb_path_ops);`
  - **Trade-off**: loses support for key existence (`?`, `?|`, `?&`) queries—only supports containment (`@>`)
- Equality/range on a specific scalar field: extract and index with B-tree (generated column or expression):
  - `ALTER TABLE tbl ADD COLUMN price INT GENERATED ALWAYS AS ((jsonb_col->>'price')::INT) STORED;`
  - `CREATE INDEX ON tbl (price);`
  - Prefer queries like `WHERE price BETWEEN 100 AND 500` (uses B-tree) over `WHERE (jsonb_col->>'price')::INT BETWEEN 100 AND 500` without index.
- Arrays inside JSONB: use GIN + `@>` for containment (e.g., tags). Consider `jsonb_path_ops` if only doing containment.
- Keep core relations in tables; use JSONB for optional/variable attributes.
- Use constraints to limit allowed JSONB values in a column e.g. `config JSONB NOT NULL CHECK(jsonb_typeof(config) = 'object')`


## Examples