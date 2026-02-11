# 8.1 Compatibility

```typescript
// Most Node.js APIs work out of the box
import fs from "fs";
import path from "path";
import crypto from "crypto";

// process is global
console.log(process.cwd());
console.log(process.env.HOME);

// Buffer is global
const buf = Buffer.from("hello");

// __dirname and __filename work
console.log(__dirname);
console.log(__filename);
```