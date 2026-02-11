# 1. Branch Management

- Use Task tool with subagent_type="cicd-automation::deployment-engineer"
- Prompt: "Based on workflow type [--trunk-based or --feature-branch], prepare branch strategy. For feature branch: ensure branch name follows pattern (feature|bugfix|hotfix)/<ticket>-<description>. For trunk-based: prepare for direct main push with feature flag strategy if needed. Current branch: [insert branch], target: [insert target branch]. Verify no conflicts with target branch."
- Expected output: Branch preparation commands and conflict status