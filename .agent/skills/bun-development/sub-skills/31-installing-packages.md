# 3.1 Installing Packages

```bash
# Install from package.json
bun install              # or 'bun i'

# Add dependencies
bun add express          # Regular dependency
bun add -d typescript    # Dev dependency
bun add -D @types/node   # Dev dependency (alias)
bun add --optional pkg   # Optional dependency

# From specific registry
bun add lodash --registry https://registry.npmmirror.com

# Install specific version
bun add react@18.2.0
bun add react@latest
bun add react@next

# From git
bun add github:user/repo
bun add git+https://github.com/user/repo.git
```