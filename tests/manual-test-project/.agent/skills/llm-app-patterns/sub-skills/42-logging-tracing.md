# 4.2 Logging & Tracing

```python
import logging
from opentelemetry import trace

tracer = trace.get_tracer(__name__)

class LLMLogger:
    def log_request(self, request_id: str, data: dict):
        """Log LLM request for debugging and analysis"""
        log_entry = {
            "request_id": request_id,
            "timestamp": datetime.now().isoformat(),
            "model": data["model"],
            "prompt": data["prompt"][:500],  # Truncate for storage
            "prompt_tokens": data["prompt_tokens"],
            "temperature": data.get("temperature", 1.0),
            "user_id": data.get("user_id"),
        }
        logging.info(f"LLM_REQUEST: {json.dumps(log_entry)}")

    def log_response(self, request_id: str, data: dict):
        """Log LLM response"""
        log_entry = {
            "request_id": request_id,
            "completion_tokens": data["completion_tokens"],
            "total_tokens": data["total_tokens"],
            "latency_ms": data["latency_ms"],
            "finish_reason": data["finish_reason"],
            "cost_usd": self._calculate_cost(data),
        }
        logging.info(f"LLM_RESPONSE: {json.dumps(log_entry)}")

# Distributed tracing
@tracer.start_as_current_span("llm_call")
def call_llm(prompt: str) -> str:
    span = trace.get_current_span()
    span.set_attribute("prompt.length", len(prompt))

    response = llm.generate(prompt)

    span.set_attribute("response.length", len(response))
    span.set_attribute("tokens.total", response.usage.total_tokens)

    return response.content
```