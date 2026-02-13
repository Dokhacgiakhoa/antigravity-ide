# Phase 5: XML-Related Vulnerabilities

Evaluate XML processing security:

**XXE - XML External Entity Injection (37)**
- Definition: Exploitation of XML parsers to access files or internal systems
- Root Cause: External entity processing enabled
- Impact: File disclosure, SSRF, denial of service
- Mitigation: Disable external entities, use safe XML parsers

**XEE - XML Entity Expansion (38)**
- Definition: Excessive entity expansion causing resource exhaustion
- Root Cause: Unlimited entity expansion allowed
- Impact: Denial of service, parser crashes
- Mitigation: Limit entity expansion, configure parser restrictions

**XML Bomb (Billion Laughs) (39)**
- Definition: Crafted XML with nested entities consuming resources
- Root Cause: Recursive entity definitions
- Impact: Memory exhaustion, denial of service
- Mitigation: Entity expansion limits, input size restrictions

**XML Denial of Service (65)**
- Definition: Specially crafted XML causing excessive processing
- Root Cause: Complex document structures without limits
- Impact: CPU/memory exhaustion, service unavailability
- Mitigation: Schema validation, size limits, processing timeouts