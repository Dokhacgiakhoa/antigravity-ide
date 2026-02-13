# Phase 2: SSH Enumeration

Gather detailed information about SSH services:

```bash
# Banner grabbing
nc 192.168.1.100 22
# Output: SSH-2.0-OpenSSH_8.4p1 Debian-5

# Telnet banner grab
telnet 192.168.1.100 22

# Nmap version detection with scripts
nmap -sV -p 22 --script ssh-hostkey 192.168.1.100

# Enumerate supported algorithms
nmap -p 22 --script ssh2-enum-algos 192.168.1.100

# Get host keys
nmap -p 22 --script ssh-hostkey --script-args ssh_hostkey=full 192.168.1.100

# Check authentication methods
nmap -p 22 --script ssh-auth-methods --script-args="ssh.user=root" 192.168.1.100
```