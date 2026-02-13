# 9.3 Bundle for Production

```bash
# Always bundle and minify for production
bun build ./src/index.ts --outdir ./dist --minify --target node

# Then run the bundle
bun run ./dist/index.js
```

---

## Quick Reference

| Task         | Command                                    |
| :----------- | :----------------------------------------- |
| Init project | `bun init`                                 |
| Install deps | `bun install`                              |
| Add package  | `bun add <pkg>`                            |
| Run script   | `bun run <script>`                         |
| Run file     | `bun run file.ts`                          |
| Watch mode   | `bun --watch run file.ts`                  |
| Run tests    | `bun test`                                 |
| Build        | `bun build ./src/index.ts --outdir ./dist` |
| Execute pkg  | `bunx <pkg>`                               |

---

## Resources

- [Bun Documentation](https://bun.sh/docs)
- [Bun GitHub](https://github.com/oven-sh/bun)
- [Elysia Framework](https://elysiajs.com/)
- [Bun Discord](https://bun.sh/discord)