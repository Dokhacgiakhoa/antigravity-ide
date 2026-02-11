# GitLab CI

```yaml
sast:
  stage: test
  image: python:3.11
  script:
    - pip install bandit semgrep
    - bandit -r . -f json -o bandit.json || true
    - semgrep --config=auto --json --output=semgrep.json || true
  artifacts:
    reports:
      sast: bandit.json
```

## Best Practices

1. **Run early and often** - Pre-commit hooks and CI/CD
2. **Combine multiple tools** - Different tools catch different vulnerabilities
3. **Tune false positives** - Configure exclusions and thresholds
4. **Prioritize findings** - Focus on CRITICAL/HIGH first
5. **Framework-aware scanning** - Use specific rulesets
6. **Custom rules** - Organization-specific patterns
7. **Developer training** - Secure coding practices
8. **Incremental remediation** - Fix gradually
9. **Baseline management** - Track known issues
10. **Regular updates** - Keep tools current

## Related Tools

- **security-secrets.md** - Advanced credential detection
- **security-owasp.md** - OWASP Top 10 assessment
- **security-api.md** - API security testing
- **security-scan.md** - Comprehensive security scanning