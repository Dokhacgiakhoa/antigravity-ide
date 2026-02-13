# Issue: Application Uses UUIDs Instead of Sequential IDs

**Cause**: Randomized identifiers reduce enumeration risk
**Solution**:
```
# UUID discovery techniques:
1. Check response bodies for leaked UUIDs
2. Search JavaScript files for hardcoded UUIDs
3. Check API responses that list multiple objects
4. Look for UUID patterns in error messages
5. Try UUID v1 (time-based) prediction if applicable
```