# 6. Generate TypeScript Library Structure

```
library-name/
├── package.json
├── tsconfig.json
├── tsconfig.build.json
├── src/
│   ├── index.ts
│   └── core.ts
├── tests/
│   └── core.test.ts
└── dist/
```

**package.json for Library**:
```json
{
  "name": "@scope/library-name",
  "version": "0.1.0",
  "type": "module",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  },
  "files": ["dist"],
  "scripts": {
    "build": "tsc -p tsconfig.build.json",
    "test": "vitest",
    "prepublishOnly": "pnpm build"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "vitest": "^1.2.0"
  }
}
```