---
name: planning-with-files
version: 4.1.0-fractal
description: Implements Manus-style file-based planning for complex tasks. Creates task_plan.md, findings.md, and progress.md. Use when starting complex multi-step tasks, research projects, or any task requiring >5 tool calls.
user-invocable: true
allowed-tools:
  - Read
  - Write
  - Edit
  - Bash
  - Glob
  - Grep
  - WebFetch
  - WebSearch
hooks:
  SessionStart:
    - hooks:
        - type: command
          command: "echo '[planning-with-files] Ready. Auto-activates for complex tasks, or invoke manually with /planning-with-files'"
  PreToolUse:
    - matcher: "Write|Edit|Bash"
      hooks:
        - type: command
          command: "cat task_plan.md 2>/dev/null | head -30 || true"
  PostToolUse:
    - matcher: "Write|Edit"
      hooks:
        - type: command
          command: "echo '[planning-with-files] File updated. If this completes a phase, update task_plan.md status.'"
  Stop:
    - hooks:
        - type: command
          command: "${CLAUDE_PLUGIN_ROOT}/scripts/check-complete.sh"
---

# Planning with Files

Work like Manus: Use persistent markdown files as your "working memory on disk."

## Important: Where Files Go

When using this skill:

- **Templates** are stored in the skill directory at `${CLAUDE_PLUGIN_ROOT}/templates/`
- **Your planning files** (`task_plan.md`, `findings.md`, `progress.md`) should be created in **your project directory** — the folder where you're working

| Location | What Goes There |
|----------|-----------------|
| Skill directory (`${CLAUDE_PLUGIN_ROOT}/`) | Templates, scripts, reference docs |
| Your project directory | `task_plan.md`, `findings.md`, `progress.md` |

This ensures your planning files live alongside your code, not buried in the skill installation folder.

## Quick Start

Before ANY complex task:

1. **Create `task_plan.md`** in your project — Use [templates/task_plan.md](templates/task_plan.md) as reference
2. **Create `findings.md`** in your project — Use [templates/findings.md](templates/findings.md) as reference
3. **Create `progress.md`** in your project — Use [templates/progress.md](templates/progress.md) as reference
4. **Re-read plan before decisions** — Refreshes goals in attention window
5. **Update after each phase** — Mark complete, log errors

> **Note:** All three planning files should be created in your current working directory (your project root), not in the skill's installation folder.

## The Core Pattern

```
Context Window = RAM (volatile, limited)
Filesystem = Disk (persistent, unlimited)

→ Anything important gets written to disk.
```

## File Purposes

| File | Purpose | When to Update |
|------|---------|----------------|
| `task_plan.md` | Phases, progress, decisions | After each phase |
| `findings.md` | Research, discoveries | After ANY discovery |
| `progress.md` | Session log, test results | Throughout session |

## Critical Rules

## 🧠 Knowledge Modules (Fractal Skills)

### 1. [1. Create Plan First](./sub-skills/1-create-plan-first.md)
### 2. [2. The 2-Action Rule](./sub-skills/2-the-2-action-rule.md)
### 3. [3. Read Before Decide](./sub-skills/3-read-before-decide.md)
### 4. [4. Update After Act](./sub-skills/4-update-after-act.md)
### 5. [5. Log ALL Errors](./sub-skills/5-log-all-errors.md)
### 6. [6. Never Repeat Failures](./sub-skills/6-never-repeat-failures.md)
