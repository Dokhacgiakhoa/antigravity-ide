# 5. Analyze Service Logs

Review logs for security analysis:

**HTTP/HTTPS Logs:**

```bash
# Apache access log
sudo tail -f /var/log/apache2/access.log

# Apache error log
sudo tail -f /var/log/apache2/error.log

# Windows IIS logs
# Location: C:\inetpub\logs\LogFiles\W3SVC1\
```

**Parse Log for Credentials:**

```bash
# Search for POST requests
grep "POST" /var/log/apache2/access.log

# Extract user agents
awk '{print $12}' /var/log/apache2/access.log | sort | uniq -c
```

## Quick Reference