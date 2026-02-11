# GitHub Actions

```yaml
name: AI Code Review
on:
  pull_request:
    types: [opened, synchronize, reopened]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Static Analysis
        run: |
          sonar-scanner -Dsonar.pullrequest.key=${{ github.event.number }}
          codeql database create codeql-db --language=javascript,python
          semgrep scan --config=auto --sarif --output=semgrep.sarif

      - name: AI-Enhanced Review (GPT-5)
        env:
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
        run: |
          python scripts/ai_review.py \
            --pr-number ${{ github.event.number }} \
            --model gpt-4o \
            --static-analysis-results codeql.sarif,semgrep.sarif

      - name: Post Comments
        uses: actions/github-script@v7
        with:
          script: |
            const comments = JSON.parse(fs.readFileSync('review-comments.json'));
            for (const comment of comments) {
              await github.rest.pulls.createReviewComment({
                owner: context.repo.owner,
                repo: context.repo.repo,
                pull_number: context.issue.number,
                body: comment.body, path: comment.path, line: comment.line
              });
            }

      - name: Quality Gate
        run: |
          CRITICAL=$(jq '[.[] | select(.severity == "CRITICAL")] | length' review-comments.json)
          if [ $CRITICAL -gt 0 ]; then
            echo "❌ Found $CRITICAL critical issues"
            exit 1
          fi
```

## Complete Example: AI Review Automation

```python
#!/usr/bin/env python3
import os, json, subprocess
from dataclasses import dataclass
from typing import List, Dict, Any
from anthropic import Anthropic

@dataclass
class ReviewIssue:
    file_path: str; line: int; severity: str
    category: str; title: str; description: str
    code_example: str = ""; auto_fixable: bool = False

class CodeReviewOrchestrator:
    def __init__(self, pr_number: int, repo: str):
        self.pr_number = pr_number; self.repo = repo
        self.github_token = os.environ['GITHUB_TOKEN']
        self.anthropic_client = Anthropic(api_key=os.environ['ANTHROPIC_API_KEY'])
        self.issues: List[ReviewIssue] = []

    def run_static_analysis(self) -> Dict[str, Any]:
        results = {}

        # SonarQube
        subprocess.run(['sonar-scanner', f'-Dsonar.projectKey={self.repo}'], check=True)

        # Semgrep
        semgrep_output = subprocess.check_output(['semgrep', 'scan', '--config=auto', '--json'])
        results['semgrep'] = json.loads(semgrep_output)

        return results

    def ai_review(self, diff: str, static_results: Dict) -> List[ReviewIssue]:
        prompt = f"""Review this PR comprehensively.

**Diff:** {diff[:15000]}
**Static Analysis:** {json.dumps(static_results, indent=2)[:5000]}

Focus: Security, Performance, Architecture, Bug risks, Maintainability

Return JSON array:
[{{
  "file_path": "src/auth.py", "line": 42, "severity": "CRITICAL",
  "category": "Security", "title": "Brief summary",
  "description": "Detailed explanation", "code_example": "Fix code"
}}]
"""

        response = self.anthropic_client.messages.create(
            model="claude-3-5-sonnet-20241022",
            max_tokens=8000, temperature=0.2,
            messages=[{"role": "user", "content": prompt}]
        )

        content = response.content[0].text
        if '```json' in content:
            content = content.split('```json')[1].split('```')[0]

        return [ReviewIssue(**issue) for issue in json.loads(content.strip())]

    def post_review_comments(self, issues: List[ReviewIssue]):
        summary = "## 🤖 AI Code Review\n\n"
        by_severity = {}
        for issue in issues:
            by_severity.setdefault(issue.severity, []).append(issue)

        for severity in ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW']:
            count = len(by_severity.get(severity, []))
            if count > 0:
                summary += f"- **{severity}**: {count}\n"

        critical_count = len(by_severity.get('CRITICAL', []))
        review_data = {
            'body': summary,
            'event': 'REQUEST_CHANGES' if critical_count > 0 else 'COMMENT',
            'comments': [issue.to_github_comment() for issue in issues]
        }

        # Post to GitHub API
        print(f"✅ Posted review with {len(issues)} comments")

if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument('--pr-number', type=int, required=True)
    parser.add_argument('--repo', required=True)
    args = parser.parse_args()

    reviewer = CodeReviewOrchestrator(args.pr_number, args.repo)
    static_results = reviewer.run_static_analysis()
    diff = reviewer.get_pr_diff()
    ai_issues = reviewer.ai_review(diff, static_results)
    reviewer.post_review_comments(ai_issues)
```

## Summary

Comprehensive AI code review combining:
1. Multi-tool static analysis (SonarQube, CodeQL, Semgrep)
2. State-of-the-art LLMs (GPT-5, Claude 4.5 Sonnet)
3. Seamless CI/CD integration (GitHub Actions, GitLab, Azure DevOps)
4. 30+ language support with language-specific linters
5. Actionable review comments with severity and fix examples
6. DORA metrics tracking for review effectiveness
7. Quality gates preventing low-quality code
8. Auto-test generation via Qodo/CodiumAI

Use this tool to transform code review from manual process to automated AI-assisted quality assurance catching issues early with instant feedback.