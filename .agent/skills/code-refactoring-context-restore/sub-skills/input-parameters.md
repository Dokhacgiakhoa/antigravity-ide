# Input Parameters

- `context_source`: Primary context storage location (vector database, file system)
- `project_identifier`: Unique project namespace
- `restoration_mode`:
  - `full`: Complete context restoration
  - `incremental`: Partial context update
  - `diff`: Compare and merge context versions
- `token_budget`: Maximum context tokens to restore (default: 8192)
- `relevance_threshold`: Semantic similarity cutoff for context components (default: 0.75)

## Advanced Context Retrieval Strategies