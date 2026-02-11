# ❌ No Error Handling in Endpoints

## ⚠️ Sharp Edges

| Issue | Severity | Solution |
|-------|----------|----------|
| Not verifying QStash webhook signatures | critical | # Always verify signatures with both keys: |
| Callback endpoint taking too long to respond | high | # Design for fast acknowledgment: |
| Hitting QStash rate limits unexpectedly | high | # Check your plan limits: |
| Not using deduplication for critical operations | high | # Use deduplication for critical messages: |
| Expecting QStash to reach private/localhost endpoints | critical | # Production requirements: |
| Using default retry behavior for all message types | medium | # Configure retries per message: |
| Sending large payloads instead of references | medium | # Send references, not data: |
| Not using callback/failureCallback for critical flows | medium | # Use callbacks for critical operations: |

## Related Skills

Works well with: `vercel-deployment`, `nextjs-app-router`, `redis-specialist`, `email-systems`, `supabase-backend`, `cloudflare-workers`