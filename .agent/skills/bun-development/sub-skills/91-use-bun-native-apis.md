# 9.1 Use Bun-native APIs

```typescript
// Slow (Node.js compat)
import fs from "fs/promises";
const content = await fs.readFile("./data.txt", "utf-8");

// Fast (Bun-native)
const file = Bun.file("./data.txt");
const content = await file.text();
```