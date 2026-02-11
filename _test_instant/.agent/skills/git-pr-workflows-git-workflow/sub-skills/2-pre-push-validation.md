# 2. Pre-Push Validation

- Use Task tool with subagent_type="cicd-automation::deployment-engineer"
- Prompt: "Perform final pre-push checks: 1) Verify all CI checks will pass, 2) Confirm no sensitive data in commits, 3) Validate commit signatures if required, 4) Check branch protection rules, 5) Ensure all review comments addressed. Test summary: [insert test results]. Review status: [insert review summary]."
- Context from previous: All previous validation results
- Expected output: Push readiness confirmation or blocking issues

## Phase 5: Pull Request Creation