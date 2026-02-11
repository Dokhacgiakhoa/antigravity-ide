# ❌ No Build Cache

## ⚠️ Sharp Edges

| Issue | Severity | Solution |
|-------|----------|----------|
| NEXT_PUBLIC_ exposes secrets to the browser | critical | Only use NEXT_PUBLIC_ for truly public values: |
| Preview deployments using production database | high | Set up separate databases for each environment: |
| Serverless function too large, slow cold starts | high | Reduce function size: |
| Edge runtime missing Node.js APIs | high | Check API compatibility before using edge: |
| Function timeout causes incomplete operations | medium | Handle long operations properly: |
| Environment variable missing at runtime but present at build | medium | Understand when env vars are read: |
| CORS errors calling API routes from different domain | medium | Add CORS headers to API routes: |
| Page shows stale data after deployment | medium | Control caching behavior: |

## Related Skills

Works well with: `nextjs-app-router`, `supabase-backend`