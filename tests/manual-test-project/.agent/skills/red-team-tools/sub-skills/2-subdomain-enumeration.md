# 2. Subdomain Enumeration

Comprehensive subdomain discovery:

```bash
# Create wildcards file
echo "target.com" > wildcards

# Run Amass passively
amass enum -passive -d target.com -src -o amass_passive.txt

# Run Amass actively
amass enum -active -d target.com -src -o amass_active.txt

# Use Subfinder
subfinder -d target.com -silent -o subfinder.txt

# Asset discovery
cat wildcards | assetfinder --subs-only | anew domains.txt

# Alternative subdomain tools
findomain -t target.com -o

# Generate permutations with dnsgen
cat domains.txt | dnsgen - | httprobe > permuted.txt

# Combine all sources
cat amass_*.txt subfinder.txt | sort -u > all_subs.txt
```