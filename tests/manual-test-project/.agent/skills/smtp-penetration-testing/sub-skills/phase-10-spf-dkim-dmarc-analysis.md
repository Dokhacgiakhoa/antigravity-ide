# Phase 10: SPF, DKIM, DMARC Analysis

Check email authentication records:

```bash
# SPF/DKIM/DMARC record lookups
dig TXT target.com | grep spf            # SPF
dig TXT selector._domainkey.target.com    # DKIM
dig TXT _dmarc.target.com                 # DMARC

# SPF policy: -all = strict fail, ~all = soft fail, ?all = neutral
```

## Quick Reference