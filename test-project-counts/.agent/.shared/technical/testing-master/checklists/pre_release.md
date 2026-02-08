# ✅ Pre-Release Checklist (Go/No-Go)

> check_type: manual_audit
> priority: high

## 1. Functionality
- [ ] **Critical Paths**: Are Login, Signup, and Payment flows working?
- [ ] **Smoke Test**: Does the app crash on startup?
- [ ] **Console Errors**: Is the console free of critical red errors?

## 2. Performance
- [ ] **Build Check**: Does `npm run build` pass without error?
- [ ] **Assets**: Are images and fonts loading correctly?

## 3. Operations
- [ ] **Env Vars**: Are Production `.env` variables set?
- [ ] **Database**: Are migrations applied?
