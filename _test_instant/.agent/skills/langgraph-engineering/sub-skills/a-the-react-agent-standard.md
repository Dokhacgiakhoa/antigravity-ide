# A. The ReAct Agent (Standard)

- **Nodes**: `agent` (LLM decides) <-> `tools` (Execute action).
- **Edge**: If tool call -> go to tool; If final answer -> END.