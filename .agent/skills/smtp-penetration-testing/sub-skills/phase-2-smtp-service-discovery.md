# Phase 2: SMTP Service Discovery

Identify SMTP servers and versions:

```bash
# Discover SMTP ports
nmap -p 25,465,587,2525 -sV TARGET_IP

# Aggressive service detection
nmap -sV -sC -p 25 TARGET_IP

# SMTP-specific scripts
nmap --script=smtp-* -p 25 TARGET_IP

# Discover MX records for domain
dig MX target.com
nslookup -type=mx target.com
host -t mx target.com
```