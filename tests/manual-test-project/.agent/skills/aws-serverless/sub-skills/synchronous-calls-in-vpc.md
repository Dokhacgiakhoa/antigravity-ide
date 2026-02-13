# ❌ Synchronous Calls in VPC

**Why bad**: VPC-attached Lambdas have ENI setup overhead.
Blocking DNS lookups or connections worsen cold starts.

## ⚠️ Sharp Edges

| Issue | Severity | Solution |
|-------|----------|----------|
| Issue | high | ## Measure your INIT phase |
| Issue | high | ## Set appropriate timeout |
| Issue | high | ## Increase memory allocation |
| Issue | medium | ## Verify VPC configuration |
| Issue | medium | ## Tell Lambda not to wait for event loop |
| Issue | medium | ## For large file uploads |
| Issue | high | ## Use different buckets/prefixes |