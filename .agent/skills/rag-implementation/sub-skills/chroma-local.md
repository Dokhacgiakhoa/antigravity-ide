# Chroma (Local)

```python
from langchain.vectorstores import Chroma

vectorstore = Chroma(
    collection_name="my_collection",
    embedding_function=embeddings,
    persist_directory="./chroma_db"
)
```

## Retrieval Optimization