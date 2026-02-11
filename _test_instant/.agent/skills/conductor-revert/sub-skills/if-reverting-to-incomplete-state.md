# If reverting to incomplete state:

- In tracks.md: Ensure marked as `[~]` if partially complete, `[ ]` if fully reverted

## Verification

After revert completion:

```
================================================================================
                           REVERT COMPLETE
================================================================================

Summary:
  - Reverted {N} commits
  - Reset {P} tasks to pending
  - {M} files affected

Git log now shows:
  {recent commit history}

Plan.md status:
  - Task 2.2: [ ] Pending
  - Task 2.3: [ ] Pending

================================================================================

Verify the revert was successful:
  1. Run tests: {test command}
  2. Check application: {relevant check}

If issues are found, you may need to:
  - Fix conflicts manually
  - Re-implement the reverted tasks
  - Use 'git revert HEAD~{N}..HEAD' to undo the reverts

================================================================================
```

## Safety Rules

1. **NEVER use `git reset --hard`** - Only use `git revert`
2. **NEVER use `git push --force`** - Only safe push operations
3. **NEVER auto-resolve conflicts** - Always halt for human intervention
4. **ALWAYS show full plan** - User must see exactly what will happen
5. **REQUIRE explicit 'YES'** - Not 'y', not enter, only 'YES'
6. **HALT on ANY error** - Do not attempt to continue past failures
7. **PRESERVE history** - Revert commits are preferred over history rewriting

## Edge Cases