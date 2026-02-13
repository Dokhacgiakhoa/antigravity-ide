# Phase 1: SSH Service Discovery

Identify SSH services on target networks:

```bash
# Quick SSH port scan
nmap -p 22 192.168.1.0/24 --open

# Common alternate SSH ports
nmap -p 22,2222,22222,2200 192.168.1.100

# Full port scan for SSH
nmap -p- --open 192.168.1.100 | grep -i ssh

# Service version detection
nmap -sV -p 22 192.168.1.100
```