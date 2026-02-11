# 6. Statistics and Analysis

#### Get Search Statistics
```bash
# Default statistics (top 10 countries, orgs)
shodan stats nginx

# Custom facets
shodan stats --facets domain,port,asn --limit 5 nginx

# Save to CSV
shodan stats --facets country,org -O stats.csv apache
```