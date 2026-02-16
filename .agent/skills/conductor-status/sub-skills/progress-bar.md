# Progress Bar

```
filled = floor((completed / total) * 20)
empty = 20 - filled
bar = "[" + "#".repeat(filled) + ".".repeat(empty) + "]"
```

## Quick Mode

If invoked with `--quick` or `-q`:

```
{Project Name}: {completed}/{total} tasks ({percentage}%)
Active: {trackId} - Task {X.Y}
```

## JSON Output

If invoked with `--json`:

```json
{
  "project": "{name}",
  "timestamp": "ISO_TIMESTAMP",
  "tracks": {
    "total": N,
    "completed": X,
    "in_progress": Y,
    "pending": Z
  },
  "tasks": {
    "total": M,
    "completed": A,
    "in_progress": B,
    "pending": C
  },
  "current": {
    "track": "{trackId}",
    "phase": N,
    "task": "{X.Y}"
  },
  "blockers": []
}
```