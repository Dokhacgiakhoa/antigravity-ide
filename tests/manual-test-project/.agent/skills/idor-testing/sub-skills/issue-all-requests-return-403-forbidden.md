# Issue: All Requests Return 403 Forbidden

**Cause**: Server-side access control is implemented
**Solution**:
```
# Try alternative attack vectors:
1. HTTP method switching (GET → POST → PUT)
2. Add X-Original-URL or X-Rewrite-URL headers
3. Try parameter pollution: ?id=1001&id=1000
4. URL encoding variations: %31%30%30%30 for "1000"
5. Case variations for string IDs
```