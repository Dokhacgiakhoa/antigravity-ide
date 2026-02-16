# 1. Change Analysis and Categorization

- Use Task tool with subagent_type="code-reviewer"
- Prompt: "Analyze all changes and categorize them according to Conventional Commits specification. Identify the primary change type (feat/fix/docs/style/refactor/perf/test/build/ci/chore/revert) and scope. For changes: [insert file list and summary], determine if this should be a single commit or multiple atomic commits. Consider test results: [insert test summary]."
- Context from previous: Test results, code review summary
- Expected output: Commit structure recommendation