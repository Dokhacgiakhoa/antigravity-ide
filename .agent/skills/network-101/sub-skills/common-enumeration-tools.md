# Common Enumeration Tools

| Tool | Purpose |
|------|---------|
| nmap | Port scanning and scripts |
| nikto | Web vulnerability scanning |
| snmpwalk | SNMP enumeration |
| enum4linux | SMB/NetBIOS enumeration |
| smbclient | SMB connection |
| gobuster | Directory brute forcing |

## Constraints

- Self-signed certificates trigger browser warnings
- SNMP v1/v2c communities transmit in cleartext
- Anonymous SMB access is often disabled by default
- Firewall rules must allow inbound connections
- Lab environments should be isolated from production

## Examples