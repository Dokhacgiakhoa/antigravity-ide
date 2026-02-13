# 10. Analytics Validation

- Use Task tool with subagent_type="data-engineering::data-engineer"
- Context: Implemented tracking and event schemas
- Prompt: "Validate analytics implementation for: $ARGUMENTS. Test all event tracking in staging, verify data quality and completeness, validate funnel definitions, ensure proper user identification and session tracking. Run end-to-end tests for data pipeline."
- Output: Validation report, data quality metrics, tracking coverage analysis