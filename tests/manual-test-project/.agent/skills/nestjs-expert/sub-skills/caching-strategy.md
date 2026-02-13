# Caching Strategy

```
Data Characteristics:
├─ User-specific → Redis with user key prefix
├─ Global data → In-memory cache with TTL
├─ Database results → Query result cache
├─ Static assets → CDN with cache headers
└─ Computed values → Memoization decorators
```

## Performance Optimization