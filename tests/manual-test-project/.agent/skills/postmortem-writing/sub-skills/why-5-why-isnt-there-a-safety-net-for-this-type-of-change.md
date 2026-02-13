# Why #5: Why isn't there a safety net for this type of change?

**Answer**: We lack automated tests that verify connection pool behavior and lack documentation about our connection patterns.

**Evidence**: Test suite has no tests for connection handling; wiki has no article on database connections.

## Root Causes Identified

1. **Primary**: Missing automated tests for infrastructure behavior
2. **Secondary**: Insufficient documentation of architectural patterns
3. **Tertiary**: Code review checklist doesn't include infrastructure considerations

## Systemic Improvements

| Root Cause | Improvement | Type |
|------------|-------------|------|
| Missing tests | Add infrastructure behavior tests | Prevention |
| Missing docs | Document connection patterns | Prevention |
| Review gaps | Update review checklist | Detection |
| No canary | Implement canary deployments | Mitigation |
```