# ❌ Output String Matching

## ⚠️ Sharp Edges

| Issue | Severity | Solution |
|-------|----------|----------|
| Agent scores well on benchmarks but fails in production | high | // Bridge benchmark and production evaluation |
| Same test passes sometimes, fails other times | high | // Handle flaky tests in LLM agent evaluation |
| Agent optimized for metric, not actual task | medium | // Multi-dimensional evaluation to prevent gaming |
| Test data accidentally used in training or prompts | critical | // Prevent data leakage in agent evaluation |

## Related Skills

Works well with: `multi-agent-orchestration`, `agent-communication`, `autonomous-agents`