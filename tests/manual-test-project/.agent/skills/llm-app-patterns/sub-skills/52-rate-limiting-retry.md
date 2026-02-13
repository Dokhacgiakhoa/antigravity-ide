# 5.2 Rate Limiting & Retry

```python
import time
from tenacity import retry, wait_exponential, stop_after_attempt

class RateLimiter:
    def __init__(self, requests_per_minute: int):
        self.rpm = requests_per_minute
        self.timestamps = []

    def acquire(self):
        """Wait if rate limit would be exceeded"""
        now = time.time()

        # Remove old timestamps
        self.timestamps = [t for t in self.timestamps if now - t < 60]

        if len(self.timestamps) >= self.rpm:
            sleep_time = 60 - (now - self.timestamps[0])
            time.sleep(sleep_time)

        self.timestamps.append(time.time())

# Retry with exponential backoff
@retry(
    wait=wait_exponential(multiplier=1, min=4, max=60),
    stop=stop_after_attempt(5)
)
def call_llm_with_retry(prompt: str) -> str:
    try:
        return llm.generate(prompt)
    except RateLimitError:
        raise  # Will trigger retry
    except APIError as e:
        if e.status_code >= 500:
            raise  # Retry server errors
        raise  # Don't retry client errors
```