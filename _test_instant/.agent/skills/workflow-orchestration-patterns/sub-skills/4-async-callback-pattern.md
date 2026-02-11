# 4. Async Callback Pattern

**Purpose**: Wait for external event or human approval

**Pattern:**

- Workflow sends request and waits for signal
- External system processes asynchronously
- Sends signal to resume workflow
- Workflow continues with response

**Use Cases:**

- Human approval workflows
- Webhook callbacks
- Long-running external processes

## State Management and Determinism