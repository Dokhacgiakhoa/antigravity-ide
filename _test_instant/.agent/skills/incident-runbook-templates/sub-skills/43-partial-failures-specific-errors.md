# 4.3 Partial Failures (Specific Errors)

```bash
# Step 1: Identify error pattern
kubectl logs -n payments -l app=payment-service --tail=500 | \
  grep -i error | sort | uniq -c | sort -rn | head -20

# Step 2: Check error tracking
# Go to Sentry: https://sentry.io/payments

# Step 3: If specific endpoint, enable feature flag to disable
curl -X POST https://api.company.com/internal/feature-flags \
  -d '{"flag": "DISABLE_PROBLEMATIC_FEATURE", "enabled": true}'

# Step 4: If data issue, check recent data changes
psql -h $DB_HOST -c "
  SELECT * FROM audit_log
  WHERE table_name = 'payment_methods'
  AND created_at > now() - interval '1 hour';"
```