# State Management

```typescript
// ✅ GOOD: Proper state updates
const [count, setCount] = useState(0)

// Functional update for state based on previous state
setCount(prev => prev + 1)

// ❌ BAD: Direct state reference
setCount(count + 1)  // Can be stale in async scenarios
```