# For Full Track Revert

1. Find ALL commits mentioning the track:

   ```bash
   git log --oneline --grep="{trackId}"
   ```

2. Find track creation commits:

   ```bash
   git log --oneline -- "conductor/tracks/{trackId}/"
   ```

3. Collect all matching commit SHAs in chronological order

## Execution Plan Display

Before any revert operations, display full plan:

```
================================================================================
                           REVERT EXECUTION PLAN
================================================================================

Target: {description of what's being reverted}

Commits to revert (in reverse chronological order):
  1. abc1234 - feat: add chart rendering (dashboard_20250112)
  2. def5678 - chore: mark task 2.3 complete (dashboard_20250112)
  3. ghi9012 - feat: add data hooks (dashboard_20250112)
  4. jkl3456 - chore: mark task 2.2 complete (dashboard_20250112)

Files that will be affected:
  - src/components/Dashboard.tsx (modified)
  - src/hooks/useData.ts (will be deleted - was created in these commits)
  - conductor/tracks/dashboard_20250112/plan.md (modified)

Plan updates:
  - Task 2.2: [x] -> [ ]
  - Task 2.3: [~] -> [ ]

================================================================================
                              !! WARNING !!
================================================================================

This operation will:
- Create {N} revert commits
- Modify {M} files
- Reset {P} tasks to pending status

This CANNOT be easily undone without manual intervention.

================================================================================

Type 'YES' to proceed, or anything else to cancel:
```

**CRITICAL: Require explicit 'YES' confirmation. Do not proceed on 'y', 'yes', or enter.**

## Revert Execution

Execute reverts in reverse chronological order (newest first):

```
Executing revert plan...

[1/4] Reverting abc1234...
      git revert --no-edit abc1234
      ✓ Success

[2/4] Reverting def5678...
      git revert --no-edit def5678
      ✓ Success

[3/4] Reverting ghi9012...
      git revert --no-edit ghi9012
      ✓ Success

[4/4] Reverting jkl3456...
      git revert --no-edit jkl3456
      ✓ Success
```