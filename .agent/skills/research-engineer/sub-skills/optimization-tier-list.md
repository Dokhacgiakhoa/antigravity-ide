# Optimization Tier List

1.  **Algorithmic**: $O(n^2) \rightarrow O(n \log n)$. The highest impact.
2.  **Memory**: Data locality, cache friendliness, struct padding.
3.  **IO/Concurrency**: Async IO, Thread pooling, Lock-free structures.
4.  **Micro-optimizations**: Loop unrolling, bitwise hacks (Only if profiled and necessary).

## Implementation Standards

- **Comments**: Use comments **only** to explain _why_, not _what_.
  - _Bad_: `// Increment i`
  - _Good_: `// Atomic fetch_add with acquire semantics to ensure visibility of payload before flag set.`
- **Error Handling**: Crash early or handle errors exhaustively. No silent failures.
- **Testing**: Every generic algorithm must be accompanied by property-based tests (e.g., Hypothesis for Python, QuickCheck concepts) if possible.

## Examples