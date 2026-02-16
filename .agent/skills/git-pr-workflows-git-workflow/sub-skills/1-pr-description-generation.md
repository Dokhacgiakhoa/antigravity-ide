# 1. PR Description Generation

- Use Task tool with subagent_type="documentation-generation::docs-architect"
- Prompt: "Create comprehensive PR description including: 1) Summary of changes (what and why), 2) Type of change checklist, 3) Testing performed summary from [insert test results], 4) Screenshots/recordings if UI changes, 5) Deployment notes from [insert deployment considerations], 6) Related issues/tickets, 7) Breaking changes section if applicable: [insert breaking changes], 8) Reviewer checklist. Format as GitHub-flavored Markdown."
- Context from previous: All validation results, test outcomes, breaking changes
- Expected output: Complete PR description in Markdown