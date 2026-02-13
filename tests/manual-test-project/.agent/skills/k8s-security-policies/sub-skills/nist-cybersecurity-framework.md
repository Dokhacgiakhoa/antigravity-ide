# NIST Cybersecurity Framework

- Implement defense in depth
- Use network segmentation
- Configure security monitoring
- Implement access controls
- Enable logging and monitoring

## Troubleshooting

**NetworkPolicy not working:**
```bash
# Check if CNI supports NetworkPolicy
kubectl get nodes -o wide
kubectl describe networkpolicy <name>
```

**RBAC permission denied:**
```bash
# Check effective permissions
kubectl auth can-i list pods --as system:serviceaccount:default:my-sa
kubectl auth can-i '*' '*' --as system:serviceaccount:default:my-sa
```

## Reference Files

- `assets/network-policy-template.yaml` - Network policy examples
- `assets/pod-security-template.yaml` - Pod security policies
- `references/rbac-patterns.md` - RBAC configuration patterns

## Related Skills

- `k8s-manifest-generator` - For creating secure manifests
- `gitops-workflow` - For automated policy deployment