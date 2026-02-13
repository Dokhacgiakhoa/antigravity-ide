# Autosquash Workflow

Automatically squash fixup commits during rebase.

```bash
# Make initial commit
git commit -m "feat: add user authentication"

# Later, fix something in that commit
# Stage changes
git commit --fixup HEAD  # or specify commit hash

# Make more changes
git commit --fixup abc123

# Rebase with autosquash
git rebase -i --autosquash main

# Git automatically marks fixup commits
```