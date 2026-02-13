# Security Checklist (Not Code)

- [ ] **Input validation**: All inputs validated
- [ ] **Parameterized queries**: No string concatenation for SQL
- [ ] **Password hashing**: bcrypt or argon2
- [ ] **JWT verification**: Always verify signature and expiry
- [ ] **Rate limiting**: Protect from abuse
- [ ] **Security headers**: Helmet.js or equivalent
- [ ] **HTTPS**: Everywhere in production
- [ ] **CORS**: Properly configured
- [ ] **Secrets**: Environment variables only
- [ ] **Dependencies**: Regularly audited