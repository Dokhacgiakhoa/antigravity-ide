# 1.2 Multi-Model Architecture

```python
class MultiModelAgent:
    """
    Use different models for different purposes:
    - Fast model for planning
    - Powerful model for complex reasoning
    - Specialized model for code generation
    """

    def __init__(self):
        self.models = {
            "fast": "gpt-3.5-turbo",      # Quick decisions
            "smart": "gpt-4-turbo",        # Complex reasoning
            "code": "claude-3-sonnet",     # Code generation
        }

    def select_model(self, task_type: str) -> str:
        if task_type == "planning":
            return self.models["fast"]
        elif task_type == "analysis":
            return self.models["smart"]
        elif task_type == "code":
            return self.models["code"]
        return self.models["smart"]
```

---

## 2. Tool Design Patterns