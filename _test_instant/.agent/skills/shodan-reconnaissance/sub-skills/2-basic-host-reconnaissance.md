# 2. Basic Host Reconnaissance

#### Query Single Host
```bash
# Get all information about an IP
shodan host 1.1.1.1

# Example output:
# 1.1.1.1
# Hostnames: one.one.one.one
# Country: Australia
# Organization: Mountain View Communications
# Number of open ports: 3
# Ports:
#   53/udp
#   80/tcp
#   443/tcp
```

#### Check if Host is Honeypot
```bash
# Get honeypot probability score
shodan honeyscore 192.168.1.100

# Output: Not a honeypot
#         Score: 0.3
```