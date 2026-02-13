# Phase 3: Banner Grabbing

Retrieve SMTP server information:

```bash
# Using Telnet
telnet TARGET_IP 25
# Response: 220 mail.target.com ESMTP Postfix

# Using Netcat
nc TARGET_IP 25
# Response: 220 mail.target.com ESMTP

# Using Nmap
nmap -sV -p 25 TARGET_IP
# Version detection extracts banner info

# Manual SMTP commands
EHLO test
# Response reveals supported extensions
```

Parse banner information:

```
Banner reveals:
- Server software (Postfix, Sendmail, Exchange)
- Version information
- Hostname
- Supported SMTP extensions (STARTTLS, AUTH, etc.)
```