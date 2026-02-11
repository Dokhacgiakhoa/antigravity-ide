# Phase 6: Open Relay Testing

Test for unauthorized email relay:

```bash
# Using Nmap
nmap -p 25 --script smtp-open-relay TARGET_IP

# Manual testing via Telnet
telnet TARGET_IP 25
HELO attacker.com
MAIL FROM:<test@attacker.com>
RCPT TO:<victim@external-domain.com>
DATA
Subject: Relay Test
This is a test.
.
QUIT

# If accepted (250 OK), server is open relay
```

Using Metasploit:

```bash
use auxiliary/scanner/smtp/smtp_relay
set RHOSTS TARGET_IP
run
```

Test variations:

```bash
# Test different sender/recipient combinations
MAIL FROM:<>
MAIL FROM:<test@[attacker_IP]>
MAIL FROM:<test@target.com>

RCPT TO:<test@external.com>
RCPT TO:<"test@external.com">
RCPT TO:<test%external.com@target.com>
```