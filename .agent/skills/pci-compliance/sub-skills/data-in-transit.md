# Data in Transit

```python
# Always use TLS 1.2 or higher
# Flask/Django example
app.config['SESSION_COOKIE_SECURE'] = True  # HTTPS only
app.config['SESSION_COOKIE_HTTPONLY'] = True
app.config['SESSION_COOKIE_SAMESITE'] = 'Strict'

# Enforce HTTPS
from flask_talisman import Talisman
Talisman(app, force_https=True)
```

## Access Control

```python
from functools import wraps
from flask import session

def require_pci_access(f):
    """Decorator to restrict access to cardholder data."""
    @wraps(f)
    def decorated_function(*args, **kwargs):
        user = session.get('user')

        # Check if user has PCI access role
        if not user or 'pci_access' not in user.get('roles', []):
            return {'error': 'Unauthorized access to cardholder data'}, 403

        # Log access attempt
        audit_log(
            user=user['id'],
            action='access_cardholder_data',
            resource=f.__name__
        )

        return f(*args, **kwargs)

    return decorated_function

@app.route('/api/payment-methods')
@require_pci_access
def get_payment_methods():
    """Retrieve payment methods (restricted access)."""
    # Only accessible to users with pci_access role
    pass
```

## Audit Logging

```python
import logging
from datetime import datetime

class PCIAuditLogger:
    """PCI-compliant audit logging."""

    def __init__(self):
        self.logger = logging.getLogger('pci_audit')
        # Configure to write to secure, append-only log

    def log_access(self, user_id, resource, action, result):
        """Log access to cardholder data."""
        entry = {
            'timestamp': datetime.utcnow().isoformat(),
            'user_id': user_id,
            'resource': resource,
            'action': action,
            'result': result,
            'ip_address': request.remote_addr
        }

        self.logger.info(json.dumps(entry))

    def log_authentication(self, user_id, success, method):
        """Log authentication attempt."""
        entry = {
            'timestamp': datetime.utcnow().isoformat(),
            'user_id': user_id,
            'event': 'authentication',
            'success': success,
            'method': method,
            'ip_address': request.remote_addr
        }

        self.logger.info(json.dumps(entry))

# Usage
audit = PCIAuditLogger()
audit.log_access(user_id=123, resource='payment_methods', action='read', result='success')
```

## Security Best Practices