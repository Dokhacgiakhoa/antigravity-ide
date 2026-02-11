# 5.1 @mention Bot

```yaml
# .github/workflows/mention-bot.yml
name: AI Mention Bot

on:
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]

jobs:
  respond:
    if: contains(github.event.comment.body, '@ai-helper')
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Extract question
        id: question
        run: |
          # Extract text after @ai-helper
          question=$(echo "${{ github.event.comment.body }}" | sed 's/.*@ai-helper//')
          echo "question=$question" >> $GITHUB_OUTPUT

      - name: Get context
        id: context
        run: |
          if [ "${{ github.event.issue.pull_request }}" != "" ]; then
            # It's a PR - get diff
            gh pr diff ${{ github.event.issue.number }} > context.txt
          else
            # It's an issue - get description
            gh issue view ${{ github.event.issue.number }} --json body -q .body > context.txt
          fi
          echo "context=$(cat context.txt)" >> $GITHUB_OUTPUT
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      - name: AI Response
        uses: actions/github-script@v7
        with:
          script: |
            const response = await ai.chat(`
              Context: ${process.env.CONTEXT}
              
              Question: ${process.env.QUESTION}
              
              Provide a helpful, specific answer. Include code examples if relevant.
            `);

            await github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: context.issue.number,
              body: response
            });
        env:
          CONTEXT: ${{ steps.context.outputs.context }}
          QUESTION: ${{ steps.question.outputs.question }}
```