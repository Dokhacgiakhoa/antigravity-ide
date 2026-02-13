# 7. Configure Development Tools

**.env.example**:
```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://user:pass@localhost:5432/db
JWT_SECRET=your-secret-key
```

**vitest.config.ts**:
```typescript
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
})
```

**.eslintrc.json**:
```json
{
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": "error"
  }
}
```

## Output Format

1. **Project Structure**: Complete directory tree with all necessary files
2. **Configuration**: package.json, tsconfig.json, build tooling
3. **Entry Point**: Main application file with type-safe setup
4. **Tests**: Test structure with Vitest configuration
5. **Documentation**: README with setup and usage instructions
6. **Development Tools**: .env.example, .gitignore, linting config

Focus on creating production-ready TypeScript projects with modern tooling, strict type safety, and comprehensive testing setup.