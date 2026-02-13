# 3. Live Host Discovery

Identify responding hosts:

```bash
# Check which hosts are live with httprobe
cat domains.txt | httprobe -c 80 --prefer-https | anew hosts.txt

# Use httpx for more details
cat domains.txt | httpx -title -tech-detect -status-code -o live_hosts.txt

# Alternative with massdns
massdns -r resolvers.txt -t A -o S domains.txt > resolved.txt
```