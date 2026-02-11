# ❌ CPU-Intensive Work Without Concurrency=1

**Why bad**: CPU is shared across concurrent requests. CPU-bound work
will starve other requests, causing timeouts.