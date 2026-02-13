# 3.2 Deployment with AI Validation

```yaml
# .github/workflows/deploy.yml
name: Deploy with AI Validation

on:
  push:
    branches: [main]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Get deployment changes
        id: changes
        run: |
          # Get commits since last deployment
          last_deploy=$(git describe --tags --abbrev=0 2>/dev/null || echo "")
          if [ -n "$last_deploy" ]; then
            changes=$(git log --oneline $last_deploy..HEAD)
          else
            changes=$(git log --oneline -10)
          fi
          echo "changes<<EOF" >> $GITHUB_OUTPUT
          echo "$changes" >> $GITHUB_OUTPUT
          echo "EOF" >> $GITHUB_OUTPUT

      - name: AI Risk Assessment
        id: assess
        uses: actions/github-script@v7
        with:
          script: |
            // Analyze changes for deployment risk
            const prompt = `
            Analyze these changes for deployment risk:

            ${process.env.CHANGES}

            Return JSON:
            {
              "riskLevel": "low" | "medium" | "high",
              "concerns": ["concern1", "concern2"],
              "recommendations": ["rec1", "rec2"],
              "requiresManualApproval": boolean
            }
            `;

            // Call AI and parse response
            const analysis = await callAI(prompt);

            if (analysis.riskLevel === 'high') {
              core.setFailed('High-risk deployment detected. Manual review required.');
            }

            return analysis;
        env:
          CHANGES: ${{ steps.changes.outputs.changes }}

  deploy:
    needs: validate
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: Deploy
        run: |
          echo "Deploying to production..."
          # Deployment commands here
```