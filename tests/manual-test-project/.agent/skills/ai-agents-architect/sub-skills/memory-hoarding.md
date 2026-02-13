# ❌ Memory Hoarding

## ⚠️ Sharp Edges

| Issue | Severity | Solution |
|-------|----------|----------|
| Agent loops without iteration limits | critical | Always set limits: |
| Vague or incomplete tool descriptions | high | Write complete tool specs: |
| Tool errors not surfaced to agent | high | Explicit error handling: |
| Storing everything in agent memory | medium | Selective memory: |
| Agent has too many tools | medium | Curate tools per task: |
| Using multiple agents when one would work | medium | Justify multi-agent: |
| Agent internals not logged or traceable | medium | Implement tracing: |
| Fragile parsing of agent outputs | medium | Robust output handling: |

## Related Skills

Works well with: `rag-engineer`, `prompt-engineer`, `backend`, `mcp-builder`