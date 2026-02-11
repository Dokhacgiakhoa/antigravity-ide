# 3. Environment-Specific Validation

```python
from typing import Dict, List, Any

class EnvironmentValidator:
    def __init__(self):
        self.environments = ['development', 'staging', 'production']
        self.environment_rules = {
            'development': {
                'allow_debug': True,
                'require_https': False,
                'min_password_length': 8
            },
            'production': {
                'allow_debug': False,
                'require_https': True,
                'min_password_length': 16,
                'require_encryption': True
            }
        }

    def validate_config(self, config: Dict, environment: str) -> List[Dict]:
        if environment not in self.environment_rules:
            raise ValueError(f"Unknown environment: {environment}")

        rules = self.environment_rules[environment]
        violations = []

        if not rules['allow_debug'] and config.get('debug', False):
            violations.append({
                'rule': 'no_debug_in_production',
                'message': 'Debug mode not allowed in production',
                'severity': 'critical'
            })

        if rules['require_https']:
            urls = self._extract_urls(config)
            for url_path, url in urls:
                if url.startswith('http://') and 'localhost' not in url:
                    violations.append({
                        'rule': 'require_https',
                        'message': f'HTTPS required for {url_path}',
                        'severity': 'high'
                    })

        return violations
```