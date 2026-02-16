# Do not use the following data types

- DO NOT use `timestamp` (without time zone); DO use `timestamptz` instead.
- DO NOT use `char(n)` or `varchar(n)`; DO use `text` instead.
- DO NOT use `money` type; DO use `numeric` instead.
- DO NOT use `timetz` type; DO use `timestamptz` instead.
- DO NOT use `timestamptz(0)` or any other precision specification; DO use `timestamptz` instead
- DO NOT use `serial` type; DO use `generated always as identity` instead.


## Table Types

- **Regular**: default; fully durable, logged.
- **TEMPORARY**: session-scoped, auto-dropped, not logged. Faster for scratch work.
- **UNLOGGED**: persistent but not crash-safe. Faster writes; good for caches/staging.

## Row-Level Security

Enable with `ALTER TABLE tbl ENABLE ROW LEVEL SECURITY`. Create policies: `CREATE POLICY user_access ON orders FOR SELECT TO app_users USING (user_id = current_user_id())`. Built-in user-based access control at the row level.

## Constraints

- **PK**: implicit UNIQUE + NOT NULL; creates a B-tree index.
- **FK**: specify `ON DELETE/UPDATE` action (`CASCADE`, `RESTRICT`, `SET NULL`, `SET DEFAULT`). Add explicit index on referencing column—speeds up joins and prevents locking issues on parent deletes/updates. Use `DEFERRABLE INITIALLY DEFERRED` for circular FK dependencies checked at transaction end.
- **UNIQUE**: creates a B-tree index; allows multiple NULLs unless `NULLS NOT DISTINCT` (PG15+). Standard behavior: `(1, NULL)` and `(1, NULL)` are allowed. With `NULLS NOT DISTINCT`: only one `(1, NULL)` allowed. Prefer `NULLS NOT DISTINCT` unless you specifically need duplicate NULLs.
- **CHECK**: row-local constraints; NULL values pass the check (three-valued logic). Example: `CHECK (price > 0)` allows NULL prices. Combine with `NOT NULL` to enforce: `price NUMERIC NOT NULL CHECK (price > 0)`.
- **EXCLUDE**: prevents overlapping values using operators. `EXCLUDE USING gist (room_id WITH =, booking_period WITH &&)` prevents double-booking rooms. Requires appropriate index type (often GiST).

## Indexing

- **B-tree**: default for equality/range queries (`=`, `<`, `>`, `BETWEEN`, `ORDER BY`)
- **Composite**: order matters—index used if equality on leftmost prefix (`WHERE a = ? AND b > ?` uses index on `(a,b)`, but `WHERE b = ?` does not). Put most selective/frequently filtered columns first.
- **Covering**: `CREATE INDEX ON tbl (id) INCLUDE (name, email)` - includes non-key columns for index-only scans without visiting table.
- **Partial**: for hot subsets (`WHERE status = 'active'` → `CREATE INDEX ON tbl (user_id) WHERE status = 'active'`). Any query with `status = 'active'` can use this index.
- **Expression**: for computed search keys (`CREATE INDEX ON tbl (LOWER(email))`). Expression must match exactly in WHERE clause: `WHERE LOWER(email) = 'user@example.com'`.
- **GIN**: JSONB containment/existence, arrays (`@>`, `?`), full-text search (`@@`)
- **GiST**: ranges, geometry, exclusion constraints
- **BRIN**: very large, naturally ordered data (time-series)—minimal storage overhead. Effective when row order on disk correlates with indexed column (insertion order or after `CLUSTER`).

## Partitioning

- Use for very large tables (>100M rows) where queries consistently filter on partition key (often time/date).
- Alternate use: use for tables where data maintenance tasks dictates e.g. data pruned or bulk replaced periodically
- **RANGE**: common for time-series (`PARTITION BY RANGE (created_at)`). Create partitions: `CREATE TABLE logs_2024_01 PARTITION OF logs FOR VALUES FROM ('2024-01-01') TO ('2024-02-01')`. **TimescaleDB** automates time-based or ID-based partitioning with retention policies and compression.
- **LIST**: for discrete values (`PARTITION BY LIST (region)`). Example: `FOR VALUES IN ('us-east', 'us-west')`.
- **HASH**: for even distribution when no natural key (`PARTITION BY HASH (user_id)`). Creates N partitions with modulus.
- **Constraint exclusion**: requires `CHECK` constraints on partitions for query planner to prune. Auto-created for declarative partitioning (PG10+).
- Prefer declarative partitioning or hypertables. Do NOT use table inheritance.
- **Limitations**: no global UNIQUE constraints—include partition key in PK/UNIQUE. FKs from partitioned tables not supported; use triggers.

## Special Considerations