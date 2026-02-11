# 4. Generate React Component Tests

```typescript
function generateReactComponentTest(componentName: string): string {
  return `
import { render, screen, fireEvent } from '@testing-library/react';
import { ${componentName} } from './${componentName}';

describe('${componentName}', () => {
  it('renders without crashing', () => {
    render(<${componentName} />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays correct initial state', () => {
    render(<${componentName} />);
    const element = screen.getByTestId('${componentName.toLowerCase()}');
    expect(element).toBeVisible();
  });

  it('handles user interaction', () => {
    render(<${componentName} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText(/clicked/i)).toBeInTheDocument();
  });

  it('updates props correctly', () => {
    const { rerender } = render(<${componentName} value="initial" />);
    expect(screen.getByText('initial')).toBeInTheDocument();

    rerender(<${componentName} value="updated" />);
    expect(screen.getByText('updated')).toBeInTheDocument();
  });
});
`;
}
```