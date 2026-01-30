description: Bảo mật chuyên sâu & Hardening
---

# /security - Security Hardening

$ARGUMENTS

---

## Task
Focus specifically on securing the application.

### Steps:
1.  **Dependency Analysis**: Scan `package.json` for weak deps.
2.  **Secret Detection**: Scan code for hardcoded API keys.
3.  **Headers Check**: Verify Helmet/CORS configuration.
4.  **Auth Review**: Check JWT/Session implementation logic.

---

## Usage
```
/security scan  # Find issues
/security fix   # Auto-patch known vulnerabilities
```
