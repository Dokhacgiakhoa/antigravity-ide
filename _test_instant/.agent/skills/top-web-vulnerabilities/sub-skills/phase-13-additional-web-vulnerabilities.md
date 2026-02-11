# Phase 13: Additional Web Vulnerabilities

| # | Vulnerability | Root Cause | Impact | Mitigation |
|---|--------------|-----------|--------|------------|
| 67 | HTTP Parameter Pollution | Inconsistent parsing | Injection, ACL bypass | Strict parsing, validation |
| 68 | Insecure Redirects | Unvalidated targets | Phishing, malware | Whitelist destinations |
| 69 | File Inclusion (LFI/RFI) | Unvalidated paths | Code exec, disclosure | Whitelist files, disable RFI |
| 70 | Security Header Bypass | Misconfigured headers | XSS, clickjacking | Proper headers, audits |
| 72 | Inadequate Session Timeout | Excessive timeouts | Session hijacking | Idle termination, timeouts |
| 73 | Insufficient Logging | Missing infrastructure | Detection gaps | SIEM, alerting |
| 74 | Business Logic Flaws | Insecure design | Fraud, unauthorized ops | Threat modeling, testing |