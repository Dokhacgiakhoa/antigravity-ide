# Response Analysis

| Status Code | Interpretation |
|-------------|----------------|
| 200 OK | Potential IDOR - verify data ownership |
| 403 Forbidden | Access control working |
| 404 Not Found | Resource doesn't exist |
| 401 Unauthorized | Authentication required |
| 500 Error | Potential input validation issue |