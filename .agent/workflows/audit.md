---
description: Kiểm định chất lượng toàn diện (Security, SEO, Code)
---

# /audit - Comprehensive Quality Check

$ARGUMENTS

---

## Task
This command runs a full audit of the project to ensure enterprise quality.

### Steps:
1.  **Security Scan**: Check for vulnerabilities (`npm audit`, `pip check`).
2.  **Lint Check**: Run `eslint` or `pylint`.
3.  **Type Check**: Run `tsc` (TypeScript) or `mypy` (Python).
4.  **SEO Audit**: Check key pages for Meta tags (if web project).
5.  **Report**: Generate `AUDIT_REPORT.md` with findings and fix suggestions.

---

## Usage
```
/audit          # Run all checks
/audit security # Only security
/audit seo      # Only SEO
```
