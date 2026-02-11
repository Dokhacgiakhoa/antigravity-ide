# Template 3: Incident Handoff (Mid-Incident)

```markdown
# INCIDENT HANDOFF: Payment Service Degradation

**Incident Start**: 2024-01-22 08:15 UTC
**Current Status**: Mitigating
**Severity**: SEV2

---

## Current State
- Error rate: 15% (down from 40%)
- Mitigation in progress: scaling up pods
- ETA to resolution: ~30 min

## What We Know
1. Root cause: Memory pressure on payment-service pods
2. Triggered by: Unusual traffic spike (3x normal)
3. Contributing: Inefficient query in checkout flow

## What We've Done
- Scaled payment-service from 5 → 15 pods
- Enabled rate limiting on checkout endpoint
- Disabled non-critical features

## What Needs to Happen
1. Monitor error rate - should reach <1% in ~15 min
2. If not improving, escalate to @payments-manager
3. Once stable, begin root cause investigation

## Key People
- Incident Commander: @alice (handing off)
- Comms Lead: @charlie
- Technical Lead: @bob (incoming)

## Communication
- Status page: Updated at 08:45
- Customer support: Notified
- Exec team: Aware

## Resources
- Incident channel: #inc-20240122-payment
- Dashboard: [Payment Service](https://grafana/d/payments)
- Runbook: [Payment Degradation](https://wiki/runbooks/payments)

---

**Incoming on-call (@bob) - Please confirm you have:**
- [ ] Joined #inc-20240122-payment
- [ ] Access to dashboards
- [ ] Understand current state
- [ ] Know escalation path
```

## Handoff Sync Meeting