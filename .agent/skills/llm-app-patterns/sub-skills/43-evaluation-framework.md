# 4.3 Evaluation Framework

```python
class LLMEvaluator:
    """
    Evaluate LLM outputs for quality
    """

    def evaluate_response(self,
                          question: str,
                          response: str,
                          ground_truth: str = None) -> dict:
        scores = {}

        # Relevance: Does it answer the question?
        scores["relevance"] = self._score_relevance(question, response)

        # Coherence: Is it well-structured?
        scores["coherence"] = self._score_coherence(response)

        # Groundedness: Is it based on provided context?
        scores["groundedness"] = self._score_groundedness(response)

        # Accuracy: Does it match ground truth?
        if ground_truth:
            scores["accuracy"] = self._score_accuracy(response, ground_truth)

        # Harmfulness: Is it safe?
        scores["safety"] = self._score_safety(response)

        return scores

    def run_benchmark(self, test_cases: list[dict]) -> dict:
        """Run evaluation on test set"""
        results = []
        for case in test_cases:
            response = llm.generate(case["prompt"])
            scores = self.evaluate_response(
                question=case["prompt"],
                response=response,
                ground_truth=case.get("expected")
            )
            results.append(scores)

        return self._aggregate_scores(results)
```

---

## 5. Production Patterns