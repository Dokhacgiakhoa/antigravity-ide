# C. Human-in-the-Loop

- **Breakpoint**: Insert `interrupt_before=["tool_node"]` to pause execution.
- **Approval**: Human reviews state/tool call -> Approve/Reject/Edit -> Resume graph.

## 3. Persistence & Memory

- **Checkpointers**: Use `MemorySaver` (for dev) or `PostgresSaver` (prod) to persist thread state.
- **Thread ID**: Always pass `thread_id` to `graph.invoke` to maintain conversation history.

## 4. Best Practices

- **Typed State**: ALWAYS define rigid TypeScript/Python interfaces for State. Do not use random dicts.
- **Small Nodes**: Keep nodes focused. One distinct action per node.
- **Streaming**: Use `.stream()` events to show immediate progress (tokens, node switching) to UI.

## 5. Example Structure (Python)

```python
from langgraph.graph import StateGraph, END
from typing import TypedDict

class AgentState(TypedDict):
    messages: list[str]
    context: dict

def call_model(state):
    # logic...
    return {"messages": [response]}

workflow = StateGraph(AgentState)
workflow.add_node("agent", call_model)
workflow.set_entry_point("agent")
workflow.add_edge("agent", END)
app = workflow.compile()
```

---

**V1.0 Migration Note**:
- `create_react_agent` prebuilt is good for simple starts.
- For custom flows, build `StateGraph` manually.