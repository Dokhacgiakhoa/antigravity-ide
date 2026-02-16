# Workflow 1: Clean Up Feature Branch Before PR

```bash
# Start with feature branch
git checkout feature/user-auth

# Interactive rebase to clean history
git rebase -i main

# Example rebase operations:
# - Squash "fix typo" commits
# - Reword commit messages for clarity
# - Reorder commits logically
# - Drop unnecessary commits

# Force push cleaned branch (safe if no one else is using it)
git push --force-with-lease origin feature/user-auth
```