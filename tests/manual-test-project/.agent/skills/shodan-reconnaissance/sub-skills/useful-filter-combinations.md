# Useful Filter Combinations

| Scenario | Query |
|---------|-------|
| Target org recon | `org:"Company Name"` |
| Domain enumeration | `hostname:example.com` |
| Network range scan | `net:192.168.0.0/24` |
| SSL cert search | `ssl.cert.subject.cn:*.target.com` |
| Vulnerable servers | `vuln:CVE-2021-44228 country:US` |
| Exposed admin panels | `http.title:"admin" port:443` |
| Database exposure | `port:3306,5432,27017,6379` |