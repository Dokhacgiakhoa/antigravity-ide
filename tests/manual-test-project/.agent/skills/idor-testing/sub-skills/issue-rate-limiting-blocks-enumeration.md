# Issue: Rate Limiting Blocks Enumeration

**Cause**: Application implements request throttling
**Solution**:
```
# Bypass techniques:
1. Add delays between requests (Burp Intruder throttle)
2. Rotate IP addresses (proxy chains)
3. Target specific high-value IDs instead of full range
4. Use different endpoints for same resources
5. Test during off-peak hours
```