# Weaviate

```python
import weaviate
from langchain.vectorstores import Weaviate

client = weaviate.Client("http://localhost:8080")

vectorstore = Weaviate(client, "Document", "content", embeddings)
```