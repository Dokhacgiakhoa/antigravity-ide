# Don'ts

- **Don't over-retry** - Can cause cascading failures
- **Don't ignore outlier detection** - Enable circuit breakers
- **Don't mirror to production** - Mirror to test environments
- **Don't skip canary** - Test with small traffic percentage first

## Debugging Commands

```bash
# Check VirtualService configuration
istioctl analyze

# View effective routes
istioctl proxy-config routes deploy/my-app -o json

# Check endpoint discovery
istioctl proxy-config endpoints deploy/my-app

# Debug traffic
istioctl proxy-config log deploy/my-app --level debug
```

## Resources

- [Istio Traffic Management](https://istio.io/latest/docs/concepts/traffic-management/)
- [Virtual Service Reference](https://istio.io/latest/docs/reference/config/networking/virtual-service/)
- [Destination Rule Reference](https://istio.io/latest/docs/reference/config/networking/destination-rule/)