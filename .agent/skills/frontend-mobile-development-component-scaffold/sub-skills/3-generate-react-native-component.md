# 3. Generate React Native Component

```typescript
class ReactNativeGenerator {
  generateComponent(spec: ComponentSpec): string {
    return `
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AccessibilityInfo
} from 'react-native';

interface ${spec.name}Props {
${spec.props.map(p => `  ${p.name}${p.required ? '' : '?'}: ${this.mapNativeType(p.type)};`).join('\n')}
}

export const ${spec.name}: React.FC<${spec.name}Props> = ({
  ${spec.props.map(p => p.name).join(',\n  ')}
}) => {
  return (
    <View
      style={styles.container}
      accessible={true}
      accessibilityLabel="${spec.name} component"
    >
      <Text style={styles.text}>
        {/* Component content */}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});
`;
  }

  mapNativeType(webType: string): string {
    const typeMap: Record<string, string> = {
      'string': 'string',
      'number': 'number',
      'boolean': 'boolean',
      'React.ReactNode': 'React.ReactNode',
      'Function': '() => void'
    };
    return typeMap[webType] || webType;
  }
}
```