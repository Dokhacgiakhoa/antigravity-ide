# ❌ Writing Large Files to /tmp

**Why bad**: /tmp is an in-memory filesystem. Large files consume
your memory allocation and can cause OOM errors.