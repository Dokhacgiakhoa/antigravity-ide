# Enumeration Commands Summary

| Purpose | Command |
|---------|---------|
| Kernel version | `uname -a` |
| Current user | `id` |
| Sudo rights | `sudo -l` |
| SUID files | `find / -perm -u=s -type f 2>/dev/null` |
| Capabilities | `getcap -r / 2>/dev/null` |
| Cron jobs | `cat /etc/crontab` |
| Writable dirs | `find / -writable -type d 2>/dev/null` |
| NFS exports | `cat /etc/exports` |