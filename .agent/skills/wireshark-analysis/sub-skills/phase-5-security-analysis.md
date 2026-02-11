# Phase 5: Security Analysis

#### Detect Port Scanning
Identify reconnaissance activity:

```
# SYN scan detection (many ports, same source)
ip.src == SUSPECT_IP && tcp.flags.syn == 1

# Review Statistics > Conversations for anomalies
# Look for single source hitting many destination ports
```

#### Identify Suspicious Traffic
Filter for anomalies:

```
# Traffic to unusual ports
tcp.dstport > 1024 && tcp.dstport < 49152

# Traffic outside trusted network
!(ip.addr == 192.168.1.0/24)

# Unusual DNS queries
dns.qry.name contains "suspicious-domain"

# Large data transfers
frame.len > 1400
```

#### ARP Spoofing Detection
Identify ARP attacks:

```
# Duplicate ARP responses
arp.duplicate-address-frame

# ARP traffic analysis
arp

# Look for:
# - Multiple MACs for same IP
# - Gratuitous ARP floods
# - Unusual ARP patterns
```

#### Examine Downloads
Analyze file transfers:

```
# HTTP file downloads
http.request.method == "GET" && http contains "Content-Disposition"

# Follow HTTP Stream to view file content
# Use File > Export Objects > HTTP to extract files
```

#### DNS Analysis
Investigate DNS activity:

```
# All DNS traffic
dns

# DNS queries only
dns.flags.response == 0

# DNS responses only
dns.flags.response == 1

# Failed DNS lookups
dns.flags.rcode != 0

# Specific domain queries
dns.qry.name contains "domain.com"
```