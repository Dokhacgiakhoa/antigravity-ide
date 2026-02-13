# Issue: Cannot Verify IDOR Impact

**Cause**: Response doesn't clearly indicate data ownership
**Solution**:
```
# Verification methods:
1. Create unique identifiable data in victim account
2. Look for PII markers (name, email) in responses
3. Compare response lengths between users
4. Check for timing differences in responses
5. Use secondary indicators (creation dates, metadata)
```

## Remediation Guidance