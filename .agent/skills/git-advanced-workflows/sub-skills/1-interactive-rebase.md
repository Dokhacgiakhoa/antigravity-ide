# 1. Interactive Rebase

Interactive rebase is the Swiss Army knife of Git history editing.

**Common Operations:**
- `pick`: Keep commit as-is
- `reword`: Change commit message
- `edit`: Amend commit content
- `squash`: Combine with previous commit
- `fixup`: Like squash but discard message
- `drop`: Remove commit entirely

**Basic Usage:**
```bash
# Rebase last 5 commits
git rebase -i HEAD~5

# Rebase all commits on current branch
git rebase -i $(git merge-base HEAD main)

# Rebase onto specific commit
git rebase -i abc123
```