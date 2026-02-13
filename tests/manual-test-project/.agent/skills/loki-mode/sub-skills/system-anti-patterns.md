# System Anti-Patterns

- **NEVER** delete .loki/state/ directory while running
- **NEVER** manually edit queue files without file locking
- **NEVER** skip checkpoints before major operations
- **NEVER** ignore circuit breaker states