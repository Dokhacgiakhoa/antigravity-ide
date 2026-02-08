---
description: Muốn tạo tính năng mới hoặc dự án từ A-Z? Sử dụng bộ máy nhân sự chuyên nghiệp.
---

# /create - Full-Cycle Product Creation

$ARGUMENTS

---

## 🟢 PHASE 1: Requirements Discovery
**Agent**: `product-manager` & `explorer-agent`
**Mission**: Define the "What" and "Why."
- **Action**: Analyze User Intent and map to project scale.
- **Verification**: Ensure no conflict with existing system architecture.

## 🟡 PHASE 2: Strategic Architecture (PLAN)
**Agent**: `project-planner`
**Mission**: Define the "How."
- **Workflow Link**: Invokes `/plan` automatically.
- **Artifact**: Create `docs/PLAN-{slug}.md`.
- **Mandatory**: User MUST approve the plan before Phase 3 begins.

## 🔵 PHASE 3: Surgical Execution
**Agent**: `orchestrator`
**Mission**: Direct the "Heavy Lifters."
- **Choreography**: 
  1. `database-architect` (Schema first).
  2. `backend-specialist` (APIs/Logic).
  3. `frontend-specialist` (Design/UI).
  4. `documentation-writer` (Sync docs).

## 🔴 PHASE 4: Professional Audit & Handoff
**Agent**: `quality-inspector` & `test-engineer`
**Mission**: Defend the Quality Gate.
- **Verification**: Run `/test` and `/security` workflows.
- **Artifact**: Create the final `walkthrough.md` with proof of work.

---

## Rules of Engagement:
- **No Placeholders**: Every generated asset must be functional.
- **Security-First**: No hardcoded keys, ever.
- **Wow Factor**: Frontend work must use `ui-ux-pro-max` standards.

---

## Examples:
- `/create e-commerce dashboard with analytics`
- `/create inventory management CLI in Rust`
- `/create portfolio site with video backgrounds`
