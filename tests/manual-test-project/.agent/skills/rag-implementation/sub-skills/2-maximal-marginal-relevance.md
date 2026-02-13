# 2. Maximal Marginal Relevance

```python
# Balance relevance with diversity
results = vectorstore.max_marginal_relevance_search(
    "query",
    k=5,
    fetch_k=20,  # Fetch 20, return top 5 diverse
    lambda_mult=0.5  # 0=max diversity, 1=max relevance
)
```