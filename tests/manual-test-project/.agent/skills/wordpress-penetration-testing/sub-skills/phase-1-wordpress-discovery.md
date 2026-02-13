# Phase 1: WordPress Discovery

Identify WordPress installations:

```bash
# Check for WordPress indicators
curl -s http://target.com | grep -i wordpress
curl -s http://target.com | grep -i "wp-content"
curl -s http://target.com | grep -i "wp-includes"

# Check common WordPress paths
curl -I http://target.com/wp-login.php
curl -I http://target.com/wp-admin/
curl -I http://target.com/wp-content/
curl -I http://target.com/xmlrpc.php

# Check meta generator tag
curl -s http://target.com | grep "generator"

# Nmap WordPress detection
nmap -p 80,443 --script http-wordpress-enum target.com
```

Key WordPress files and directories:
- `/wp-admin/` - Admin dashboard
- `/wp-login.php` - Login page
- `/wp-content/` - Themes, plugins, uploads
- `/wp-includes/` - Core files
- `/xmlrpc.php` - XML-RPC interface
- `/wp-config.php` - Configuration (not accessible if secure)
- `/readme.html` - Version information