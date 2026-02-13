# Template 2: Local Embeddings with Sentence Transformers

```python
from sentence_transformers import SentenceTransformer
from typing import List, Optional
import numpy as np

class LocalEmbedder:
    """Local embedding with sentence-transformers."""

    def __init__(
        self,
        model_name: str = "BAAI/bge-large-en-v1.5",
        device: str = "cuda"
    ):
        self.model = SentenceTransformer(model_name, device=device)

    def embed(
        self,
        texts: List[str],
        normalize: bool = True,
        show_progress: bool = False
    ) -> np.ndarray:
        """Embed texts with optional normalization."""
        embeddings = self.model.encode(
            texts,
            normalize_embeddings=normalize,
            show_progress_bar=show_progress,
            convert_to_numpy=True
        )
        return embeddings

    def embed_query(self, query: str) -> np.ndarray:
        """Embed a query with BGE-style prefix."""
        # BGE models benefit from query prefix
        if "bge" in self.model.get_sentence_embedding_dimension():
            query = f"Represent this sentence for searching relevant passages: {query}"
        return self.embed([query])[0]

    def embed_documents(self, documents: List[str]) -> np.ndarray:
        """Embed documents for indexing."""
        return self.embed(documents)


# E5 model with instructions
class E5Embedder:
    def __init__(self, model_name: str = "intfloat/multilingual-e5-large"):
        self.model = SentenceTransformer(model_name)

    def embed_query(self, query: str) -> np.ndarray:
        return self.model.encode(f"query: {query}")

    def embed_document(self, document: str) -> np.ndarray:
        return self.model.encode(f"passage: {document}")
```