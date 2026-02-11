# Button

Interactive button with variants:

```tsx
<Button
  onPress={handlePress}
  variant="solid"
  size="md"
  isLoading={loading}
  isDisabled={disabled}
>
  Click Me
</Button>
```

| Variant | Use For |
|---------|---------|
| `solid` | Primary actions |
| `outline` | Secondary actions |
| `ghost` | Tertiary/subtle actions |
| `link` | Inline actions |