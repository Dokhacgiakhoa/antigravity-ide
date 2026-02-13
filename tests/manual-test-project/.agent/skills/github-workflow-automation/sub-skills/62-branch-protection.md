# 6.2 Branch Protection

```yaml
# Set up via GitHub API
- name: Configure branch protection
  uses: actions/github-script@v7
  with:
    script: |
      await github.rest.repos.updateBranchProtection({
        owner: context.repo.owner,
        repo: context.repo.repo,
        branch: 'main',
        required_status_checks: {
          strict: true,
          contexts: ['test', 'lint', 'ai-review']
        },
        enforce_admins: true,
        required_pull_request_reviews: {
          required_approving_review_count: 1,
          require_code_owner_reviews: true,
          dismiss_stale_reviews: true
        },
        restrictions: null,
        required_linear_history: true,
        allow_force_pushes: false,
        allow_deletions: false
      });
```

---

## Best Practices