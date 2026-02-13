# Phase 2: Basic WPScan Enumeration

Comprehensive WordPress scanning with WPScan:

```bash
# Basic scan
wpscan --url http://target.com/wordpress/

# With API token (for vulnerability data)
wpscan --url http://target.com --api-token YOUR_API_TOKEN

# Aggressive detection mode
wpscan --url http://target.com --detection-mode aggressive

# Output to file
wpscan --url http://target.com -o results.txt

# JSON output
wpscan --url http://target.com -f json -o results.json

# Verbose output
wpscan --url http://target.com -v
```