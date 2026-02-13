---
description: Task quá chua? Gọi cả hội đồng chuyên gia vào làm theo quy chuẩn Senior.
---

# /orchestrate - Multi-Agent Command System

$ARGUMENTS

---

## 🔴 THE CONSTITUTION OF ORCHESTRATION
1. **Min 3 Agents**: Single-agent delegation is NOT orchestration.
2. **Context Passing**: Every subagent MUST receive the original intent + previous agent's results.
3. **Phase Separation**: Planning MUST happen before Parallel Execution.

---

## 🟢 PHASE 1: Strategic Planning (Sequential)
**Agent**: `project-planner`
- **Task**: Create `PLAN.md`.
- **Gate**: Stop and ask for User Approval. **DO NOT PROCEED** without a "YES".

## 🔵 PHASE 2: Parallel Execution
**Agent**: `orchestrator`
- **Execution Matrix**:
  - **Group A (Foundation)**: `database-architect`, `security-auditor`.
  - **Group B (Core)**: `backend-specialist`, `frontend-specialist`.
  - **Group C (Optimization)**: `performance-optimizer`, `seo-specialist`.

## 🔴 PHASE 3: Systemic Review
**Agent**: `quality-inspector`
- **Task**: Verify the convergence of all agents.
- **Automation**: Run `security_scan.sh` and `lint_check.sh`.
- **Handoff**: Create a unified `walkthrough.md`.

---

## Reporting Format:
- **Orchestration Report**:
  - Summary of Task.
  - Agents invoked + specific contributions.
  - Verification results.
  - Deliverable links.

---

## Critical Failure Modes (REJECT IF):
- `agent_count < 3`.
- No `walkthrough.md` created at the end.
- Agents working on the same file without a split-state strategy.
