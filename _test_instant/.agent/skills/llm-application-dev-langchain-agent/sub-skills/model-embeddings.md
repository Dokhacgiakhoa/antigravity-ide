# Model & Embeddings

- **Primary LLM**: Claude Sonnet 4.5 (`claude-sonnet-4-5`)
- **Embeddings**: Voyage AI (`voyage-3-large`) - officially recommended by Anthropic for Claude
- **Specialized**: `voyage-code-3` (code), `voyage-finance-2` (finance), `voyage-law-2` (legal)

## Agent Types

1. **ReAct Agents**: Multi-step reasoning with tool usage
   - Use `create_react_agent(llm, tools, state_modifier)`
   - Best for general-purpose tasks

2. **Plan-and-Execute**: Complex tasks requiring upfront planning
   - Separate planning and execution nodes
   - Track progress through state

3. **Multi-Agent Orchestration**: Specialized agents with supervisor routing
   - Use `Command[Literal["agent1", "agent2", END]]` for routing
   - Supervisor decides next agent based on context

## Memory Systems

- **Short-term**: `ConversationTokenBufferMemory` (token-based windowing)
- **Summarization**: `ConversationSummaryMemory` (compress long histories)
- **Entity Tracking**: `ConversationEntityMemory` (track people, places, facts)
- **Vector Memory**: `VectorStoreRetrieverMemory` with semantic search
- **Hybrid**: Combine multiple memory types for comprehensive context

## RAG Pipeline

```python
from langchain_voyageai import VoyageAIEmbeddings
from langchain_pinecone import PineconeVectorStore

# Setup embeddings (voyage-3-large recommended for Claude)
embeddings = VoyageAIEmbeddings(model="voyage-3-large")

# Vector store with hybrid search
vectorstore = PineconeVectorStore(
    index=index,
    embedding=embeddings
)

# Retriever with reranking
base_retriever = vectorstore.as_retriever(
    search_type="hybrid",
    search_kwargs={"k": 20, "alpha": 0.5}
)
```