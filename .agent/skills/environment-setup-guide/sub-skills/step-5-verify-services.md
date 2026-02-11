# Step 5: Verify Services

\`\`\`bash
# Check running containers
docker ps

# Test database connection
docker-compose exec db psql -U postgres -d mydb
\`\`\`
```

## Best Practices