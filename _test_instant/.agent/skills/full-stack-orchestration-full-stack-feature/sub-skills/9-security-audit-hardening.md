# 9. Security Audit & Hardening

- Use Task tool with subagent_type="security-auditor"
- Prompt: "Perform security audit for: $ARGUMENTS. Review API security (authentication, authorization, rate limiting), check for OWASP Top 10 vulnerabilities, audit frontend for XSS/CSRF risks, validate input sanitization, and review secrets management. Provide penetration testing results and remediation steps."
- Expected output: Security audit report, vulnerability assessment, remediation recommendations, security headers configuration
- Context: All implementations from Phase 2

## Phase 4: Deployment & Operations