# 3.3 Prompt Chaining

```python
class PromptChain:
    """
    Chain prompts together, passing output as input to next
    """

    def __init__(self, steps: list[dict]):
        self.steps = steps

    def run(self, initial_input: str) -> dict:
        context = {"input": initial_input}
        results = []

        for step in self.steps:
            prompt = step["prompt"].format(**context)
            output = llm.generate(prompt)

            # Parse output if needed
            if step.get("parser"):
                output = step["parser"](output)

            context[step["output_key"]] = output
            results.append({
                "step": step["name"],
                "output": output
            })

        return {
            "final_output": context[self.steps[-1]["output_key"]],
            "intermediate_results": results
        }

# Example: Research → Analyze → Summarize
chain = PromptChain([
    {
        "name": "research",
        "prompt": "Research the topic: {input}",
        "output_key": "research"
    },
    {
        "name": "analyze",
        "prompt": "Analyze these findings:\n{research}",
        "output_key": "analysis"
    },
    {
        "name": "summarize",
        "prompt": "Summarize this analysis in 3 bullet points:\n{analysis}",
        "output_key": "summary"
    }
])
```

---

## 4. LLMOps & Observability