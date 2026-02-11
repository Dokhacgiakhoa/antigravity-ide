# 4.1 Automated Rebasing

```yaml
# .github/workflows/auto-rebase.yml
name: Auto Rebase

on:
  issue_comment:
    types: [created]

jobs:
  rebase:
    if: github.event.issue.pull_request && contains(github.event.comment.body, '/rebase')
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Setup Git
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"

      - name: Rebase PR
        run: |
          # Fetch PR branch
          gh pr checkout ${{ github.event.issue.number }}

          # Rebase onto main
          git fetch origin main
          git rebase origin/main

          # Force push
          git push --force-with-lease
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      - name: Comment result
        uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: context.issue.number,
              body: '✅ Successfully rebased onto main!'
            })
```