# 7.3 Compile to Executable

```bash
# Create standalone executable
bun build ./src/cli.ts --compile --outfile myapp

# Cross-compile
bun build ./src/cli.ts --compile --target=bun-linux-x64 --outfile myapp-linux
bun build ./src/cli.ts --compile --target=bun-darwin-arm64 --outfile myapp-mac

# With embedded assets
bun build ./src/cli.ts --compile --outfile myapp --embed ./assets
```

---

## 8. Migration from Node.js