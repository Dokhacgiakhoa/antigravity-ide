# Migrations

**Common Issues:**
- Migration conflicts in team environments
- Failed migrations leaving database in inconsistent state
- Shadow database issues during development
- Production deployment migration failures

**Diagnosis:**
```bash
# Check migration status
npx prisma migrate status

# View pending migrations
ls -la prisma/migrations/

# Check migration history table
# (use database-specific command)
```

**Prioritized Fixes:**
1. **Minimal**: Reset development database with `prisma migrate reset`
2. **Better**: Manually fix migration SQL, use `prisma migrate resolve`
3. **Complete**: Squash migrations, create baseline for fresh setup

**Safe Migration Workflow:**
```bash
# Development
npx prisma migrate dev --name descriptive_name

# Production (never use migrate dev!)
npx prisma migrate deploy

# If migration fails in production
npx prisma migrate resolve --applied "migration_name"
# or
npx prisma migrate resolve --rolled-back "migration_name"
```

**Resources:**
- https://www.prisma.io/docs/concepts/components/prisma-migrate
- https://www.prisma.io/docs/guides/deployment/deploy-database-changes