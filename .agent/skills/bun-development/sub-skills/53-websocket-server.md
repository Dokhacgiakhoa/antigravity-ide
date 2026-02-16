# 5.3 WebSocket Server

```typescript
const server = Bun.serve({
  port: 3000,

  fetch(req, server) {
    // Upgrade to WebSocket
    if (server.upgrade(req)) {
      return; // Upgraded
    }
    return new Response("Upgrade failed", { status: 500 });
  },

  websocket: {
    open(ws) {
      console.log("Client connected");
      ws.send("Welcome!");
    },

    message(ws, message) {
      console.log(`Received: ${message}`);
      ws.send(`Echo: ${message}`);
    },

    close(ws) {
      console.log("Client disconnected");
    },
  },
});
```