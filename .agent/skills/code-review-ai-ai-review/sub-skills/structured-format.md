# Structured Format

```typescript
interface ReviewComment {
  path: string; line: number;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | 'INFO';
  category: 'Security' | 'Performance' | 'Bug' | 'Maintainability';
  title: string; description: string;
  codeExample?: string; references?: string[];
  autoFixable: boolean; cwe?: string; cvss?: number;
  effort: 'trivial' | 'easy' | 'medium' | 'hard';
}

const comment: ReviewComment = {
  path: "src/auth/login.ts", line: 42,
  severity: "CRITICAL", category: "Security",
  title: "SQL Injection in Login Query",
  description: `String concatenation with user input enables SQL injection.
**Attack Vector:** Input 'admin' OR '1'='1' bypasses authentication.
**Impact:** Complete auth bypass, unauthorized access.`,
  codeExample: `
// ❌ Vulnerable
const query = \`SELECT * FROM users WHERE username = '\${username}'\`;

// ✅ Secure
const query = 'SELECT * FROM users WHERE username = ?';
const result = await db.execute(query, [username]);
  `,
  references: ["https://cwe.mitre.org/data/definitions/89.html"],
  autoFixable: false, cwe: "CWE-89", cvss: 9.8, effort: "easy"
};
```

## CI/CD Integration