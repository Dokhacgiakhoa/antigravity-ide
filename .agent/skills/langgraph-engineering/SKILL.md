---
name: langgraph-engineering
description: Building stateful, resilient AI agents with LangGraph v1.0.
category: orchestration
version: 4.0.5
layer: master-skill
---

# LangGraph Agent Engineering

> **Goal**: Build complex, multi-step AI workflows that are reliable, debuggable, and capable of long-running operations.

## 1. Core Concepts (The Graph)

- **State**: A explicitly defined schema (TypedDict/Pydantic) that tracks the agent's memory snapshot.
- **Nodes**: Functions that perform work (call LLM, run tool, modify state).
- **Edges**: Logic that routes flow between nodes (Conditional edges based on LLM output).

## 2. Architecture Patterns

### A. The ReAct Agent (Standard)
- **Nodes**: `agent` (LLM decides) <-> `tools` (Execute action).
- **Edge**: If tool call -> go to tool; If final answer -> END.

### B. Plan-and-Execute (Advanced)
- **Nodes**: `planner` (Generate list) -> `executor` (Loop through list) -> `re-planner` (Update list).
- **Benefit**: Better for complex tasks requiring long-term reasoning.

### C. Human-in-the-Loop
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
