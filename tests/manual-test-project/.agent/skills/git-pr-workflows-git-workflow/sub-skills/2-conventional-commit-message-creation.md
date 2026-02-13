# 2. Conventional Commit Message Creation

- Use Task tool with subagent_type="llm-application-dev::prompt-engineer"
- Prompt: "Create Conventional Commits format message(s) based on categorization: [insert categorization]. Format: <type>(<scope>): <subject> with blank line then <body> explaining what and why (not how), then <footer> with BREAKING CHANGE: if applicable. Include: 1) Clear subject line (50 chars max), 2) Detailed body explaining rationale, 3) References to issues/tickets, 4) Co-authors if applicable. Consider the impact: [insert breaking changes if any]."
- Context from previous: Change categorization, breaking changes
- Expected output: Properly formatted commit message(s)

## Phase 4: Branch Strategy and Push Preparation