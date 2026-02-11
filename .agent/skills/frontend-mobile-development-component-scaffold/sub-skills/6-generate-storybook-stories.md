# 6. Generate Storybook Stories

```typescript
class StorybookGenerator {
  generateStories(spec: ComponentSpec): string {
    return `
import type { Meta, StoryObj } from '@storybook/react';
import { ${spec.name} } from './${spec.name}';

const meta: Meta<typeof ${spec.name}> = {
  title: 'Components/${spec.name}',
  component: ${spec.name},
  tags: ['autodocs'],
  argTypes: {
${spec.props.map(p => `    ${p.name}: { control: '${this.inferControl(p.type)}', description: '${p.description}' },`).join('\n')}
  },
};

export default meta;
type Story = StoryObj<typeof ${spec.name}>;

export const Default: Story = {
  args: {
${spec.props.map(p => `    ${p.name}: ${p.defaultValue || this.getMockValue(p.type)},`).join('\n')}
  },
};

export const Interactive: Story = {
  args: {
    ...Default.args,
  },
};
`;
  }

  inferControl(type: string): string {
    if (type === 'string') return 'text';
    if (type === 'number') return 'number';
    if (type === 'boolean') return 'boolean';
    if (type.includes('[]')) return 'object';
    return 'text';
  }
}
```

## Output Format

1. **Component File**: Fully implemented React/React Native component
2. **Type Definitions**: TypeScript interfaces and types
3. **Styles**: CSS modules, styled-components, or Tailwind config
4. **Tests**: Complete test suite with coverage
5. **Stories**: Storybook stories for documentation
6. **Index File**: Barrel exports for clean imports

Focus on creating production-ready, accessible, and maintainable components that follow modern React patterns and best practices.