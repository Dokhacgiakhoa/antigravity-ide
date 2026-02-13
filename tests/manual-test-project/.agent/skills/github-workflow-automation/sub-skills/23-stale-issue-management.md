# 2.3 Stale Issue Management

```yaml
# .github/workflows/stale.yml
name: Manage Stale Issues

on:
  schedule:
    - cron: "0 0 * * *" # Daily

jobs:
  stale:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/stale@v9
        with:
          stale-issue-message: |
            This issue has been automatically marked as stale because it has not had 
            recent activity. It will be closed in 14 days if no further activity occurs.

            If this issue is still relevant:
            - Add a comment with an update
            - Remove the `stale` label

            Thank you for your contributions! 🙏

          stale-pr-message: |
            This PR has been automatically marked as stale. Please update it or it 
            will be closed in 14 days.

          days-before-stale: 60
          days-before-close: 14
          stale-issue-label: "stale"
          stale-pr-label: "stale"
          exempt-issue-labels: "pinned,security,in-progress"
          exempt-pr-labels: "pinned,security"
```

---

## 3. CI/CD Integration