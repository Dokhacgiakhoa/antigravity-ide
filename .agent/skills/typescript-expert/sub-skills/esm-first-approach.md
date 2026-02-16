# ESM-First Approach

- Set `"type": "module"` in package.json
- Use `.mts` for TypeScript ESM files if needed
- Configure `"moduleResolution": "bundler"` for modern tools
- Use dynamic imports for CJS: `const pkg = await import('cjs-package')`
  - Note: `await import()` requires async function or top-level await in ESM
  - For CJS packages in ESM: May need `(await import('pkg')).default` depending on the package's export structure and your compiler settings