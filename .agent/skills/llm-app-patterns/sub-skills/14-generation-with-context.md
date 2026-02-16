# 1.4 Generation with Context

```python
RAG_PROMPT_TEMPLATE = """
Answer the user's question based ONLY on the following context.
If the context doesn't contain enough information, say "I don't have enough information to answer that."

Context:
{context}

Question: {question}

Answer:"""

def generate_with_rag(question: str):
    # Retrieve
    context_docs = hybrid_search(question, top_k=5)
    context = "\n\n".join([doc.content for doc in context_docs])

    # Generate
    prompt = RAG_PROMPT_TEMPLATE.format(
        context=context,
        question=question
    )

    response = llm.generate(prompt)

    # Return with citations
    return {
        "answer": response,
        "sources": [doc.metadata for doc in context_docs]
    }
```

---

## 2. Agent Architectures