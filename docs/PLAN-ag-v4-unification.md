# 🗺️ PLAN: Antigravity v4.0 - Unified & Scale-Adaptive Architecture

> **Objective**: Scientifically link all .agent components (DNA, Rules, Agents, Skills, Workflows) into a cohesive, scale-aware system.

---

## 🏛️ Phase 1: Core Constitution (The Brain)
- **Target**: `.agent/rules/GEMINI.md`
- **Action**: Implement "Scale-Aware Execution Modes".
  - `PERSONA_MODE`: Hybrid/Flexible for Personal.
  - `SQUAD_MODE`: Collaborative/Balanced for Team.
  - `FACTORY_MODE`: Standardized/Strict for Enterprise.
- **Linkage**: Define the "Mapping Matrix" between Domains and Specialist Agents.

## 🧬 Phase 2: DNA Standardization (The Roots)
- **Target**: `.agent/.shared/`
- **Action**: Organize shared standards into "Essential" vs "Enterprise" tiers.
- **New Files**: Create templates for API, UI, and Strategic Search.

## ⚡ Phase 3: Workflow & Skill Metadata (The Nervous System)
- **Target**: `.agent/workflows/*.md`, `.agent/skills/**/*.md`
- **Action**: Add YAML Metadata Headers to every file.
- **Fields**:
  ```yaml
  domain: [Category]
  dna_ref: [Link to .shared]
  rule_ref: [Link to .agent/rules]
  scale_impact: [Flexible | Balanced | Strict]
  ```

## 🎭 Phase 4: Specialist Agent Realignment (The Personnel)
- **Target**: `.agent/agents/*.md`
- **Action**:
  - Update `orchestrator.md` to handle scale-based delegation.
  - Remove redundant instructions from specialists.
  - Force specialists to rely on `dna_ref` and `rule_ref` defined in their headers.

## ✅ Phase 5: Verification & Launch
- **Action**: Run test scenarios for each scale (Personal, Team, Enterprise) to ensure correct linkage and enforcement.

---
*Plan approved by User. Implementation starting now.*
