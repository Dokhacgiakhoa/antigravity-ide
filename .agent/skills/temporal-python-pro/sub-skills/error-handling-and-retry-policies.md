# Error Handling and Retry Policies

**ApplicationError Usage**

- Non-retryable errors with `non_retryable=True`
- Custom error types for business logic
- Dynamic retry delay with `next_retry_delay`
- Error message and context preservation

**RetryPolicy Configuration**

- Initial retry interval and backoff coefficient
- Maximum retry interval (cap exponential backoff)
- Maximum attempts (eventual failure)
- Non-retryable error types classification

**Activity Error Handling**

- Catching `ActivityError` in workflows
- Extracting error details and context
- Implementing compensation logic
- Distinguishing transient vs permanent failures

**Timeout Configuration**

- `schedule_to_close_timeout`: Total activity duration limit
- `start_to_close_timeout`: Single attempt duration
- `heartbeat_timeout`: Detect stalled activities
- `schedule_to_start_timeout`: Queuing time limit