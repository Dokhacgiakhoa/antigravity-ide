# ❌ Blocking the Event Loop

**Why bad**: Discord gateway requires regular heartbeats. Blocking operations
cause missed heartbeats and disconnections.

## ⚠️ Sharp Edges

| Issue | Severity | Solution |
|-------|----------|----------|
| Issue | critical | ## Acknowledge immediately, process later |
| Issue | critical | ## Step 1: Enable in Developer Portal |
| Issue | high | ## Use a separate deploy script (not on startup) |
| Issue | critical | ## Never hardcode tokens |
| Issue | high | ## Generate correct invite URL |
| Issue | medium | ## Development: Use guild commands |
| Issue | medium | ## Never block the event loop |
| Issue | medium | ## Show modal immediately |