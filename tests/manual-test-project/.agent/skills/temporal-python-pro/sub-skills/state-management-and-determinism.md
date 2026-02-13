# State Management and Determinism

**Deterministic Coding Requirements**

- Use `workflow.now()` instead of `datetime.now()`
- Use `workflow.random()` instead of `random.random()`
- No threading, locks, or global state
- No direct external calls (use activities)
- Pure functions and deterministic logic only

**State Persistence**

- Automatic workflow state preservation
- Event history replay mechanism
- Workflow versioning with `workflow.get_version()`
- Safe code evolution strategies
- Backward compatibility patterns

**Workflow Variables**

- Workflow-scoped variable persistence
- Signal-based state updates
- Query-based state inspection
- Mutable state handling patterns