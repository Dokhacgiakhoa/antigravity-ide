# ✅ Vulnerability Scan Checklist

> check_type: manual_audit
> priority: critical
> reference: OWASP Top 10

## 1. Injection & Input
- [ ] **SQL Injection**: Are all DB queries using parameterized statements (or ORM)?
- [ ] **XSS**: Is user input sanitized before rendering (especially `dangerouslySetInnerHTML`)?
- [ ] **Validation**: Is Input Validation (Zod/Joi) active on all API endpoints?

## 2. Authentication & Data
- [ ] **Secrets**: Are `API_KEY` and `DB_URL` loaded from `.env` (not hardcoded)?
- [ ] **Hashing**: Are passwords hashed using Bcrypt/Argon2?
- [ ] **HTTPS**: Is SSL/TLS enforced?

## 3. Dependencies
- [ ] **Audit**: Have you run `npm audit` to check for known CVEs?
- [ ] **Lockfile**: Is `package-lock.json` committed?
