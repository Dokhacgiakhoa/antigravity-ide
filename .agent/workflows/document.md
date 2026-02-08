---
description: Lười viết docs? Để AI tự viết cho chuyên nghiệp và đầy đủ.
---

# /document - Knowledge & Documentation System

$ARGUMENTS

---

## 🟢 PHASE 1: Codebase Extraction
**Agent**: `explorer-agent` & `documentation-writer`
**Mission**: Understand what needs explaining.
- **Action**: Extract Docstrings, Type Definitions, and API routes.
- **Action**: Identify "Knowledge Gaps" in current documentation.

## 🟡 PHASE 2: Logic & Structural Drafting
**Agent**: `documentation-writer`
**Mission**: Create the narrative.
- **Protocol**: 
  - Why does this code exist? (Business Logic).
  - How do I use it? (Quick Start/Examples).
  - What are the risks? (Caveats/Notes).
- **Format**: Use GitHub Flavored Markdown (GFM) with appropriate Alerts.

## 🔵 PHASE 3: Surgical Update
**Agent**: `documentation-writer`
**Mission**: Apply the knowledge.
- **Action**: Create or Update `README.md`, `API.md`, or code comments.
- **Standard**: Follow [documentation-templates](file:///skills/documentation-templates/SKILL.md).

## 🔴 PHASE 4: Clarity Audit & Sync
**Agent**: `quality-inspector` & `seo-specialist`
**Mission**: Ensure the docs are discoverable and clear.
- **Verification**: Run `textlint` and check for broken links.
- **Artifact**: Create a unified `walkthrough.md` if this was a major doc update.

---

## Documentation Mandates:
- **No Stale Docs**: Documentation must match current code state.
- **AI-Ready**: Use structured headers to help other agents find context.
- **User-Centric**: Write for the persona appropriate for the file (Dev vs User).

---

## Examples:
- `/document this entire directory`
- `/document the authentication flow`
- `/document generate API reference`
