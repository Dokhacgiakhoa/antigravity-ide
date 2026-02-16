# Custom Metrics

```python
def calculate_groundedness(response, context):
    """Check if response is grounded in provided context."""
    # Use NLI model to check entailment
    from transformers import pipeline

    nli = pipeline("text-classification", model="microsoft/deberta-large-mnli")

    result = nli(f"{context} [SEP] {response}")[0]

    # Return confidence that response is entailed by context
    return result['score'] if result['label'] == 'ENTAILMENT' else 0.0

def calculate_toxicity(text):
    """Measure toxicity in generated text."""
    from detoxify import Detoxify

    results = Detoxify('original').predict(text)
    return max(results.values())  # Return highest toxicity score

def calculate_factuality(claim, knowledge_base):
    """Verify factual claims against knowledge base."""
    # Implementation depends on your knowledge base
    # Could use retrieval + NLI, or fact-checking API
    pass
```

## LLM-as-Judge Patterns