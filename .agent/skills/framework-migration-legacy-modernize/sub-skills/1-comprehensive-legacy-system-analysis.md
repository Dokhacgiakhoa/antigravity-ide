# 1. Comprehensive Legacy System Analysis

- Use Task tool with subagent_type="legacy-modernizer"
- Prompt: "Analyze the legacy codebase at $ARGUMENTS. Document technical debt inventory including: outdated dependencies, deprecated APIs, security vulnerabilities, performance bottlenecks, and architectural anti-patterns. Generate a modernization readiness report with component complexity scores (1-10), dependency mapping, and database coupling analysis. Identify quick wins vs complex refactoring targets."
- Expected output: Detailed assessment report with risk matrix and modernization priorities