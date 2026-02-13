# Connection Management

**Common Issues:**
- Connection pool exhaustion
- "Too many connections" errors
- Connection leaks in serverless environments
- Slow initial connections

**Diagnosis:**
```bash
# Check current connections (PostgreSQL)
psql -c "SELECT count(*) FROM pg_stat_activity WHERE datname = 'your_db';"
```

**Prioritized Fixes:**
1. **Minimal**: Configure connection limit in DATABASE_URL
2. **Better**: Implement proper connection lifecycle management
3. **Complete**: Use connection pooler (PgBouncer) for high-traffic apps

**Connection Configuration:**
```typescript
// For serverless (Vercel, AWS Lambda)
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query'] : [],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Graceful shutdown
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});
```

```env
# Connection URL with pool settings
DATABASE_URL="postgresql://user:pass@host:5432/db?connection_limit=5&pool_timeout=10"
```

**Resources:**
- https://www.prisma.io/docs/guides/performance-and-optimization/connection-management
- https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-vercel