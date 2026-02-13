# Full Project Status (no argument)

```
================================================================================
                        PROJECT STATUS: {Project Name}
================================================================================
Last Updated: {current timestamp}

--------------------------------------------------------------------------------
                              OVERALL PROGRESS
--------------------------------------------------------------------------------

Tracks:     {completed}/{total} completed ({percentage}%)
Tasks:      {completed}/{total} completed ({percentage}%)

Progress:   [##########..........] {percentage}%

--------------------------------------------------------------------------------
                              TRACK SUMMARY
--------------------------------------------------------------------------------

| Status | Track ID          | Type    | Tasks      | Last Updated |
|--------|-------------------|---------|------------|--------------|
| [x]    | auth_20250110     | feature | 12/12 (100%)| 2025-01-12  |
| [~]    | dashboard_20250112| feature | 7/15 (47%) | 2025-01-15  |
| [ ]    | nav-fix_20250114  | bug     | 0/4 (0%)   | 2025-01-14  |

--------------------------------------------------------------------------------
                              CURRENT FOCUS
--------------------------------------------------------------------------------

Active Track:  dashboard_20250112 - Dashboard Feature
Current Phase: Phase 2: Core Components
Current Task:  [~] Task 2.3: Implement chart rendering

Progress in Phase:
  - [x] Task 2.1: Create dashboard layout
  - [x] Task 2.2: Add data fetching hooks
  - [~] Task 2.3: Implement chart rendering
  - [ ] Task 2.4: Add filter controls

--------------------------------------------------------------------------------
                              NEXT ACTIONS
--------------------------------------------------------------------------------

1. Complete: Task 2.3 - Implement chart rendering (dashboard_20250112)
2. Then: Task 2.4 - Add filter controls (dashboard_20250112)
3. After Phase 2: Phase verification checkpoint

--------------------------------------------------------------------------------
                               BLOCKERS
--------------------------------------------------------------------------------

{If blockers found:}
! BLOCKED: Task 3.1 in dashboard_20250112 depends on api_20250111 (incomplete)

{If no blockers:}
No blockers identified.

================================================================================
Commands: /conductor:implement {trackId} | /conductor:new-track | /conductor:revert
================================================================================
```