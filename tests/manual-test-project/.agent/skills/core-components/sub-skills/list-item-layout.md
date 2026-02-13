# List Item Layout

```tsx
<HStack
  padding="$4"
  gap="$3"
  alignItems="center"
  borderBottomWidth={1}
  borderColor="$borderLight"
>
  <Avatar source={{ uri: imageUrl }} size="md" />
  <VStack flex={1}>
    <Text fontWeight="$semibold">{title}</Text>
    <Text color="$textSecondary" fontSize="$sm">{subtitle}</Text>
  </VStack>
  <Icon name="chevron-right" color="$textTertiary" />
</HStack>
```

## Anti-Patterns

```tsx
// WRONG - Hard-coded values
<View style={{ padding: 16, backgroundColor: '#fff' }}>

// CORRECT - Design tokens
<Box padding="$4" backgroundColor="$backgroundPrimary">


// WRONG - Raw platform components
import { View, Text } from 'react-native';

// CORRECT - Core components
import { Box, Text } from 'components/core';


// WRONG - Inline styles
<Text style={{ fontSize: 18, fontWeight: '600' }}>

// CORRECT - Token props
<Text fontSize="$lg" fontWeight="$semibold">
```

## Component Props Pattern

When creating components, use token-based props:

```tsx
interface CardProps {
  padding?: '$2' | '$4' | '$6';
  variant?: 'elevated' | 'outlined' | 'filled';
  children: React.ReactNode;
}

const Card = ({ padding = '$4', variant = 'elevated', children }: CardProps) => (
  <Box
    padding={padding}
    backgroundColor="$backgroundPrimary"
    borderRadius="$lg"
    {...variantStyles[variant]}
  >
    {children}
  </Box>
);
```

## Integration with Other Skills

- **react-ui-patterns**: Use core components for UI states
- **testing-patterns**: Mock core components in tests
- **storybook**: Document component variants