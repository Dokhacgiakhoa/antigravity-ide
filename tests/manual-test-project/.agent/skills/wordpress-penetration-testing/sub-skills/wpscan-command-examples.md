# WPScan Command Examples

| Purpose | Command |
|---------|---------|
| Basic scan | `wpscan --url http://target.com` |
| All enumeration | `wpscan --url http://target.com -e at,ap,u` |
| Password attack | `wpscan --url http://target.com -U admin -P pass.txt` |
| Aggressive | `wpscan --url http://target.com --detection-mode aggressive` |

## Constraints and Limitations