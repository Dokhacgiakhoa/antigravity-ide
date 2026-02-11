# ❌ No Observability

## ⚠️ Sharp Edges

| Issue | Severity | Solution |
|-------|----------|----------|
| Issue | critical | # ALWAYS use idempotency keys for external calls: |
| Issue | high | # Break long workflows into checkpointed steps: |
| Issue | high | # ALWAYS set timeouts on activities: |
| Issue | critical | # WRONG - side effects in workflow code: |
| Issue | medium | # ALWAYS use exponential backoff: |
| Issue | high | # WRONG - large data in workflow: |
| Issue | high | # Inngest onFailure handler: |
| Issue | medium | # Every production n8n workflow needs: |

## Related Skills

Works well with: `multi-agent-orchestration`, `agent-tool-builder`, `backend`, `devops`