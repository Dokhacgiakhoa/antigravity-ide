# Troubleshooting

```bash
# AWS VPN
aws ec2 describe-vpn-connections
aws ec2 get-vpn-connection-telemetry

# Azure VPN
az network vpn-connection show
az network vpn-connection show-device-config-script
```

## Cost Optimization

1. **Right-size connections** based on traffic
2. **Use VPN for low-bandwidth** workloads
3. **Consolidate traffic** through fewer connections
4. **Minimize data transfer** costs
5. **Use Direct Connect** for high bandwidth
6. **Implement caching** to reduce traffic

## Reference Files

- `references/vpn-setup.md` - VPN configuration guide
- `references/direct-connect.md` - Direct Connect setup

## Related Skills

- `multi-cloud-architecture` - For architecture decisions
- `terraform-module-library` - For IaC implementation