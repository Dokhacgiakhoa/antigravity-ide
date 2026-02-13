# Example 1: HTTP Credential Analysis

**Scenario**: Investigate potential plaintext credential transmission

```
1. Filter: http.request.method == "POST"
2. Look for login forms
3. Follow HTTP Stream
4. Search for username/password parameters
```

**Finding**: Credentials transmitted in cleartext form data.