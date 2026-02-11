# Phase 5: User Enumeration

Enumerate valid email addresses:

```bash
# Using smtp-user-enum with VRFY
smtp-user-enum -M VRFY -U /usr/share/wordlists/users.txt -t TARGET_IP

# Using EXPN method
smtp-user-enum -M EXPN -U /usr/share/wordlists/users.txt -t TARGET_IP

# Using RCPT method
smtp-user-enum -M RCPT -U /usr/share/wordlists/users.txt -t TARGET_IP

# Specify port and domain
smtp-user-enum -M VRFY -U users.txt -t TARGET_IP -p 25 -d target.com
```

Using Metasploit:

```bash
use auxiliary/scanner/smtp/smtp_enum
set RHOSTS TARGET_IP
set USER_FILE /usr/share/wordlists/metasploit/unix_users.txt
set UNIXONLY true
run
```

Using Nmap:

```bash
# SMTP user enumeration script
nmap --script smtp-enum-users -p 25 TARGET_IP

# With custom user list
nmap --script smtp-enum-users --script-args smtp-enum-users.methods={VRFY,EXPN,RCPT} -p 25 TARGET_IP
```