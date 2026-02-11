# Example 2: Vulnerable Service Discovery

```bash
# Find hosts vulnerable to BlueKeep (RDP CVE)
shodan search 'vuln:CVE-2019-0708 country:US'

# Find exposed Elasticsearch with no auth
shodan search 'product:elastic port:9200 -authentication'

# Find Log4j vulnerable systems
shodan search 'vuln:CVE-2021-44228'
```