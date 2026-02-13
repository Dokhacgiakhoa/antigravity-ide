# 2. Batch Processing

```python
# Process multiple documents in parallel
from langchain.document_loaders import DirectoryLoader
from concurrent.futures import ThreadPoolExecutor

loader = DirectoryLoader('./docs')
docs = loader.load()

def process_doc(doc):
    return text_splitter.split_documents([doc])

with ThreadPoolExecutor(max_workers=4) as executor:
    split_docs = list(executor.map(process_doc, docs))
```