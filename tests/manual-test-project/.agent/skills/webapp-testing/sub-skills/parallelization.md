# Parallelization

| Strategy | Use |
|----------|-----|
| Per file | Playwright default |
| Sharding | Large suites |
| Workers | Multiple browsers |

---

## 9. Anti-Patterns

| ❌ Don't | ✅ Do |
|----------|-------|
| Test implementation | Test behavior |
| Hardcode waits | Use auto-wait |
| Skip cleanup | Isolate tests |
| Ignore flaky tests | Fix root cause |

---

> **Remember:** E2E tests are expensive. Use them for critical paths only.