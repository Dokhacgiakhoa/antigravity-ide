/**
 * Templates for Antigravity Agent Structure
 */

const CODING_STYLE_RULE = `# Rule: Coding Style
## Description
Enforce standard coding practices aligned with Antigravity v4.0.5 standards.

## Scope
**/*.{js,ts,jsx,tsx,py}

## Guidelines
1. **Clean Code**: Keep functions small and focused.
2. **No Console**: Remove console.log in production.
3. **Comments**: Explain WHY, not WHAT.
4. **v4.0.5 Compliance**: Use machine-readable headers for all core rules.
`;

const GIT_SMART_COMMIT_SKILL = `---
name: git-smart-commit
description: Generates a semantic commit message based on file changes and commits automatically.
category: automation
version: 4.0.5
layer: specialized-skill
---
# Goal
To automate the git commit process ensuring standard conventional commits.

# Inputs
- \`files\`: List of files to stage (optional, default: all).
- \`type\`: Commit type (feat, fix, chore).

# Execution
1. Run \`git status\` to check changes.
2. Analyze diffs.
3. Commit with generated message.
`;

const PRODUCTION_RELEASE_WORKFLOW = `# Workflow: Production Release
# Version: 4.0.5

## Step 1: Pre-flight Check
Run \`npm run lint\` and \`npm run test\`. If fails, STOP.

## Step 2: Version Bump
Run \`npm version patch\`.

## Step 3: Build & Deploy
Execute \`npm run build\` then trigger the deployment script.
`;

const PROJECT_CONTEXT_MEMORY = `# Project Context
# Layer: project-memory

## Overview
This file maintains the long-term memory of the project.

## Key Decisions
- [date]: Initialized Antigravity Agent structure (Standard v4.0.5).
`;

module.exports = {
  CODING_STYLE_RULE,
  GIT_SMART_COMMIT_SKILL,
  PRODUCTION_RELEASE_WORKFLOW,
  PROJECT_CONTEXT_MEMORY
};
