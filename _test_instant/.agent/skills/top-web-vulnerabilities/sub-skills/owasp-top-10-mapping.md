# OWASP Top 10 Mapping

| OWASP 2021 | Related Vulnerabilities |
|------------|------------------------|
| A01: Broken Access Control | 40-44, 23, 74 |
| A02: Cryptographic Failures | 24-25, 53-55 |
| A03: Injection | 1-13, 37-39 |
| A04: Insecure Design | 74, 92-97 |
| A05: Security Misconfiguration | 26-36 |
| A06: Vulnerable Components | 34, 98-100 |
| A07: Auth Failures | 14-23, 85-86 |
| A08: Data Integrity | 45-47 |
| A09: Logging Failures | 73 |
| A10: SSRF | 66, 87-88 |

---

## Constraints and Limitations

- Vulnerability definitions represent common patterns; specific implementations vary
- Mitigations must be adapted to technology stack and architecture
- New vulnerabilities emerge continuously; reference should be updated
- Some vulnerabilities overlap across categories (e.g., IDOR appears in multiple contexts)
- Effectiveness of mitigations depends on proper implementation
- Automated scanners cannot detect all vulnerability types (especially business logic)

---

## Troubleshooting