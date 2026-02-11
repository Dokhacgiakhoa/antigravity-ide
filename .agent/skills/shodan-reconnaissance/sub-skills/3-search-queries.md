# 3. Search Queries

#### Basic Search (Free)
```bash
# Simple keyword search (no credits consumed)
shodan search apache

# Specify output fields
shodan search --fields ip_str,port,os smb
```

#### Filtered Search (1 Credit)
```bash
# Product-specific search
shodan search product:mongodb

# Search with multiple filters
shodan search product:nginx country:US city:"New York"
```

#### Count Results
```bash
# Get result count without consuming credits
shodan count openssh
# Output: 23128

shodan count openssh 7
# Output: 219
```

#### Download Results
```bash
# Download 1000 results (default)
shodan download results.json.gz "apache country:US"

# Download specific number of results
shodan download --limit 5000 results.json.gz "nginx"

# Download all available results
shodan download --limit -1 all_results.json.gz "query"
```

#### Parse Downloaded Data
```bash
# Extract specific fields from downloaded data
shodan parse --fields ip_str,port,hostnames results.json.gz

# Filter by specific criteria
shodan parse --fields location.country_code3,ip_str -f port:22 results.json.gz

# Export to CSV format
shodan parse --fields ip_str,port,org --separator , results.json.gz > results.csv
```