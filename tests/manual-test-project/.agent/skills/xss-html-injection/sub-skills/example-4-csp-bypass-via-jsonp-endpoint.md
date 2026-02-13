# Example 4: CSP Bypass via JSONP Endpoint

**Scenario**: Site has CSP but allows trusted CDN

**CSP Header**:
```
Content-Security-Policy: script-src 'self' https://cdn.trusted.com
```

**Bypass**: Find JSONP endpoint on trusted domain:
```html
<script src="https://cdn.trusted.com/api/jsonp?callback=alert"></script>
```

**Result**: CSP bypassed using allowed script source.

## Troubleshooting

| Issue | Solutions |
|-------|-----------|
| Script not executing | Check CSP blocking; verify encoding; try event handlers (img, svg onerror); confirm JS enabled |
| Payload appears but doesn't execute | Break out of attribute context with `"` or `'`; check if inside comment; test different contexts |
| Cookies not accessible | Check HttpOnly flag; try localStorage/sessionStorage; use no-cors mode |
| CSP blocking payloads | Find JSONP on whitelisted domains; check for unsafe-inline; test base-uri bypass |
| WAF blocking requests | Use encoding variations; fragment payload; null bytes; case variations |