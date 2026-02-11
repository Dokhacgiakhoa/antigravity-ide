---
version: 4.1.0-fractal
name: comprehensive-review-full-review
description: "Use when working with comprehensive review full review"
---

## Use this skill when

- Working on comprehensive review full review tasks or workflows
- Needing guidance, best practices, or checklists for comprehensive review full review

## Do not use this skill when

- The task is unrelated to comprehensive review full review
- You need a different domain or tool outside this scope

## Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

Orchestrate comprehensive multi-dimensional code review using specialized review agents

[Extended thinking: This workflow performs an exhaustive code review by orchestrating multiple specialized agents in sequential phases. Each phase builds upon previous findings to create a comprehensive review that covers code quality, security, performance, testing, documentation, and best practices. The workflow integrates modern AI-assisted review tools, static analysis, security scanning, and automated quality metrics. Results are consolidated into actionable feedback with clear prioritization and remediation guidance. The phased approach ensures thorough coverage while maintaining efficiency through parallel agent execution where appropriate.]

## Review Configuration Options

- **--security-focus**: Prioritize security vulnerabilities and OWASP compliance
- **--performance-critical**: Emphasize performance bottlenecks and scalability issues
- **--tdd-review**: Include TDD compliance and test-first verification
- **--ai-assisted**: Enable AI-powered review tools (Copilot, Codium, Bito)
- **--strict-mode**: Fail review on any critical issues found
- **--metrics-report**: Generate detailed quality metrics dashboard
- **--framework [name]**: Apply framework-specific best practices (React, Spring, Django, etc.)

## Phase 1: Code Quality & Architecture Review

Use Task tool to orchestrate quality and architecture agents in parallel:

## 🧠 Knowledge Modules (Fractal Skills)

### 1. [1A. Code Quality Analysis](./sub-skills/1a-code-quality-analysis.md)
### 2. [1B. Architecture & Design Review](./sub-skills/1b-architecture-design-review.md)
### 3. [2A. Security Vulnerability Assessment](./sub-skills/2a-security-vulnerability-assessment.md)
### 4. [2B. Performance & Scalability Analysis](./sub-skills/2b-performance-scalability-analysis.md)
### 5. [3A. Test Coverage & Quality Analysis](./sub-skills/3a-test-coverage-quality-analysis.md)
### 6. [3B. Documentation & API Specification Review](./sub-skills/3b-documentation-api-specification-review.md)
### 7. [4A. Framework & Language Best Practices](./sub-skills/4a-framework-language-best-practices.md)
### 8. [4B. CI/CD & DevOps Practices Review](./sub-skills/4b-cicd-devops-practices-review.md)
### 9. [Critical Issues (P0 - Must Fix Immediately)](./sub-skills/critical-issues-p0-must-fix-immediately.md)
### 10. [High Priority (P1 - Fix Before Next Release)](./sub-skills/high-priority-p1-fix-before-next-release.md)
### 11. [Medium Priority (P2 - Plan for Next Sprint)](./sub-skills/medium-priority-p2-plan-for-next-sprint.md)
### 12. [Low Priority (P3 - Track in Backlog)](./sub-skills/low-priority-p3-track-in-backlog.md)
