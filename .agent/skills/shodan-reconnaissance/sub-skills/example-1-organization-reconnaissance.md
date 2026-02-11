# Example 1: Organization Reconnaissance

```bash
# Find all hosts belonging to target organization
shodan search 'org:"Target Company"'

# Get statistics on their infrastructure
shodan stats --facets port,product,country 'org:"Target Company"'

# Download detailed data
shodan download target_data.json.gz 'org:"Target Company"'

# Parse for specific info
shodan parse --fields ip_str,port,product target_data.json.gz
```