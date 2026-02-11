# 17. "Typeorm connection error breaks entire nestjs application"

**Frequency**: MEDIUM | **Complexity**: MEDIUM
**Real Example**: typeorm#520
Preventing app crash on DB failure:
1. Wrap connection in try-catch in useFactory
2. Allow app to start without database
3. Implement health checks for DB status
4. Use retryAttempts and retryDelay options

## Common Patterns & Solutions