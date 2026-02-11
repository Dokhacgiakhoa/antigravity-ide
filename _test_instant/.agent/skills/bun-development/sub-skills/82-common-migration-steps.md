# 8.2 Common Migration Steps

```bash
# 1. Install Bun
curl -fsSL https://bun.sh/install | bash

# 2. Replace package manager
rm -rf node_modules package-lock.json
bun install

# 3. Update scripts in package.json
# "start": "node index.js" → "start": "bun run index.ts"
# "test": "jest" → "test": "bun test"

# 4. Add Bun types
bun add -d @types/bun
```