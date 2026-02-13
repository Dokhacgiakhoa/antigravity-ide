# 5.1 Caching Strategy

```python
import hashlib
from functools import lru_cache

class LLMCache:
    def __init__(self, redis_client, ttl_seconds=3600):
        self.redis = redis_client
        self.ttl = ttl_seconds

    def _cache_key(self, prompt: str, model: str, **kwargs) -> str:
        """Generate deterministic cache key"""
        content = f"{model}:{prompt}:{json.dumps(kwargs, sort_keys=True)}"
        return hashlib.sha256(content.encode()).hexdigest()

    def get_or_generate(self, prompt: str, model: str, **kwargs) -> str:
        key = self._cache_key(prompt, model, **kwargs)

        # Check cache
        cached = self.redis.get(key)
        if cached:
            return cached.decode()

        # Generate
        response = llm.generate(prompt, model=model, **kwargs)

        # Cache (only cache deterministic outputs)
        if kwargs.get("temperature", 1.0) == 0:
            self.redis.setex(key, self.ttl, response)

        return response
```