# 5.3 Fallback Strategy

```python
class LLMWithFallback:
    def __init__(self, primary: str, fallbacks: list[str]):
        self.primary = primary
        self.fallbacks = fallbacks

    def generate(self, prompt: str, **kwargs) -> str:
        models = [self.primary] + self.fallbacks

        for model in models:
            try:
                return llm.generate(prompt, model=model, **kwargs)
            except (RateLimitError, APIError) as e:
                logging.warning(f"Model {model} failed: {e}")
                continue

        raise AllModelsFailedError("All models exhausted")

# Usage
llm_client = LLMWithFallback(
    primary="gpt-4-turbo",
    fallbacks=["gpt-3.5-turbo", "claude-3-sonnet"]
)
```

---

## Architecture Decision Matrix

| Pattern              | Use When         | Complexity | Cost      |
| :------------------- | :--------------- | :--------- | :-------- |
| **Simple RAG**       | FAQ, docs search | Low        | Low       |
| **Hybrid RAG**       | Mixed queries    | Medium     | Medium    |
| **ReAct Agent**      | Multi-step tasks | Medium     | Medium    |
| **Function Calling** | Structured tools | Low        | Low       |
| **Plan-Execute**     | Complex tasks    | High       | High      |
| **Multi-Agent**      | Research tasks   | Very High  | Very High |

---

## Resources

- [Dify Platform](https://github.com/langgenius/dify)
- [LangChain Docs](https://python.langchain.com/)
- [LlamaIndex](https://www.llamaindex.ai/)
- [Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook)