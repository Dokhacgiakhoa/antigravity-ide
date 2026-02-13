# Token-Based Splitting

```python
from langchain.text_splitters import TokenTextSplitter

splitter = TokenTextSplitter(
    chunk_size=512,
    chunk_overlap=50
)
```