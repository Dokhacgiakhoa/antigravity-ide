---
version: 4.1.0-fractal
name: multi-agent-brainstorming
description: >
  Use this skill when a design or idea requires higher confidence,
  risk reduction, or formal review. This skill orchestrates a
  structured, sequential multi-agent design review where each agent
  has a strict, non-overlapping role. It prevents blind spots,
  false confidence, and premature convergence.
---

# Multi-Agent Brainstorming (Structured Design Review)

## Purpose

Transform a single-agent design into a **robust, review-validated design**
by simulating a formal peer-review process using multiple constrained agents.

This skill exists to:
- surface hidden assumptions
- identify failure modes early
- validate non-functional constraints
- stress-test designs before implementation
- prevent idea swarm chaos

This is **not parallel brainstorming**.
It is **sequential design review with enforced roles**.

---

## Operating Model

- One agent designs.
- Other agents review.
- No agent may exceed its mandate.
- Creativity is centralized; critique is distributed.
- Decisions are explicit and logged.

The process is **gated** and **terminates by design**.

---

## Agent Roles (Non-Negotiable)

Each agent operates under a **hard scope limit**.

## 🧠 Knowledge Modules (Fractal Skills)

### 1. [1️⃣ Primary Designer (Lead Agent)](./sub-skills/1-primary-designer-lead-agent.md)
### 2. [2️⃣ Skeptic / Challenger Agent](./sub-skills/2-skeptic-challenger-agent.md)
### 3. [3️⃣ Constraint Guardian Agent](./sub-skills/3-constraint-guardian-agent.md)
### 4. [4️⃣ User Advocate Agent](./sub-skills/4-user-advocate-agent.md)
### 5. [5️⃣ Integrator / Arbiter Agent](./sub-skills/5-integrator-arbiter-agent.md)
### 6. [Phase 1 — Single-Agent Design](./sub-skills/phase-1-single-agent-design.md)
### 7. [Phase 2 — Structured Review Loop](./sub-skills/phase-2-structured-review-loop.md)
### 8. [Phase 3 — Integration & Arbitration](./sub-skills/phase-3-integration-arbitration.md)
