---
description: Bí ý tưởng? Dùng cái này để AI gợi ý theo chuẩn Senior.
---

# /brainstorm - Structured Strategic Exploration

$ARGUMENTS

---

## 🟢 PHASE 1: Domain Discovery
**Agent**: `explorer-agent`
**Mission**: Understand the boundaries of the problem.
- **Action**: Scan relevant files for context.
- **DNA Link**: Map the request to the correct scale in `GEMINI.md`.

## 🟡 PHASE 2: Multi-Option Generation
**Agent**: `project-planner` or specific specialist
**Mission**: Divergent thinking.
- **Action**: Provide at least 3 distinct approaches:
  - **Option A**: Conservative/Safe.
  - **Option B**: Modern/Aggressive.
  - **Option C**: Creative/Out-of-the-box.
- **Artifact**: Create a comparison table with Pros, Cons, and Effort.

## 🔵 PHASE 3: Competitive Analysis & Recommendation
**Agent**: `product-manager`
**Mission**: Convergent thinking.
- **Action**: Analyze tradeoffs against the original goal.
- **Action**: State a professional recommendation with clear rationale.

## 🔴 PHASE 4: Strategic Handoff
**Agent**: `project-planner`
**Mission**: Prepare for action.
- **Action**: Ask the user which path to take.
- **Transition**: Ready to trigger `/plan` based on selection.

---

## Brainstorming Rules:
- **No Code**: Focus on architecture and logic.
- **Honest Tradeoffs**: Don't hide complexity.
- **User-Centric**: Tailor solutions to the user's specific context.

---

## Examples:
- `/brainstorm state management strategy`
- `/brainstorm database schema for social media`
- `/brainstorm UI design system for mobile`
