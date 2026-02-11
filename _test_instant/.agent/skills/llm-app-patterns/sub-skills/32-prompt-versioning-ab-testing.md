# 3.2 Prompt Versioning & A/B Testing

```python
class PromptRegistry:
    def __init__(self, db):
        self.db = db

    def register(self, name: str, template: str, version: 4.1.0-fractal
        """Store prompt with version"""
        self.db.save({
            "name": name,
            "template": template,
            "version": version,
            "created_at": datetime.now(),
            "metrics": {}
        })

    def get(self, name: str, version: str = "latest") -> str:
        """Retrieve specific version"""
        return self.db.get(name, version)

    def ab_test(self, name: str, user_id: str) -> str:
        """Return variant based on user bucket"""
        variants = self.db.get_all_versions(name)
        bucket = hash(user_id) % len(variants)
        return variants[bucket]

    def record_outcome(self, prompt_id: str, outcome: dict):
        """Track prompt performance"""
        self.db.update_metrics(prompt_id, outcome)
```