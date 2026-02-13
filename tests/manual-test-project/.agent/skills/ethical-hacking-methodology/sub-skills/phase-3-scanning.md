# Phase 3: Scanning

Active enumeration of target systems:

**Host Discovery**
```bash
# Ping sweep
nmap -sn 192.168.1.0/24

# ARP scan (local network)
arp-scan -l

# Discover live hosts
nmap -sP 192.168.1.0/24
```

**Port Scanning**
```bash
# TCP SYN scan (stealth)
nmap -sS target.com

# Full TCP connect scan
nmap -sT target.com

# UDP scan
nmap -sU target.com

# All ports scan
nmap -p- target.com

# Top 1000 ports with service detection
nmap -sV target.com

# Aggressive scan (OS, version, scripts)
nmap -A target.com
```

**Service Enumeration**
```bash
# Specific service scripts
nmap --script=http-enum target.com
nmap --script=smb-enum-shares target.com
nmap --script=ftp-anon target.com

# Vulnerability scanning
nmap --script=vuln target.com
```

**Common Port Reference**
| Port | Service | Notes |
|------|---------|-------|
| 21 | FTP | File transfer |
| 22 | SSH | Secure shell |
| 23 | Telnet | Unencrypted remote |
| 25 | SMTP | Email |
| 53 | DNS | Name resolution |
| 80 | HTTP | Web |
| 443 | HTTPS | Secure web |
| 445 | SMB | Windows shares |
| 3306 | MySQL | Database |
| 3389 | RDP | Remote desktop |