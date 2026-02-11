# ❌ No Output Validation

**Why bad**: AI hallucinates.
Inconsistent formatting.
Bad user experience.
Trust issues.

**Instead**: Validate all outputs.
Parse structured responses.
Have fallback handling.
Post-process for consistency.

## ⚠️ Sharp Edges

| Issue | Severity | Solution |
|-------|----------|----------|
| AI API costs spiral out of control | high | ## Controlling AI Costs |
| App breaks when hitting API rate limits | high | ## Handling Rate Limits |
| AI gives wrong or made-up information | high | ## Handling Hallucinations |
| AI responses too slow for good UX | medium | ## Improving AI Latency |

## Related Skills

Works well with: `llm-architect`, `micro-saas-launcher`, `frontend`, `backend`