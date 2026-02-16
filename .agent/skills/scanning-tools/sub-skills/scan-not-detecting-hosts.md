# Scan Not Detecting Hosts

**Solutions:**
1. Try different discovery methods: `nmap -Pn` or `nmap -sn -PS/PA/PU`
2. Check firewall rules blocking ICMP
3. Use TCP SYN scan: `nmap -PS22,80,443`
4. Verify network connectivity