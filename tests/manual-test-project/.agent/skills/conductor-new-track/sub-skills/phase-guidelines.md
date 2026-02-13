# Phase Guidelines

- Group related tasks into logical phases
- Each phase should be independently verifiable
- Include verification task after each phase
- TDD tracks: Include test writing tasks before implementation tasks
- Typical structure:
  1. **Setup/Foundation** - Initial scaffolding, interfaces
  2. **Core Implementation** - Main functionality
  3. **Integration** - Connect with existing system
  4. **Polish** - Error handling, edge cases, docs

## User Review of Plan

Display the generated plan and ask:

```
Here is the implementation plan:

{plan content}

Is this plan correct?
1. Yes, create the track
2. No, let me edit (opens for inline edits)
3. Add more phases/tasks
4. Start over
```

## Track Creation

After plan approval:

1. Create directory structure:

   ```
   conductor/tracks/{trackId}/
   ├── spec.md
   ├── plan.md
   ├── metadata.json
   └── index.md
   ```

2. Create `metadata.json`:

   ```json
   {
     "id": "{trackId}",
     "title": "{Track Title}",
     "type": "feature|bug|chore|refactor",
     "status": "pending",
     "created": "ISO_TIMESTAMP",
     "updated": "ISO_TIMESTAMP",
     "phases": {
       "total": N,
       "completed": 0
     },
     "tasks": {
       "total": M,
       "completed": 0
     }
   }
   ```

3. Create `index.md`:

   ```markdown
   # Track: {Track Title}

   **ID:** {trackId}
   **Status:** Pending

   ## Documents

   - [Specification](./spec.md)
   - [Implementation Plan](./plan.md)

   ## Progress

   - Phases: 0/{N} complete
   - Tasks: 0/{M} complete

   ## Quick Links

   - [Back to Tracks](../../tracks.md)
   - [Product Context](../../product.md)
   ```

4. Register in `conductor/tracks.md`:
   - Add row to tracks table
   - Format: `| [ ] | {trackId} | {title} | {created} | {created} |`

5. Update `conductor/index.md`:
   - Add track to "Active Tracks" section

## Completion Message

```
Track created successfully!

Track ID: {trackId}
Location: conductor/tracks/{trackId}/

Files created:
- spec.md - Requirements specification
- plan.md - Phased implementation plan
- metadata.json - Track metadata
- index.md - Track navigation

Next steps:
1. Review spec.md and plan.md, make any edits
2. Run /conductor:implement {trackId} to start implementation
3. Run /conductor:status to see project progress
```

## Error Handling

- If directory creation fails: Halt and report, do not register in tracks.md
- If any file write fails: Clean up partial track, report error
- If tracks.md update fails: Warn user to manually register track