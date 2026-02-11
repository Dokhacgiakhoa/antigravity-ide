# Pinecone

```python
import pinecone
from langchain.vectorstores import Pinecone

pinecone.init(api_key="your-api-key", environment="us-west1-gcp")

index = pinecone.Index("your-index-name")

vectorstore = Pinecone(index, embeddings.embed_query, "text")
```