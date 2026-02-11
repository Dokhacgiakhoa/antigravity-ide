# 5. On-Demand Scanning

#### Submit Scan
```bash
# Scan single IP (1 credit per IP)
shodan scan submit 192.168.1.100

# Scan with verbose output (shows scan ID)
shodan scan submit --verbose 192.168.1.100

# Scan and save results
shodan scan submit --filename scan_results.json.gz 192.168.1.100
```

#### Monitor Scan Status
```bash
# List recent scans
shodan scan list

# Check specific scan status
shodan scan status SCAN_ID

# Download scan results later
shodan download --limit -1 results.json.gz scan:SCAN_ID
```

#### Available Scan Protocols
```bash
# List available protocols/modules
shodan scan protocols
```