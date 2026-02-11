# Phase 9: TLS/SSL Security Testing

Test encryption configuration:

```bash
# STARTTLS support check
openssl s_client -connect TARGET_IP:25 -starttls smtp

# Direct SSL (port 465)
openssl s_client -connect TARGET_IP:465

# Cipher enumeration
nmap --script ssl-enum-ciphers -p 25 TARGET_IP
```