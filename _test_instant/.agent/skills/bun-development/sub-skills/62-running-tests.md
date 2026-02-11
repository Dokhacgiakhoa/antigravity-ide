# 6.2 Running Tests

```bash
# Run all tests
bun test

# Run specific file
bun test math.test.ts

# Run matching pattern
bun test --grep "adds"

# Watch mode
bun test --watch

# With coverage
bun test --coverage

# Timeout
bun test --timeout 5000
```