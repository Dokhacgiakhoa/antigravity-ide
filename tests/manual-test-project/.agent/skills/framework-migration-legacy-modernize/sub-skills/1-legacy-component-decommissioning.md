# 1. Legacy Component Decommissioning

- Use Task tool with subagent_type="legacy-modernizer"
- Prompt: "Plan safe decommissioning of replaced legacy components. Verify no remaining dependencies through traffic analysis (minimum 30 days at 0% traffic). Archive legacy code with documentation of original functionality. Update CI/CD pipelines to remove legacy builds. Clean up unused database tables and remove deprecated API endpoints. Document any retained legacy components with sunset timeline."
- Context from previous: Traffic routing data, modernization status
- Expected output: Decommissioning checklist and timeline