# Scalability Red Flags

- **N+1 Queries**, **Missing Indexes**, **Synchronous External Calls**
- **In-Memory State**, **Unbounded Collections**, **Missing Pagination**
- **No Connection Pooling**, **No Rate Limiting**

```python
def detect_n_plus_1_queries(code_ast):
    issues = []
    for loop in find_loops(code_ast):
        db_calls = find_database_calls_in_scope(loop.body)
        if len(db_calls) > 0:
            issues.append({
                'severity': 'HIGH',
                'line': loop.line_number,
                'message': f'N+1 query: {len(db_calls)} DB calls in loop',
                'fix': 'Use eager loading (JOIN) or batch loading'
            })
    return issues
```

## Review Comment Generation