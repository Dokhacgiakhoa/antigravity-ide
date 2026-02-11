# ❌ No User/Session IDs

**Why bad**: Can't debug specific users.
Can't track sessions.
Analytics limited.

**Instead**: Always pass user_id and session_id.
Use consistent identifiers.
Add relevant metadata.

## Limitations

- Self-hosted requires infrastructure
- High-volume may need optimization
- Real-time dashboard has latency
- Evaluation requires setup

## Related Skills

Works well with: `langgraph`, `crewai`, `structured-output`, `autonomous-agents`