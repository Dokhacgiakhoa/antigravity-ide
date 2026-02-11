# Evasion Techniques

- Use slow brute-force: `-t 1 -w 5`
- Distribute attacks across IPs
- Use timing-based enumeration carefully
- Respect lockout thresholds

## Troubleshooting

| Issue | Solutions |
|-------|-----------|
| Connection Refused | Verify SSH running; check firewall; confirm port; test from different IP |
| Authentication Failures | Verify username; check password policy; key permissions (600); authorized_keys format |
| Tunnel Not Working | Check GatewayPorts/AllowTcpForwarding in sshd_config; verify firewall; use `ssh -v` |