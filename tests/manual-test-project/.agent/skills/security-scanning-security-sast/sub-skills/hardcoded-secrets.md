# Hardcoded Secrets

**VULNERABLE**: Hardcoded API keys, passwords, tokens in source code

**SECURE**:
```python
import os
API_KEY = os.environ.get('API_KEY')
PASSWORD = os.getenv('DB_PASSWORD')
```