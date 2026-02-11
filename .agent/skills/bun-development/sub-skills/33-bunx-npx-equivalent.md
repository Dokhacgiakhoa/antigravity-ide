# 3.3 bunx (npx equivalent)

```bash
# Execute package binaries
bunx prettier --write .
bunx tsc --init
bunx create-react-app my-app

# With specific version
bunx -p typescript@4.9 tsc --version

# Run without installing
bunx cowsay "Hello from Bun!"
```