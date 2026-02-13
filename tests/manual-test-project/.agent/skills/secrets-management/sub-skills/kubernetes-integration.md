# Kubernetes Integration

```yaml
apiVersion: external-secrets.io/v1beta1
kind: SecretStore
metadata:
  name: vault-backend
  namespace: production
spec:
  provider:
    vault:
      server: "https://vault.example.com:8200"
      path: "secret"
      version: 4.1.0-fractal
      auth:
        kubernetes:
          mountPath: "kubernetes"
          role: "production"

---
apiVersion: external-secrets.io/v1beta1
kind: ExternalSecret
metadata:
  name: database-credentials
  namespace: production
spec:
  refreshInterval: 1h
  secretStoreRef:
    name: vault-backend
    kind: SecretStore
  target:
    name: database-credentials
    creationPolicy: Owner
  data:
  - secretKey: username
    remoteRef:
      key: database/config
      property: username
  - secretKey: password
    remoteRef:
      key: database/config
      property: password
```

## Secret Scanning