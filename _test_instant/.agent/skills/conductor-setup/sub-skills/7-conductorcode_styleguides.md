# 7. conductor/code_styleguides/

Generate selected style guides from `$CLAUDE_PLUGIN_ROOT/templates/code_styleguides/`

## State Management

After each successful file creation:

1. Update `setup_state.json`:
   - Add filename to `files_created` array
   - Update `last_updated` timestamp
   - If section complete, add to `completed_sections`
2. Verify file exists with `Read` tool

## Completion

When all files are created:

1. Set `setup_state.json` status to "complete"
2. Display summary:

   ```
   Conductor setup complete!

   Created artifacts:
   - conductor/index.md
   - conductor/product.md
   - conductor/product-guidelines.md
   - conductor/tech-stack.md
   - conductor/workflow.md
   - conductor/tracks.md
   - conductor/code_styleguides/[languages]

   Next steps:
   1. Review generated files and customize as needed
   2. Run /conductor:new-track to create your first track
   ```

## Resume Handling

If `--resume` argument or resuming from state:

1. Load `setup_state.json`
2. Skip completed sections
3. Resume from `current_section` and `current_question`
4. Verify previously created files still exist
5. If files missing, offer to regenerate

## Error Handling

- If file write fails: Halt and report error, do not update state
- If user cancels: Save current state for future resume
- If state file corrupted: Offer to start fresh or attempt recovery