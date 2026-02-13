# Workflows (Orchestration)

**Characteristics:**

- Contain business logic and coordination
- **MUST be deterministic** (same inputs → same outputs)
- **Cannot** perform direct external calls
- State automatically preserved across failures
- Can run for years despite infrastructure failures

**Example workflow tasks:**

- Decide which steps to execute
- Handle compensation logic
- Manage timeouts and retries
- Coordinate child workflows