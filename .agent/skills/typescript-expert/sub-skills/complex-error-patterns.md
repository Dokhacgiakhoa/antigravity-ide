# Complex Error Patterns

**"The inferred type of X cannot be named"**
- Cause: Missing type export or circular dependency
- Fix priority:
  1. Export the required type explicitly
  2. Use `ReturnType<typeof function>` helper
  3. Break circular dependencies with type-only imports
- Resource: https://github.com/microsoft/TypeScript/issues/47663

**Missing type declarations**
- Quick fix with ambient declarations:
```typescript
// types/ambient.d.ts
declare module 'some-untyped-package' {
  const value: unknown;
  export default value;
  export = value; // if CJS interop is needed
}
```
- For more details: [Declaration Files Guide](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)

**"Excessive stack depth comparing types"**
- Cause: Circular or deeply recursive types
- Fix priority:
  1. Limit recursion depth with conditional types
  2. Use `interface` extends instead of type intersection
  3. Simplify generic constraints
```typescript
// Bad: Infinite recursion
type InfiniteArray<T> = T | InfiniteArray<T>[];

// Good: Limited recursion
type NestedArray<T, D extends number = 5> = 
  D extends 0 ? T : T | NestedArray<T, [-1, 0, 1, 2, 3, 4][D]>[];
```

**Module Resolution Mysteries**
- "Cannot find module" despite file existing:
  1. Check `moduleResolution` matches your bundler
  2. Verify `baseUrl` and `paths` alignment
  3. For monorepos: Ensure workspace protocol (workspace:*)
  4. Try clearing cache: `rm -rf node_modules/.cache .tsbuildinfo`

**Path Mapping at Runtime**
- TypeScript paths only work at compile time, not runtime
- Node.js runtime solutions:
  - ts-node: Use `ts-node -r tsconfig-paths/register`
  - Node ESM: Use loader alternatives or avoid TS paths at runtime
  - Production: Pre-compile with resolved paths