# Environment Secrets

```yaml
deploy:
  runs-on: ubuntu-latest
  environment: production
  steps:
  - name: Deploy
    run: |
      echo "Deploying with ${{ secrets.PROD_API_KEY }}"
```

**Reference:** See `references/github-secrets.md`

## GitLab CI/CD Variables