# 3.3 Rollback Automation

```yaml
# .github/workflows/rollback.yml
name: Automated Rollback

on:
  workflow_dispatch:
    inputs:
      reason:
        description: "Reason for rollback"
        required: true

jobs:
  rollback:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Find last stable version
        id: stable
        run: |
          # Find last successful deployment
          stable=$(git tag -l 'v*' --sort=-version:refname | head -1)
          echo "version=$stable" >> $GITHUB_OUTPUT

      - name: Rollback
        run: |
          git checkout ${{ steps.stable.outputs.version }}
          # Deploy stable version
          npm run deploy

      - name: Notify team
        uses: slackapi/slack-github-action@v1
        with:
          payload: |
            {
              "text": "🔄 Production rolled back to ${{ steps.stable.outputs.version }}",
              "blocks": [
                {
                  "type": "section",
                  "text": {
                    "type": "mrkdwn",
                    "text": "*Rollback executed*\n• Version: `${{ steps.stable.outputs.version }}`\n• Reason: ${{ inputs.reason }}\n• Triggered by: ${{ github.actor }}"
                  }
                }
              ]
            }
```

---

## 4. Git Operations