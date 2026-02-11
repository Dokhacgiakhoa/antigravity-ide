# Production Deployment

**Worker Deployment Patterns**

- Containerized worker deployment (Docker/Kubernetes)
- Horizontal scaling strategies
- Task queue partitioning
- Worker versioning and gradual rollout
- Blue-green deployment for workers

**Monitoring and Observability**

- Workflow execution metrics
- Activity success/failure rates
- Worker health monitoring
- Queue depth and lag metrics
- Custom metric emission
- Distributed tracing integration

**Performance Optimization**

- Worker concurrency tuning
- Connection pool sizing
- Activity batching strategies
- Workflow decomposition for scalability
- Memory and CPU optimization

**Operational Patterns**

- Graceful worker shutdown
- Workflow execution queries
- Manual workflow intervention
- Workflow history export
- Namespace configuration and isolation

## When to Use Temporal Python

**Ideal Scenarios**:

- Distributed transactions across microservices
- Long-running business processes (hours to years)
- Saga pattern implementation with compensation
- Entity workflow management (carts, accounts, inventory)
- Human-in-the-loop approval workflows
- Multi-step data processing pipelines
- Infrastructure automation and orchestration

**Key Benefits**:

- Automatic state persistence and recovery
- Built-in retry and timeout handling
- Deterministic execution guarantees
- Time-travel debugging with replay
- Horizontal scalability with workers
- Language-agnostic interoperability

## Common Pitfalls

**Determinism Violations**:

- Using `datetime.now()` instead of `workflow.now()`
- Random number generation with `random.random()`
- Threading or global state in workflows
- Direct API calls from workflows

**Activity Implementation Errors**:

- Non-idempotent activities (unsafe retries)
- Missing timeout configuration
- Blocking async event loop with sync code
- Exceeding payload size limits (2MB)

**Testing Mistakes**:

- Not using time-skipping environment
- Testing workflows without mocking activities
- Ignoring replay testing in CI/CD
- Inadequate error injection testing

**Deployment Issues**:

- Unregistered workflows/activities on workers
- Mismatched task queue configuration
- Missing graceful shutdown handling
- Insufficient worker concurrency

## Integration Patterns

**Microservices Orchestration**

- Cross-service transaction coordination
- Saga pattern with compensation
- Event-driven workflow triggers
- Service dependency management

**Data Processing Pipelines**

- Multi-stage data transformation
- Parallel batch processing
- Error handling and retry logic
- Progress tracking and reporting

**Business Process Automation**

- Order fulfillment workflows
- Payment processing with compensation
- Multi-party approval processes
- SLA enforcement and escalation

## Best Practices

**Workflow Design**:

1. Keep workflows focused and single-purpose
2. Use child workflows for scalability
3. Implement idempotent activities
4. Configure appropriate timeouts
5. Design for failure and recovery

**Testing**:

1. Use time-skipping for fast feedback
2. Mock activities in workflow tests
3. Validate replay with production histories
4. Test error scenarios and compensation
5. Achieve high coverage (≥80% target)

**Production**:

1. Deploy workers with graceful shutdown
2. Monitor workflow and activity metrics
3. Implement distributed tracing
4. Version workflows carefully
5. Use workflow queries for debugging

## Resources

**Official Documentation**:

- Python SDK: python.temporal.io
- Core Concepts: docs.temporal.io/workflows
- Testing Guide: docs.temporal.io/develop/python/testing-suite
- Best Practices: docs.temporal.io/develop/best-practices

**Architecture**:

- Temporal Architecture: github.com/temporalio/temporal/blob/main/docs/architecture/README.md
- Testing Patterns: github.com/temporalio/temporal/blob/main/docs/development/testing.md

**Key Takeaways**:

1. Workflows = orchestration, Activities = external calls
2. Determinism is mandatory for workflows
3. Idempotency is critical for activities
4. Test with time-skipping for fast feedback
5. Monitor and observe in production