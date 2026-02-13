# Phase 12: Server-Side Request Forgery

Assess SSRF vulnerabilities:

**SSRF - Server-Side Request Forgery (66)**
- Definition: Manipulating server to make requests to internal resources
- Root Cause: Unvalidated user-controlled URLs
- Impact: Internal network access, data theft, cloud metadata access
- Mitigation: URL whitelisting, network segmentation, egress filtering

**Blind SSRF (87)**
- Definition: SSRF without direct response visibility
- Root Cause: Similar to SSRF, harder to detect
- Impact: Data exfiltration, internal reconnaissance
- Mitigation: Allowlists, WAF, network restrictions

**Time-Based Blind SSRF (88)**
- Definition: Inferring SSRF success through response timing
- Root Cause: Processing delays indicating request outcomes
- Impact: Prolonged exploitation, detection evasion
- Mitigation: Request timeouts, anomaly detection, timing monitoring