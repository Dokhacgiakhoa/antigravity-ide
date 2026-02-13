# DoS via Limits

```bash
# Normal request
/api/news?limit=100

# DoS attempt
/api/news?limit=9999999999
```

---

## Common API Vulnerabilities Checklist

| Vulnerability | Description |
|---------------|-------------|
| API Exposure | Unprotected endpoints exposed publicly |
| Misconfigured Caching | Sensitive data cached incorrectly |
| Exposed Tokens | API keys/tokens in responses or URLs |
| JWT Weaknesses | Weak signing, no expiration, algorithm confusion |
| IDOR / BOLA | Broken Object Level Authorization |
| Undocumented Endpoints | Hidden admin/debug endpoints |
| Different Versions | Security gaps in older API versions |
| Rate Limiting | Missing or bypassable rate limits |
| Race Conditions | TOCTOU vulnerabilities |
| XXE Injection | XML parser exploitation |
| Content Type Issues | Switching between JSON/XML |
| HTTP Method Tampering | GET→DELETE/PUT abuse |

---

## Quick Reference

| Vulnerability | Test Payload | Risk |
|---------------|--------------|------|
| IDOR | Change user_id parameter | High |
| SQLi | `' OR 1=1--` in JSON | Critical |
| Command Injection | `; ls /` | Critical |
| XXE | DOCTYPE with ENTITY | High |
| SSRF | Internal IP in params | High |
| Rate Limit Bypass | Batch requests | Medium |
| Method Tampering | GET→DELETE | High |

---

## Tools Reference

| Category | Tool | URL |
|----------|------|-----|
| API Fuzzing | Fuzzapi | github.com/Fuzzapi/fuzzapi |
| API Fuzzing | API-fuzzer | github.com/Fuzzapi/API-fuzzer |
| API Fuzzing | Astra | github.com/flipkart-incubator/Astra |
| API Security | apicheck | github.com/BBVA/apicheck |
| API Discovery | Kiterunner | github.com/assetnote/kiterunner |
| API Discovery | openapi_security_scanner | github.com/ngalongc/openapi_security_scanner |
| API Toolkit | APIKit | github.com/API-Security/APIKit |
| API Keys | API Guesser | api-guesser.netlify.app |
| GUID | GUID Guesser | gist.github.com/DanaEpp/8c6803e542f094da5c4079622f9b4d18 |
| GraphQL | InQL | github.com/doyensec/inql |
| GraphQL | GraphCrawler | github.com/gsmith257-cyber/GraphCrawler |
| GraphQL | graphw00f | github.com/dolevf/graphw00f |
| GraphQL | clairvoyance | github.com/nikitastupin/clairvoyance |
| GraphQL | batchql | github.com/assetnote/batchql |
| GraphQL | graphql-cop | github.com/dolevf/graphql-cop |
| Wordlists | SecLists | github.com/danielmiessler/SecLists |
| Swagger Parser | Swagger-EZ | rhinosecuritylabs.github.io/Swagger-EZ |
| Swagger Routes | swagroutes | github.com/amalmurali47/swagroutes |
| API Mindmap | MindAPI | dsopas.github.io/MindAPI/play |
| JSON Paths | json2paths | github.com/s0md3v/dump/tree/master/json2paths |

---

## Constraints

**Must:**
- Test mobile, web, and developer APIs separately
- Check all API versions (/v1, /v2, /v3)
- Validate both authenticated and unauthenticated access

**Must Not:**
- Assume same security controls across API versions
- Skip testing undocumented endpoints
- Ignore rate limiting checks

**Should:**
- Add `X-Requested-With: XMLHttpRequest` header to simulate frontend
- Check archive.org for historical API endpoints
- Test for race conditions on sensitive operations

---

## Examples