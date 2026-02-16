# Monitoring & Logging

- [ ] Log security events
- [ ] Monitor for suspicious activity
- [ ] Set up alerts for failed auth attempts
- [ ] Track API usage patterns
- [ ] Don't log sensitive data

## OWASP API Security Top 10

1. **Broken Object Level Authorization** - Always verify user can access resource
2. **Broken Authentication** - Implement strong authentication mechanisms
3. **Broken Object Property Level Authorization** - Validate which properties user can access
4. **Unrestricted Resource Consumption** - Implement rate limiting and quotas
5. **Broken Function Level Authorization** - Verify user role for each function
6. **Unrestricted Access to Sensitive Business Flows** - Protect critical workflows
7. **Server Side Request Forgery (SSRF)** - Validate and sanitize URLs
8. **Security Misconfiguration** - Use security best practices and headers
9. **Improper Inventory Management** - Document and secure all API endpoints
10. **Unsafe Consumption of APIs** - Validate data from third-party APIs

## Related Skills

- `@ethical-hacking-methodology` - Security testing perspective
- `@sql-injection-testing` - Testing for SQL injection
- `@xss-html-injection` - Testing for XSS vulnerabilities
- `@broken-authentication` - Authentication vulnerabilities
- `@backend-dev-guidelines` - Backend development standards
- `@systematic-debugging` - Debug security issues

## Additional Resources

- [OWASP API Security Top 10](https://owasp.org/www-project-api-security/)
- [JWT Best Practices](https://tools.ietf.org/html/rfc8725)
- [Express Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)
- [Node.js Security Checklist](https://blog.risingstack.com/node-js-security-checklist/)
- [API Security Checklist](https://github.com/shieldfy/API-Security-Checklist)

---

**Pro Tip:** Security is not a one-time task - regularly audit your APIs, keep dependencies updated, and stay informed about new vulnerabilities!