# ❌ Long-Running Background Tasks

**Why bad**: Cloud Run throttles CPU to near-zero when not handling
requests. Background tasks will be extremely slow or stall.

## ⚠️ Sharp Edges

| Issue | Severity | Solution |
|-------|----------|----------|
| Issue | high | ## Calculate memory including /tmp usage |
| Issue | high | ## Set appropriate concurrency |
| Issue | high | ## Enable CPU always allocated |
| Issue | medium | ## Configure connection pool with keep-alive |
| Issue | high | ## Enable startup CPU boost |
| Issue | medium | ## Explicitly set execution environment |
| Issue | medium | ## Set consistent timeouts |