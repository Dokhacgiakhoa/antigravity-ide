# Color Tokens

```tsx
// CORRECT - Semantic tokens
<Text color="$textPrimary" />
<Box backgroundColor="$backgroundSecondary" />

// WRONG - Hard-coded colors
<Text color="#333333" />
<Box backgroundColor="rgb(245, 245, 245)" />
```

| Semantic Token | Use For |
|----------------|---------|
| `$textPrimary` | Main text |
| `$textSecondary` | Supporting text |
| `$textTertiary` | Disabled/hint text |
| `$primary500` | Brand/accent color |
| `$statusError` | Error states |
| `$statusSuccess` | Success states |