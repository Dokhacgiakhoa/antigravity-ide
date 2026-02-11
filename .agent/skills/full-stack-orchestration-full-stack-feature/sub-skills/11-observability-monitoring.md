# 11. Observability & Monitoring

- Use Task tool with subagent_type="deployment-engineer"
- Prompt: "Implement observability stack for: $ARGUMENTS. Setup distributed tracing (OpenTelemetry), configure application metrics (Prometheus/DataDog), implement centralized logging (ELK/Splunk), create dashboards for key metrics, and define SLIs/SLOs. Include alerting rules and on-call procedures."
- Expected output: Observability configuration, dashboard definitions, alert rules, runbooks, SLI/SLO definitions
- Context: Infrastructure setup from step 10