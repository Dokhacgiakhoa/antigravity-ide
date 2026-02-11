# 3. Generate JavaScript/TypeScript Tests with Jest

```typescript
interface TestCase {
  name: string;
  setup?: string;
  execution: string;
  assertions: string[];
}

class JestTestGenerator {
  generateTests(functionName: string, params: string[]): string {
    const tests: TestCase[] = [
      {
        name: `${functionName} returns expected result with valid input`,
        execution: `const result = ${functionName}(${this.generateMockParams(params)})`,
        assertions: ['expect(result).toBeDefined()', 'expect(result).not.toBeNull()']
      },
      {
        name: `${functionName} handles null input gracefully`,
        execution: `const result = ${functionName}(null)`,
        assertions: ['expect(result).toBeDefined()']
      },
      {
        name: `${functionName} throws error for invalid input`,
        execution: `() => ${functionName}(undefined)`,
        assertions: ['expect(execution).toThrow()']
      }
    ];

    return this.formatJestSuite(functionName, tests);
  }

  formatJestSuite(name: string, cases: TestCase[]): string {
    let output = `describe('${name}', () => {\n`;

    for (const testCase of cases) {
      output += `  it('${testCase.name}', () => {\n`;
      if (testCase.setup) {
        output += `    ${testCase.setup}\n`;
      }
      output += `    const execution = ${testCase.execution};\n`;
      for (const assertion of testCase.assertions) {
        output += `    ${assertion};\n`;
      }
      output += `  });\n\n`;
    }

    output += '});\n';
    return output;
  }

  generateMockParams(params: string[]): string {
    return params.map(p => `mock${p.charAt(0).toUpperCase() + p.slice(1)}`).join(', ');
  }
}
```