# Session Cookie Flags

| Flag | Purpose | Vulnerability if Missing |
|------|---------|------------------------|
| HttpOnly | Prevent JS access | XSS can steal session |
| Secure | HTTPS only | Sent over HTTP |
| SameSite | CSRF protection | Cross-site requests allowed |
| Path | URL scope | Broader exposure |
| Domain | Domain scope | Subdomain access |
| Expires | Lifetime | Persistent sessions |