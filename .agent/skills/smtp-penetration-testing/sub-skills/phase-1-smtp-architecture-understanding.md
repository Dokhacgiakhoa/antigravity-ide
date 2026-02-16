# Phase 1: SMTP Architecture Understanding

```
Components: MTA (transfer) → MDA (delivery) → MUA (client)

Ports: 25 (SMTP), 465 (SMTPS), 587 (submission), 2525 (alternative)

Workflow: Sender MUA → Sender MTA → DNS/MX → Recipient MTA → MDA → Recipient MUA
```