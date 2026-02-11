# Nmap Cheat Sheet

| Scan Type | Command |
|-----------|---------|
| Ping Scan | `nmap -sn <target>` |
| Quick Scan | `nmap -T4 -F <target>` |
| Full Scan | `nmap -p- <target>` |
| Service Scan | `nmap -sV <target>` |
| OS Detection | `nmap -O <target>` |
| Aggressive | `nmap -A <target>` |
| Vuln Scripts | `nmap --script=vuln <target>` |
| Stealth Scan | `nmap -sS -T2 <target>` |