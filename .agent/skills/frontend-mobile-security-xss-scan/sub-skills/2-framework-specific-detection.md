# 2. Framework-Specific Detection

```typescript
class ReactXSSScanner {
  scanReactComponent(code: string): XSSFinding[] {
    const findings: XSSFinding[] = [];

    // Check for unsafe React patterns
    const unsafePatterns = [
      'dangerouslySetInnerHTML',
      'createMarkup',
      'rawHtml'
    ];

    unsafePatterns.forEach(pattern => {
      if (code.includes(pattern) && !code.includes('DOMPurify')) {
        findings.push({
          severity: 'high',
          type: 'React XSS risk',
          description: `Pattern ${pattern} used without sanitization`,
          fix: 'Apply proper HTML sanitization'
        });
      }
    });

    return findings;
  }
}

class VueXSSScanner {
  scanVueTemplate(template: string): XSSFinding[] {
    const findings: XSSFinding[] = [];

    if (template.includes('v-html')) {
      findings.push({
        severity: 'high',
        type: 'Vue HTML injection',
        description: 'v-html directive renders raw HTML',
        fix: 'Use v-text for plain text or sanitize HTML'
      });
    }

    return findings;
  }
}
```