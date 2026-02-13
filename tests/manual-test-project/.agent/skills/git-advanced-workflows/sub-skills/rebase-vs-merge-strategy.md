# Rebase vs Merge Strategy

**When to Rebase:**
- Cleaning up local commits before pushing
- Keeping feature branch up-to-date with main
- Creating linear history for easier review

**When to Merge:**
- Integrating completed features into main
- Preserving exact history of collaboration
- Public branches used by others

```bash
# Update feature branch with main changes (rebase)
git checkout feature/my-feature
git fetch origin
git rebase origin/main

# Handle conflicts
git status
# Fix conflicts in files
git add .
git rebase --continue

# Or merge instead
git merge origin/main
```