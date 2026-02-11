# Enumeration Tool Commands

| Tool | Command |
|------|---------|
| smtp-user-enum | `smtp-user-enum -M VRFY -U users.txt -t IP` |
| Nmap | `nmap --script smtp-enum-users -p 25 IP` |
| Metasploit | `use auxiliary/scanner/smtp/smtp_enum` |
| Netcat | `nc IP 25` then manual commands |