# Slow Scan Performance

**Solutions:**
1. Increase timing: `nmap -T4` or `-T5`
2. Reduce port range: `--top-ports 100`
3. Use Masscan for initial discovery
4. Disable DNS resolution: `-n`