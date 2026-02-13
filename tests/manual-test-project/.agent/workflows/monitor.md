---
description: Server và Pipeline có ổn không? Cài đặt giám sát ngay.
---

# /monitor - Full-Stack Observability & Health

$ARGUMENTS

---

## 🟢 PHASE 1: Topology Discovery
**Agent**: `devops-engineer` & `explorer-agent`
**Mission**: Map the "Heartbeat" locations.
- **Action**: Identify critical services, databases, and CI/CD pipelines.
- **Action**: Locate existing logging and metrics configuration.

## 🟡 PHASE 2: Sourcing & Alerting Logic
**Agent**: `incident-responder` or `devops-engineer`
**Mission**: Define "Healthy."
- **Action**: Set thresholds for Error Rates, Latency (p99), and Resource Saturation.
- **Action**: Configure Alerting routes (Slack, Email, PagerTree).

## 🔵 PHASE 3: Surgical Instrumentation
**Agent**: `devops-engineer`
**Mission**: Install the "Nervous System."
- **Action**: Setup OpenTelemetry, Prometheus, or Grafana Dashboards.
- **Action**: Implement log rotation and sanitization filters.

## 🔴 PHASE 4: Reliability Audit
**Agent**: `quality-inspector`
**Mission**: Verify the "Watchman."
- **Verification**: Trigger a mock failure to test alert delivery.
- **Reporting**: Report the Dashboard URL or "Health Status" to the User.

---

## Observability Principles:
- **Zero Blindspots**: Monitor the "Critical Path" end-to-end.
- **No Noise**: Alerts must be actionable; suppress low-signal chatter.
- **Evidence-Based**: Operational decisions must be based on metrics, not intuition.

---

## Examples:
- `/monitor setup uptime tracking`
- `/monitor dashboard for backend latency`
- `/monitor check pipeline reliability`
