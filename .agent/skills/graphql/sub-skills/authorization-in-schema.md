# ❌ Authorization in Schema

## ⚠️ Sharp Edges

| Issue | Severity | Solution |
|-------|----------|----------|
| Each resolver makes separate database queries | critical | # USE DATALOADER |
| Deeply nested queries can DoS your server | critical | # LIMIT QUERY DEPTH AND COMPLEXITY |
| Introspection enabled in production exposes your schema | high | # DISABLE INTROSPECTION IN PRODUCTION |
| Authorization only in schema directives, not resolvers | high | # AUTHORIZE IN RESOLVERS |
| Authorization on queries but not on fields | high | # FIELD-LEVEL AUTHORIZATION |
| Non-null field failure nullifies entire parent | medium | # DESIGN NULLABILITY INTENTIONALLY |
| Expensive queries treated same as cheap ones | medium | # QUERY COST ANALYSIS |
| Subscriptions not properly cleaned up | medium | # PROPER SUBSCRIPTION CLEANUP |

## Related Skills

Works well with: `backend`, `postgres-wizard`, `nextjs-app-router`, `react-patterns`