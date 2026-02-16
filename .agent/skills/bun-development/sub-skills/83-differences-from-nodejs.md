# 8.3 Differences from Node.js

```typescript
// ❌ Node.js specific (may not work)
require("module")             // Use import instead
require.resolve("pkg")        // Use import.meta.resolve
__non_webpack_require__       // Not supported

// ✅ Bun equivalents
import pkg from "pkg";
const resolved = import.meta.resolve("pkg");
Bun.resolveSync("pkg", process.cwd());

// ❌ These globals differ
process.hrtime()              // Use Bun.nanoseconds()
setImmediate()                // Use queueMicrotask()

// ✅ Bun-specific features
const file = Bun.file("./data.txt");  // Fast file API
Bun.serve({ port: 3000, fetch: ... }); // Fast HTTP server
Bun.password.hash(password);           // Built-in hashing
```

---

## 9. Performance Tips