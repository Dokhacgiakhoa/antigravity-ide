# Phase 5: Log Analysis Scripts

**Error Log Extractor**
```bash
#!/bin/bash
logfile="${1:-/var/log/syslog}"
output_file="error_log_$(date +%Y%m%d).txt"

# Extract lines with "ERROR" from the log file
grep -i "error\|fail\|critical" "$logfile" > "$output_file"
echo "Error log created: $output_file"
echo "Total errors found: $(wc -l < "$output_file")"
```

**Web Server Log Analyzer**
```bash
#!/bin/bash
log_file="${1:-/var/log/apache2/access.log}"

echo "Web Server Log Analysis"
echo "========================"
echo ""
echo "Top 10 IP Addresses:"
awk '{print $1}' "$log_file" | sort | uniq -c | sort -rn | head -10
echo ""
echo "Top 10 Requested URLs:"
awk '{print $7}' "$log_file" | sort | uniq -c | sort -rn | head -10
echo ""
echo "HTTP Status Code Distribution:"
awk '{print $9}' "$log_file" | sort | uniq -c | sort -rn
```