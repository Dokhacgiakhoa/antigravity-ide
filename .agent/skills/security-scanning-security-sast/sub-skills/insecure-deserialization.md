# Insecure Deserialization

**VULNERABLE**: pickle.loads(), yaml.load() with untrusted data

**SECURE**:
```python
import json
data = json.loads(user_input)  # SECURE
import yaml
config = yaml.safe_load(user_input)  # SECURE
```