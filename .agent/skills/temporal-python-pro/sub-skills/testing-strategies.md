# Testing Strategies

**WorkflowEnvironment Testing**

- Time-skipping test environment setup
- Instant execution of `workflow.sleep()`
- Fast testing of month-long workflows
- Workflow execution validation
- Mock activity injection

**Activity Testing**

- ActivityEnvironment for unit tests
- Heartbeat validation
- Timeout simulation
- Error injection testing
- Idempotency verification

**Integration Testing**

- Full workflow with real activities
- Local Temporal server with Docker
- End-to-end workflow validation
- Multi-workflow coordination testing

**Replay Testing**

- Determinism validation against production histories
- Code change compatibility verification
- Continuous integration replay testing