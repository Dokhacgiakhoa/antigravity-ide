# Retry Policies

**Default Behavior**: Temporal retries activities forever

**Configure Retry**:

- Initial retry interval
- Backoff coefficient (exponential backoff)
- Maximum interval (cap retry delay)
- Maximum attempts (eventually fail)

**Non-Retryable Errors**:

- Invalid input (validation failures)
- Business rule violations
- Permanent failures (resource not found)