# Split Commit

Break one commit into multiple logical commits.

```bash
# Start interactive rebase
git rebase -i HEAD~3

# Mark commit to split with 'edit'
# Git will stop at that commit

# Reset commit but keep changes
git reset HEAD^

# Stage and commit in logical chunks
git add file1.py
git commit -m "feat: add validation"

git add file2.py
git commit -m "feat: add error handling"

# Continue rebase
git rebase --continue
```