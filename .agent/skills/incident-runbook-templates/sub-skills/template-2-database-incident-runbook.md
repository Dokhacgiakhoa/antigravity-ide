# Template 2: Database Incident Runbook

```markdown
# Database Incident Runbook

## Quick Reference
| Issue | Command |
|-------|---------|
| Check connections | `SELECT count(*) FROM pg_stat_activity;` |
| Kill query | `SELECT pg_terminate_backend(pid);` |
| Check replication lag | `SELECT extract(epoch from (now() - pg_last_xact_replay_timestamp()));` |
| Check locks | `SELECT * FROM pg_locks WHERE NOT granted;` |

## Connection Pool Exhaustion
```sql
-- Check current connections
SELECT datname, usename, state, count(*)
FROM pg_stat_activity
GROUP BY datname, usename, state
ORDER BY count(*) DESC;

-- Identify long-running connections
SELECT pid, usename, datname, state, query_start, query
FROM pg_stat_activity
WHERE state != 'idle'
ORDER BY query_start;

-- Terminate idle connections
SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE state = 'idle'
AND query_start < now() - interval '10 minutes';
```

## Replication Lag
```sql
-- Check lag on replica
SELECT
  CASE
    WHEN pg_last_wal_receive_lsn() = pg_last_wal_replay_lsn() THEN 0
    ELSE extract(epoch from now() - pg_last_xact_replay_timestamp())
  END AS lag_seconds;

-- If lag > 60s, consider:
-- 1. Check network between primary/replica
-- 2. Check replica disk I/O
-- 3. Consider failover if unrecoverable
```

## Disk Space Critical
```bash
# Check disk usage
df -h /var/lib/postgresql/data

# Find large tables
psql -c "SELECT relname, pg_size_pretty(pg_total_relation_size(relid))
FROM pg_catalog.pg_statio_user_tables
ORDER BY pg_total_relation_size(relid) DESC
LIMIT 10;"

# VACUUM to reclaim space
psql -c "VACUUM FULL large_table;"

# If emergency, delete old data or expand disk
```
```

## Best Practices