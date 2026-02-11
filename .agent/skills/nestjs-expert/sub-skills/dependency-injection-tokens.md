# Dependency Injection Tokens

```typescript
// Custom provider token
export const CONFIG_OPTIONS = Symbol('CONFIG_OPTIONS');

// Usage in module
@Module({
  providers: [
    {
      provide: CONFIG_OPTIONS,
      useValue: { apiUrl: 'https://api.example.com' }
    }
  ]
})
```