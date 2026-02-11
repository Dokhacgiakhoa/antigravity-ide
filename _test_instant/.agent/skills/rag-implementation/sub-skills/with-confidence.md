# With Confidence

```python
prompt_template = """Answer the question using the context. Provide a confidence score (0-100%) for your answer.

Context:
{context}

Question: {question}

Answer:
Confidence:"""
```

## Evaluation Metrics

```python
def evaluate_rag_system(qa_chain, test_cases):
    metrics = {
        'accuracy': [],
        'retrieval_quality': [],
        'groundedness': []
    }

    for test in test_cases:
        result = qa_chain({"query": test['question']})

        # Check if answer matches expected
        accuracy = calculate_accuracy(result['result'], test['expected'])
        metrics['accuracy'].append(accuracy)

        # Check if relevant docs were retrieved
        retrieval_quality = evaluate_retrieved_docs(
            result['source_documents'],
            test['relevant_docs']
        )
        metrics['retrieval_quality'].append(retrieval_quality)

        # Check if answer is grounded in context
        groundedness = check_groundedness(
            result['result'],
            result['source_documents']
        )
        metrics['groundedness'].append(groundedness)

    return {k: sum(v)/len(v) for k, v in metrics.items()}
```

## Resources

- **references/vector-databases.md**: Detailed comparison of vector DBs
- **references/embeddings.md**: Embedding model selection guide
- **references/retrieval-strategies.md**: Advanced retrieval techniques
- **references/reranking.md**: Reranking methods and when to use them
- **references/context-window.md**: Managing context limits
- **assets/vector-store-config.yaml**: Configuration templates
- **assets/retriever-pipeline.py**: Complete RAG pipeline
- **assets/embedding-models.md**: Model comparison and benchmarks

## Best Practices

1. **Chunk Size**: Balance between context and specificity (500-1000 tokens)
2. **Overlap**: Use 10-20% overlap to preserve context at boundaries
3. **Metadata**: Include source, page, timestamp for filtering and debugging
4. **Hybrid Search**: Combine semantic and keyword search for best results
5. **Reranking**: Improve top results with cross-encoder
6. **Citations**: Always return source documents for transparency
7. **Evaluation**: Continuously test retrieval quality and answer accuracy
8. **Monitoring**: Track retrieval metrics in production

## Common Issues

- **Poor Retrieval**: Check embedding quality, chunk size, query formulation
- **Irrelevant Results**: Add metadata filtering, use hybrid search, rerank
- **Missing Information**: Ensure documents are properly indexed
- **Slow Queries**: Optimize vector store, use caching, reduce k
- **Hallucinations**: Improve grounding prompt, add verification step