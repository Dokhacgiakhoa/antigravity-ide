# 1. Guardrail Skills

**Purpose:** Enforce critical best practices that prevent errors

**Characteristics:**
- Type: `"guardrail"`
- Enforcement: `"block"`
- Priority: `"critical"` or `"high"`
- Block file edits until skill used
- Prevent common mistakes (column names, critical errors)
- Session-aware (don't repeat nag in same session)

**Examples:**
- `database-verification` - Verify table/column names before Prisma queries
- `frontend-dev-guidelines` - Enforce React/TypeScript patterns

**When to Use:**
- Mistakes that cause runtime errors
- Data integrity concerns
- Critical compatibility issues