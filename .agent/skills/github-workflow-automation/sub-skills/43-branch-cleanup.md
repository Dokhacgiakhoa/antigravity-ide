# 4.3 Branch Cleanup

```yaml
# .github/workflows/branch-cleanup.yml
name: Branch Cleanup

on:
  schedule:
    - cron: '0 0 * * 0'  # Weekly
  workflow_dispatch:

jobs:
  cleanup:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Find stale branches
        id: stale
        run: |
          # Branches not updated in 30 days
          stale=$(git for-each-ref --sort=-committerdate refs/remotes/origin \
            --format='%(refname:short) %(committerdate:relative)' | \
            grep -E '[3-9][0-9]+ days|[0-9]+ months|[0-9]+ years' | \
            grep -v 'origin/main\|origin/develop' | \
            cut -d' ' -f1 | sed 's|origin/||')

          echo "branches<<EOF" >> $GITHUB_OUTPUT
          echo "$stale" >> $GITHUB_OUTPUT
          echo "EOF" >> $GITHUB_OUTPUT

      - name: Create cleanup PR
        if: steps.stale.outputs.branches != ''
        uses: actions/github-script@v7
        with:
          script: |
            const branches = `${{ steps.stale.outputs.branches }}`.split('\n').filter(Boolean);

            const body = `## 🧹 Stale Branch Cleanup

The following branches haven't been updated in over 30 days:

${branches.map(b => `- \`${b}\``).join('\n')}