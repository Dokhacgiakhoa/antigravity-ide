# Phase 6: User Enumeration

Discover WordPress users:

```bash
# WPScan user enumeration
wpscan --url http://target.com -e u

# Enumerate specific number of users
wpscan --url http://target.com -e u1-100

# Author ID enumeration (manual)
for i in {1..20}; do
    curl -s "http://target.com/?author=$i" | grep -o 'author/[^/]*/'
done

# JSON API user enumeration (if enabled)
curl -s http://target.com/wp-json/wp/v2/users

# REST API user enumeration
curl -s http://target.com/wp-json/wp/v2/users?per_page=100

# Login error enumeration
curl -X POST -d "log=admin&pwd=wrongpass" http://target.com/wp-login.php
```