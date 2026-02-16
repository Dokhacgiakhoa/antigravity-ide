# Template 3: Service Profile with Retries

```yaml
apiVersion: linkerd.io/v1alpha2
kind: ServiceProfile
metadata:
  name: my-service.my-namespace.svc.cluster.local
  namespace: my-namespace
spec:
  routes:
    - name: GET /api/users
      condition:
        method: GET
        pathRegex: /api/users
      responseClasses:
        - condition:
            status:
              min: 500
              max: 599
          isFailure: true
      isRetryable: true
    - name: POST /api/users
      condition:
        method: POST
        pathRegex: /api/users
      # POST not retryable by default
      isRetryable: false
    - name: GET /api/users/{id}
      condition:
        method: GET
        pathRegex: /api/users/[^/]+
      timeout: 5s
      isRetryable: true
  retryBudget:
    retryRatio: 0.2
    minRetriesPerSecond: 10
    ttl: 10s
```