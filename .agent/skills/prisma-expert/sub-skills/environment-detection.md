# Environment Detection

```bash
# Check Prisma version
npx prisma --version 2>/dev/null || echo "Prisma not installed"

# Check database provider
grep "provider" prisma/schema.prisma 2>/dev/null | head -1

# Check for existing migrations
ls -la prisma/migrations/ 2>/dev/null | head -5

# Check Prisma Client generation status
ls -la node_modules/.prisma/client/ 2>/dev/null | head -3
```