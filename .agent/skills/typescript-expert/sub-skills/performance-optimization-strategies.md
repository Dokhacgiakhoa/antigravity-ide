# Performance Optimization Strategies

**Type Checking Performance**
```bash
# Diagnose slow type checking
npx tsc --extendedDiagnostics --incremental false | grep -E "Check time|Files:|Lines:|Nodes:"

# Common fixes for "Type instantiation is excessively deep"
# 1. Replace type intersections with interfaces
# 2. Split large union types (>100 members)
# 3. Avoid circular generic constraints
# 4. Use type aliases to break recursion
```

**Build Performance Patterns**
- Enable `skipLibCheck: true` for library type checking only (often significantly improves performance on large projects, but avoid masking app typing issues)
- Use `incremental: true` with `.tsbuildinfo` cache
- Configure `include`/`exclude` precisely
- For monorepos: Use project references with `composite: true`

## Real-World Problem Resolution