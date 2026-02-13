# 1. Detect Project Name

```bash
project=$(basename "$(git rev-parse --show-toplevel)")
```