# Insecure Random

**VULNERABLE**: random module for security-critical operations

**SECURE**:
```python
import secrets
token = secrets.token_hex(16)
session_id = secrets.token_urlsafe(32)
```

## Framework Security