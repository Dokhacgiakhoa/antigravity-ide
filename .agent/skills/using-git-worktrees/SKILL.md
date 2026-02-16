---
version: 4.1.0-fractal
name: using-git-worktrees
description: Use when starting feature work that needs isolation from current workspace or before executing implementation plans - creates isolated git worktrees with smart directory selection and safety verification
---

# Using Git Worktrees

## Overview

Git worktrees create isolated workspaces sharing the same repository, allowing work on multiple branches simultaneously without switching.

**Core principle:** Systematic directory selection + safety verification = reliable isolation.

**Announce at start:** "I'm using the using-git-worktrees skill to set up an isolated workspace."

## Directory Selection Process

Follow this priority order:

## 🧠 Knowledge Modules (Fractal Skills)

### 1. [1. Check Existing Directories](./sub-skills/1-check-existing-directories.md)
### 2. [2. Check CLAUDE.md](./sub-skills/2-check-claudemd.md)
### 3. [3. Ask User](./sub-skills/3-ask-user.md)
### 4. [For Project-Local Directories (.worktrees or worktrees)](./sub-skills/for-project-local-directories-worktrees-or-worktrees.md)
### 5. [For Global Directory (~/.config/superpowers/worktrees)](./sub-skills/for-global-directory-configsuperpowersworktrees.md)
### 6. [1. Detect Project Name](./sub-skills/1-detect-project-name.md)
### 7. [2. Create Worktree](./sub-skills/2-create-worktree.md)
### 8. [3. Run Project Setup](./sub-skills/3-run-project-setup.md)
### 9. [4. Verify Clean Baseline](./sub-skills/4-verify-clean-baseline.md)
### 10. [5. Report Location](./sub-skills/5-report-location.md)
### 11. [Skipping ignore verification](./sub-skills/skipping-ignore-verification.md)
### 12. [Assuming directory location](./sub-skills/assuming-directory-location.md)
### 13. [Proceeding with failing tests](./sub-skills/proceeding-with-failing-tests.md)
### 14. [Hardcoding setup commands](./sub-skills/hardcoding-setup-commands.md)
