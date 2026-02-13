# Windows Path Rules

| Pattern | Use |
|---------|-----|
| Literal path | `C:\Users\User\file.txt` |
| Variable path | `Join-Path $env:USERPROFILE "file.txt"` |
| Relative | `Join-Path $ScriptDir "data"` |

**Rule:** Use Join-Path for cross-platform safety.

---

## 7. Array Operations