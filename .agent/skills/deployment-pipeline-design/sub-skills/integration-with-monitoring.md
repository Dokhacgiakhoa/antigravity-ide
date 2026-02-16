# Integration with Monitoring

```yaml
- name: Post-deployment verification
  run: |
    # Wait for metrics stabilization
    sleep 60

    # Check error rate
    ERROR_RATE=$(curl -s "$PROMETHEUS_URL/api/v1/query?query=rate(http_errors_total[5m])" | jq '.data.result[0].value[1]')

    if (( $(echo "$ERROR_RATE > 0.01" | bc -l) )); then
      echo "Error rate too high: $ERROR_RATE"
      exit 1
    fi
```

## Reference Files

- `references/pipeline-orchestration.md` - Complex pipeline patterns
- `assets/approval-gate-template.yml` - Approval workflow templates

## Related Skills

- `github-actions-templates` - For GitHub Actions implementation
- `gitlab-ci-patterns` - For GitLab CI implementation
- `secrets-management` - For secrets handling