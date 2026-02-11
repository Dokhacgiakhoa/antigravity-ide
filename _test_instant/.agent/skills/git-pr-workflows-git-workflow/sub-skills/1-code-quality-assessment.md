# 1. Code Quality Assessment

- Use Task tool with subagent_type="code-reviewer"
- Prompt: "Review all uncommitted changes for code quality issues. Check for: 1) Code style violations, 2) Security vulnerabilities, 3) Performance concerns, 4) Missing error handling, 5) Incomplete implementations. Generate a detailed report with severity levels (critical/high/medium/low) and provide specific line-by-line feedback. Output format: JSON with {issues: [], summary: {critical: 0, high: 0, medium: 0, low: 0}, recommendations: []}"
- Expected output: Structured code review report for next phase