# Common Commands

```bash
# Check service health
kubectl get pods -A | grep -v Running

# Recent deployments
kubectl get events --sort-by='.lastTimestamp' | tail -20

# Database connections
psql -c "SELECT count(*) FROM pg_stat_activity;"

# Clear cache (emergency only)
redis-cli FLUSHDB
```