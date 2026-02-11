# Activity Heartbeats

**Purpose**: Detect stalled long-running activities

**Pattern**:

- Activity sends periodic heartbeat
- Includes progress information
- Timeout if no heartbeat received
- Enables progress-based retry

## Best Practices