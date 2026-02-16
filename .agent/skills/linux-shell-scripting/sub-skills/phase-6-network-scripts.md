# Phase 6: Network Scripts

**Network Connectivity Checker**
```bash
#!/bin/bash
hosts=("8.8.8.8" "1.1.1.1" "google.com")

echo "Network Connectivity Check"
echo "=========================="

for host in "${hosts[@]}"; do
    if ping -c 1 -W 2 "$host" &>/dev/null; then
        echo "[UP] $host is reachable"
    else
        echo "[DOWN] $host is unreachable"
    fi
done
```

**Website Uptime Checker**
```bash
#!/bin/bash
websites=("https://google.com" "https://github.com")
log_file="uptime_log.txt"

echo "Website Uptime Check - $(date)" >> "$log_file"

for website in "${websites[@]}"; do
    if curl --output /dev/null --silent --head --fail --max-time 10 "$website"; then
        echo "[UP] $website is accessible" | tee -a "$log_file"
    else
        echo "[DOWN] $website is inaccessible" | tee -a "$log_file"
    fi
done
```

**Network Interface Info**
```bash
#!/bin/bash
interface="${1:-eth0}"

echo "Network Interface Information: $interface"
echo "========================================="
ip addr show "$interface" 2>/dev/null || ifconfig "$interface" 2>/dev/null
echo ""
echo "Routing Table:"
ip route | grep "$interface"
```