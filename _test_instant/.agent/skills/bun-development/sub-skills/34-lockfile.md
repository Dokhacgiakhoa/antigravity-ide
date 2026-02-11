# 3.4 Lockfile

```bash
# bun.lockb is a binary lockfile (faster parsing)
# To generate text lockfile for debugging:
bun install --yarn    # Creates yarn.lock

# Trust existing lockfile
bun install --frozen-lockfile
```

---

## 4. Running Code