# 4.1 Metrics to Track

```python
LLM_METRICS = {
    # Performance
    "latency_p50": "50th percentile response time",
    "latency_p99": "99th percentile response time",
    "tokens_per_second": "Generation speed",

    # Quality
    "user_satisfaction": "Thumbs up/down ratio",
    "task_completion": "% tasks completed successfully",
    "hallucination_rate": "% responses with factual errors",

    # Cost
    "cost_per_request": "Average $ per API call",
    "tokens_per_request": "Average tokens used",
    "cache_hit_rate": "% requests served from cache",

    # Reliability
    "error_rate": "% failed requests",
    "timeout_rate": "% requests that timed out",
    "retry_rate": "% requests needing retry"
}
```