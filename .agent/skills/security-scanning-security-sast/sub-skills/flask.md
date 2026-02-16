# Flask

**VULNERABLE**: debug=True, weak secret_key, CORS wildcard

**SECURE**:
```python
import os
from flask_talisman import Talisman

app.secret_key = os.environ.get('FLASK_SECRET_KEY')
Talisman(app, force_https=True)
CORS(app, origins=['https://example.com'])
```