# 6. Prevention Checklist

**HTML Manipulation**
- Never use innerHTML with user input
- Prefer textContent for text content
- Sanitize with DOMPurify before rendering HTML
- Avoid document.write entirely

**URL Handling**
- Validate all URLs before assignment
- Block javascript: and data: protocols
- Use URL constructor for validation
- Sanitize href attributes

**Event Handlers**
- Use addEventListener instead of inline handlers
- Sanitize all event handler input
- Avoid string-to-code patterns

**Framework-Specific**
- React: Sanitize before using unsafe APIs
- Vue: Prefer v-text over v-html
- Angular: Use built-in sanitization
- Avoid bypassing framework security features

## Output Format

1. **Vulnerability Report**: Detailed findings with severity levels
2. **Risk Analysis**: Impact assessment for each vulnerability
3. **Fix Recommendations**: Secure code examples
4. **Sanitization Guide**: DOMPurify usage patterns
5. **Prevention Checklist**: Best practices for XSS prevention

Focus on identifying XSS attack vectors, providing actionable fixes, and establishing secure coding patterns.