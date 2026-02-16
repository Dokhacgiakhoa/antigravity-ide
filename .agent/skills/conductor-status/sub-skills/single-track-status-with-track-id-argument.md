# Single Track Status (with track-id argument)

```
================================================================================
                    TRACK STATUS: {Track Title}
================================================================================
Track ID:    {trackId}
Type:        {feature|bug|chore|refactor}
Status:      {Pending|In Progress|Complete}
Created:     {date}
Updated:     {date}

--------------------------------------------------------------------------------
                              SPECIFICATION
--------------------------------------------------------------------------------

Summary: {brief summary from spec.md}

Acceptance Criteria:
  - [x] {Criterion 1}
  - [ ] {Criterion 2}
  - [ ] {Criterion 3}

--------------------------------------------------------------------------------
                              IMPLEMENTATION
--------------------------------------------------------------------------------

Overall:    {completed}/{total} tasks ({percentage}%)
Progress:   [##########..........] {percentage}%

## Phase 1: {Phase Name} [COMPLETE]
  - [x] Task 1.1: {description}
  - [x] Task 1.2: {description}
  - [x] Verification: {description}

## Phase 2: {Phase Name} [IN PROGRESS]
  - [x] Task 2.1: {description}
  - [~] Task 2.2: {description}  <-- CURRENT
  - [ ] Task 2.3: {description}
  - [ ] Verification: {description}

## Phase 3: {Phase Name} [PENDING]
  - [ ] Task 3.1: {description}
  - [ ] Task 3.2: {description}
  - [ ] Verification: {description}

--------------------------------------------------------------------------------
                              GIT HISTORY
--------------------------------------------------------------------------------

Related Commits:
  abc1234 - feat: add login form ({trackId})
  def5678 - feat: add password validation ({trackId})
  ghi9012 - chore: mark task 1.2 complete ({trackId})

--------------------------------------------------------------------------------
                              NEXT STEPS
--------------------------------------------------------------------------------

1. Current: Task 2.2 - {description}
2. Next: Task 2.3 - {description}
3. Phase 2 verification pending

================================================================================
Commands: /conductor:implement {trackId} | /conductor:revert {trackId}
================================================================================
```

## Status Markers Legend

Display at bottom if helpful:

```
Legend:
  [x] = Complete
  [~] = In Progress
  [ ] = Pending
  [!] = Blocked
```

## Error States