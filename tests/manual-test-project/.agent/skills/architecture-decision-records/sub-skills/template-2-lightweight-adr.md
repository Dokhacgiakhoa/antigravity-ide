# Template 2: Lightweight ADR

```markdown
# ADR-0012: Adopt TypeScript for Frontend Development

**Status**: Accepted
**Date**: 2024-01-15
**Deciders**: @alice, @bob, @charlie

## Context

Our React codebase has grown to 50+ components with increasing bug reports
related to prop type mismatches and undefined errors. PropTypes provide
runtime-only checking.

## Decision

Adopt TypeScript for all new frontend code. Migrate existing code incrementally.

## Consequences

**Good**: Catch type errors at compile time, better IDE support, self-documenting
code.

**Bad**: Learning curve for team, initial slowdown, build complexity increase.

**Mitigations**: TypeScript training sessions, allow gradual adoption with
`allowJs: true`.
```