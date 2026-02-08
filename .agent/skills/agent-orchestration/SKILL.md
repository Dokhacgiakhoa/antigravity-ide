---
name: agent-orchestration
description: Multi-agent orchestration and state management.
category: orchestration
version: 4.0.5
layer: master-skill
---

# 🤖 Multi-Agent Orchestration & State Management
> **Source**: Microsoft AutoGen / LangGraph / Semantic Kernel

This skill provides the Agent with the logic to manage complex, stateful workflows involving multiple AI "specialists" or autonomous task loops.

## 🕸️ 1. Stateful Graph Logic (LangGraph Inspired)
- **Node-Based Thinking**: View complex tasks as a "Graph" of nodes (Steps).
- **Conditional Edges**: Logic for "If step A fails, go to step B; if success, go to step C".
- **Short-term vs. Long-term Memory**: Maintain state across multiple turns without losing context of the "Global Goal".

## 👥 2. Multi-Agent Delegation (AutoGen Inspired)
Assign roles dynamically when the task is large:
- **Planner**: Outlines the sequence.
- **Coder**: Implements the logic.
- **Reviewer**: Audits for bugs/security.
- **Executioner**: Validates the final output.

## 🏗️ 3. Semantic Orchestration
- **Plugin/Tool Selection**: Dynamically choose the best tool (Search, File Read, Command Run) based on "Intent Detection".
- **Ambiguity Detection**: If an instruction has multiple interpretations, the Agent must PAUSE and clarify before a "branching event" in the graph.

## 🔄 4. Task Loops & Self-Correction
- **Reflexion Pattern**: After a step, evaluate: "Did this achieve the subgoal?" If no, retry with a different approach.
- **Recursive Scans**: Constantly scan the workspace for relevant file changes that might affect the current task.

---
*Created by Antigravity Orchestrator - Based on Autonomous Agent Architectures.*
