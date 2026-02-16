# 10. Prevention

- Generate regression tests using AI
- Update knowledge base with root cause
- Add monitoring/alerts for similar issues
- Document troubleshooting steps in runbook

## Example: Minimal Debug Session

```typescript
// Issue: "Checkout timeout errors (intermittent)"

// 1. Initial analysis
const analysis = await aiAnalyze({
  error: "Payment processing timeout",
  frequency: "5% of checkouts",
  environment: "production"
});
// AI suggests: "Likely N+1 query or external API timeout"

// 2. Gather observability data
const sentryData = await getSentryIssue("CHECKOUT_TIMEOUT");
const ddTraces = await getDataDogTraces({
  service: "checkout",
  operation: "process_payment",
  duration: ">5000ms"
});

// 3. Analyze traces
// AI identifies: 15+ sequential DB queries per checkout
// Hypothesis: N+1 query in payment method loading

// 4. Add instrumentation
span.setAttribute('debug.queryCount', queryCount);
span.setAttribute('debug.paymentMethodId', methodId);

// 5. Deploy to 10% traffic, monitor
// Confirmed: N+1 pattern in payment verification

// 6. AI generates fix
// Replace sequential queries with batch query

// 7. Validate
// - Tests pass
// - Latency reduced 70%
// - Query count: 15 → 1
```

## Output Format

Provide structured report:
1. **Issue Summary**: Error, frequency, impact
2. **Root Cause**: Detailed diagnosis with evidence
3. **Fix Proposal**: Code changes, risk, impact
4. **Validation Plan**: Steps to verify fix
5. **Prevention**: Tests, monitoring, documentation

Focus on actionable insights. Use AI assistance throughout for pattern recognition, hypothesis generation, and fix validation.

---

Issue to debug: $ARGUMENTS