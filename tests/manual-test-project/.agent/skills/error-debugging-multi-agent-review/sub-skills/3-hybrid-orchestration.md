# 3. Hybrid Orchestration

```python
hybrid_review_strategy = {
    "parallel_agents": ["security", "performance"],
    "sequential_agents": ["architecture", "compliance"]
}
```

## Reference Implementations

1. **Web Application Security Review**
2. **Microservices Architecture Validation**

## Best Practices and Considerations

- Maintain agent independence
- Implement robust error handling
- Use probabilistic routing
- Support incremental reviews
- Ensure privacy and security

## Extensibility

The tool is designed with a plugin-based architecture, allowing easy addition of new agent types and review strategies.

## Invocation

Target for review: $ARGUMENTS