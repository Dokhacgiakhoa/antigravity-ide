# 9.2 Use Bun.serve for HTTP

```typescript
// Don't: Express/Fastify (overhead)
import express from "express";
const app = express();

// Do: Bun.serve (native, 4-10x faster)
Bun.serve({
  fetch(req) {
    return new Response("Hello!");
  },
});

// Or use Elysia (Bun-optimized framework)
import { Elysia } from "elysia";
new Elysia().get("/", () => "Hello!").listen(3000);
```