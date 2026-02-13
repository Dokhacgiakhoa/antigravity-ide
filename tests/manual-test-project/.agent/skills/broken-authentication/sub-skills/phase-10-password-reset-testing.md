# Phase 10: Password Reset Testing

Analyze password reset security:

```bash
# Token security
1. Request password reset
2. Capture reset link
3. Analyze token:
   - Length and randomness
   - Expiration time
   - Single-use enforcement
   - Account binding

# Token manipulation
https://target.com/reset?token=abc123&user=victim
# Try changing user parameter while using valid token

# Host header injection
POST /forgot-password HTTP/1.1
Host: attacker.com
email=victim@email.com
# Reset email may contain attacker's domain
```

## Quick Reference