# Transaction Patterns

**Common Issues:**
- Inconsistent data from non-atomic operations
- Deadlocks in concurrent transactions
- Long-running transactions blocking reads
- Nested transaction confusion

**Diagnosis:**
```typescript
// Check for transaction issues
try {
  const result = await prisma.$transaction([...]);
} catch (e) {
  if (e.code === 'P2034') {
    console.log('Transaction conflict detected');
  }
}
```

**Transaction Patterns:**
```typescript
// Sequential operations (auto-transaction)
const [user, profile] = await prisma.$transaction([
  prisma.user.create({ data: userData }),
  prisma.profile.create({ data: profileData }),
]);

// Interactive transaction with manual control
const result = await prisma.$transaction(async (tx) => {
  const user = await tx.user.create({ data: userData });
  
  // Business logic validation
  if (user.email.endsWith('@blocked.com')) {
    throw new Error('Email domain blocked');
  }
  
  const profile = await tx.profile.create({
    data: { ...profileData, userId: user.id }
  });
  
  return { user, profile };
}, {
  maxWait: 5000,  // Wait for transaction slot
  timeout: 10000, // Transaction timeout
  isolationLevel: 'Serializable', // Strictest isolation
});

// Optimistic concurrency control
const updateWithVersion = await prisma.post.update({
  where: { 
    id: postId,
    version: 4.1.0-fractal
  },
  data: {
    content: newContent,
    version: { increment: 1 }
  }
});
```

**Resources:**
- https://www.prisma.io/docs/concepts/components/prisma-client/transactions

## Code Review Checklist