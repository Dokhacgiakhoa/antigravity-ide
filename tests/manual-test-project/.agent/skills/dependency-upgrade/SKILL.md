---
version: 4.1.0-fractal
name: dependency-upgrade
description: Manage major dependency version upgrades with compatibility analysis, staged rollout, and comprehensive testing. Use when upgrading framework versions, updating major dependencies, or managing breaking changes in libraries.
---

# Dependency Upgrade

Master major dependency version upgrades, compatibility analysis, staged upgrade strategies, and comprehensive testing approaches.

## Do not use this skill when

- The task is unrelated to dependency upgrade
- You need a different domain or tool outside this scope

## Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

## Use this skill when

- Upgrading major framework versions
- Updating security-vulnerable dependencies
- Modernizing legacy dependencies
- Resolving dependency conflicts
- Planning incremental upgrade paths
- Testing compatibility matrices
- Automating dependency updates

## Semantic Versioning Review

```
MAJOR.MINOR.PATCH (e.g., 2.3.1)

MAJOR: Breaking changes
MINOR: New features, backward compatible
PATCH: Bug fixes, backward compatible

^2.3.1 = >=2.3.1 <3.0.0 (minor updates)
~2.3.1 = >=2.3.1 <2.4.0 (patch updates)
2.3.1 = exact version
```

## Dependency Analysis

## 🧠 Knowledge Modules (Fractal Skills)

### 1. [Audit Dependencies](./sub-skills/audit-dependencies.md)
### 2. [Analyze Dependency Tree](./sub-skills/analyze-dependency-tree.md)
### 3. [Phase 1: Planning](./sub-skills/phase-1-planning.md)
### 4. [Phase 2: Incremental Updates](./sub-skills/phase-2-incremental-updates.md)
### 5. [Phase 3: Validation](./sub-skills/phase-3-validation.md)
### 6. [Identifying Breaking Changes](./sub-skills/identifying-breaking-changes.md)
### 7. [Codemod for Automated Fixes](./sub-skills/codemod-for-automated-fixes.md)
### 8. [Custom Migration Script](./sub-skills/custom-migration-script.md)
### 9. [Unit Tests](./sub-skills/unit-tests.md)
### 10. [Integration Tests](./sub-skills/integration-tests.md)
### 11. [Visual Regression Tests](./sub-skills/visual-regression-tests.md)
### 12. [E2E Tests](./sub-skills/e2e-tests.md)
### 13. [Renovate Configuration](./sub-skills/renovate-configuration.md)
### 14. [Dependabot Configuration](./sub-skills/dependabot-configuration.md)
### 15. [Lock File Management](./sub-skills/lock-file-management.md)
### 16. [Peer Dependency Resolution](./sub-skills/peer-dependency-resolution.md)
### 17. [Workspace Upgrades](./sub-skills/workspace-upgrades.md)
