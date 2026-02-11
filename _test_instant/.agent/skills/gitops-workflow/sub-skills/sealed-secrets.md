# Sealed Secrets

```bash
# Encrypt secret
kubeseal --format yaml < secret.yaml > sealed-secret.yaml

# Commit sealed-secret.yaml to Git
```

## Best Practices

1. **Use separate repos or branches** for different environments
2. **Implement RBAC** for Git repositories
3. **Enable notifications** for sync failures
4. **Use health checks** for custom resources
5. **Implement approval gates** for production
6. **Keep secrets out of Git** (use External Secrets)
7. **Use App of Apps pattern** for organization
8. **Tag releases** for easy rollback
9. **Monitor sync status** with alerts
10. **Test changes** in staging first

## Troubleshooting

**Sync failures:**
```bash
argocd app get my-app
argocd app sync my-app --prune
```

**Out of sync status:**
```bash
argocd app diff my-app
argocd app sync my-app --force
```

## Related Skills

- `k8s-manifest-generator` - For creating manifests
- `helm-chart-scaffolding` - For packaging applications