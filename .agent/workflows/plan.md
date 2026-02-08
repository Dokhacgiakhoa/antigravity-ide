---
description: Chưa biết bắt đầu từ đâu? Lập kế hoạch theo chuẩn Senior Personnel.
---

# /plan - Strategic Planning System

$ARGUMENTS

---

## 🟢 PHASE 1: Discovery & Terrain Analysis (Gatekeeper)
**Agent**: `explorer-agent`
**Mission**: Understand the current state before proposing changes.
- **Action**: Perform a recursive scan of the workspace.
- **Action**: Identify all relevant DNA (`GEMINI.md`) and Rules (`rules/`).
- **Critical Gate**: If the request is ambiguous, trigger the **Socratic Gate** and ask 3-5 clarifying questions.

## 🟡 PHASE 2: Strategic Implementation Plan
**Agent**: `project-planner`
**Mission**: Create the blueprint for success.
- **Output**: `PLAN-{task-slug}.md` in the project root or relevant docs folder.
- **Requirement**: Use GitHub-style alerts (IMPORTANT/WARNING) for risks.
- **Protocol**: 
  1. Define Clear Goals.
  2. Map Dependency Chains.
  3. Establish Phase-by-Phase Breakdown.
  4. Create a specific Verification Plan (Automated + Manual).

## 🔵 PHASE 3: Surgical Task Distribution
**Agent**: `orchestrator`
**Mission**: Map the plan to specialized specialists.
- **Action**: Update `task.md` with unique IDs for every step.
- **Action**: Assign the "Heavy Lifters" (Backend, Frontend, etc.).

## 🔴 PHASE 4: Plan Validation & Sign-off
**Agent**: `quality-inspector`
**Mission**: Ensure the plan is "Operational-Ready."
- **Verification**: Check if the plan matches `DNA_REF` compliance.
- **Reporting**: Report the exact file path of the created Plan to the User.

---

## Output Format
```markdown
[OK] Plan Created: {path_to_plan.md}

### Next Steps:
1. Review the Plan.
2. Manually adjust if needed.
3. Run `/create` or `/orchestrate` to begin the surgical execution.
```

---

## Key Principles:
- **No Code**: This workflow is strictly for strategy.
- **Naming Protocol**: `PLAN-kebab-case-slug.md`.
- **User-Centric**: Respect the user's OS and workspace constraints.
