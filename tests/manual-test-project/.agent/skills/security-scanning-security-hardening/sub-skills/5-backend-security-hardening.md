# 5. Backend Security Hardening

- Use Task tool with subagent_type="backend-api-security::backend-security-coder"
- Prompt: "Implement comprehensive backend security controls for: $ARGUMENTS. Add input validation with OWASP ESAPI, implement rate limiting and DDoS protection, secure API endpoints with OAuth2/JWT validation, add encryption for data at rest/transit using AES-256/TLS 1.3. Implement secure logging without PII exposure."
- Output: Hardened API endpoints, validation middleware, encryption implementation, secure configuration templates
- Context: Builds upon vulnerability fixes with preventive controls