# Query Optimization

**Common Issues:**
- N+1 query problems with relations
- Over-fetching data with excessive includes
- Missing select for large models
- Slow queries without proper indexing

**Diagnosis:**
```bash
# Enable query logging
# In schema.prisma or client initialization:
# log: ['query', 'info', 'warn', 'error']
```

```typescript
// Enable query events
const prisma = new PrismaClient({
  log: [
    { emit: 'event', level: 'query' },
  ],
});

prisma.$on('query', (e) => {
  console.log('Query: ' + e.query);
  console.log('Duration: ' + e.duration + 'ms');
});
```

**Prioritized Fixes:**
1. **Minimal**: Add includes for related data to avoid N+1
2. **Better**: Use select to fetch only needed fields
3. **Complete**: Use raw queries for complex aggregations, implement caching

**Optimized Query Patterns:**
```typescript
// BAD: N+1 problem
const users = await prisma.user.findMany();
for (const user of users) {
  const posts = await prisma.post.findMany({ where: { authorId: user.id } });
}

// GOOD: Include relations
const users = await prisma.user.findMany({
  include: { posts: true }
});

// BETTER: Select only needed fields
const users = await prisma.user.findMany({
  select: {
    id: true,
    email: true,
    posts: {
      select: { id: true, title: true }
    }
  }
});

// BEST for complex queries: Use $queryRaw
const result = await prisma.$queryRaw`
  SELECT u.id, u.email, COUNT(p.id) as post_count
  FROM users u
  LEFT JOIN posts p ON p.author_id = u.id
  GROUP BY u.id
`;
```

**Resources:**
- https://www.prisma.io/docs/guides/performance-and-optimization
- https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access