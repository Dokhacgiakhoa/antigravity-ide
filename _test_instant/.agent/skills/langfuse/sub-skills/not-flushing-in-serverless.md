# ❌ Not Flushing in Serverless

**Why bad**: Traces are batched.
Serverless may exit before flush.
Data is lost.

**Instead**: Always call langfuse.flush() at end.
Use context managers where available.
Consider sync mode for critical traces.