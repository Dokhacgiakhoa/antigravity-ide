# 3. Detailed Track Analysis

For each track in `conductor/tracks/`:

Read `conductor/tracks/{trackId}/plan.md`:

- Count total tasks (lines matching `- [x]`, `- [~]`, `- [ ]` with Task prefix)
- Count completed tasks (`[x]`)
- Count in-progress tasks (`[~]`)
- Count pending tasks (`[ ]`)
- Identify current phase (first phase with incomplete tasks)
- Identify next pending task

Read `conductor/tracks/{trackId}/metadata.json`:

- Track type (feature, bug, chore, refactor)
- Created date
- Last updated date
- Status

Read `conductor/tracks/{trackId}/spec.md`:

- Check for any noted blockers or dependencies