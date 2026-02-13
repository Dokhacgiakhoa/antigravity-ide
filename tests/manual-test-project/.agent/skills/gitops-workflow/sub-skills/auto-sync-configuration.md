# Auto-Sync Configuration

**ArgoCD:**
```yaml
syncPolicy:
  automated:
    prune: true      # Delete resources not in Git
    selfHeal: true   # Reconcile manual changes
    allowEmpty: false
  retry:
    limit: 5
    backoff:
      duration: 5s
      factor: 2
      maxDuration: 3m
```

**Flux:**
```yaml
spec:
  interval: 1m
  prune: true
  wait: true
  timeout: 5m
```

**Reference:** See `references/sync-policies.md`

## Progressive Delivery