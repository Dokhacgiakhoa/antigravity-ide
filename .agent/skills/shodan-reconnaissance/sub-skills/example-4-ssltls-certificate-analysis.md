# Example 4: SSL/TLS Certificate Analysis

```bash
# Find hosts with specific SSL cert
shodan search 'ssl.cert.subject.cn:*.example.com'

# Find expired certificates
shodan search 'ssl.cert.expired:true org:"Company"'

# Find self-signed certificates
shodan search 'ssl.cert.issuer.cn:self-signed'
```