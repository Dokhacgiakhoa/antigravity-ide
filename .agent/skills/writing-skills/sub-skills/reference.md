# Reference

API docs, syntax guides, tool documentation (office docs)

## Directory Structure

```
skills/
  skill-name/
    SKILL.md              # Main reference (required)
    supporting-file.*     # Only if needed
```

**Flat namespace** - all skills in one searchable namespace

**Separate files for:**

1. **Heavy reference** (100+ lines) - API docs, comprehensive syntax
2. **Reusable tools** - Scripts, utilities, templates

**Keep inline:**

- Principles and concepts
- Code patterns (< 50 lines)
- Everything else

## Set Appropriate Degrees of Freedom

Match the level of specificity to the task's fragility and variability:

- **High freedom (text-based instructions)**: Use when multiple approaches are valid or decisions depend on context.
- **Medium freedom (pseudocode or scripts with parameters)**: Use when a preferred pattern exists but some variation is acceptable.
- **Low freedom (specific scripts, no-context instructions)**: Use when operations are fragile, error-prone, or consistency is critical.

## Progressive Disclosure

Manage context efficiently by splitting detailed information into separate files:

1. **Metadata (name + description)**: Always loaded for discovery.
2. **SKILL.md body**: Core workflow and high-level guidance. Keep under 500 lines.
3. **Bundled resources**:
   - `scripts/`: Deterministic code/logic.
   - `references/`: Detailed schemas, API docs, or domain knowledge.
   - `assets/`: Templates, images, or static files.

**Pattern**: Link to advanced content or variant-specific details (e.g., `aws.md` vs `gcp.md`) from the main `SKILL.md`.

## SKILL.md Structure

**Frontmatter (YAML):**

- Only two fields supported: `name` and `description`
- Max 1024 characters total
- `name`: Use letters, numbers, and hyphens only (no parentheses, special chars)
- `description`: Third-person, describes ONLY when to use (NOT what it does)
  - Start with "Use when..." to focus on triggering conditions
  - Include specific symptoms, situations, and contexts
  - **NEVER summarize the skill's process or workflow** (see CSO section for why)
  - Keep under 500 characters if possible

```markdown
---
name: Skill-Name-With-Hyphens
description: Use when [specific triggering conditions and symptoms]
---

# Skill Name

## Overview

What is this? Core principle in 1-2 sentences.

## When to Use

[Small inline flowchart IF decision non-obvious]

Bullet list with SYMPTOMS and use cases
When NOT to use

## Core Pattern (for techniques/patterns)

Before/after code comparison

## Quick Reference

Table or bullets for scanning common operations

## Implementation

Inline code for simple patterns
Link to file for heavy reference or reusable tools

## Common Mistakes

What goes wrong + fixes

## Real-World Impact (optional)

Concrete results
```

## Claude Search Optimization (CSO)

**Critical for discovery:** Future Claude needs to FIND your skill