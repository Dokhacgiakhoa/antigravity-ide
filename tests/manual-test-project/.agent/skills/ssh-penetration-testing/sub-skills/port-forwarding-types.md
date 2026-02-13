# Port Forwarding Types

| Type | Command | Use Case |
|------|---------|----------|
| Local | `-L 8080:target:80` | Access remote services locally |
| Remote | `-R 8080:localhost:80` | Expose local services remotely |
| Dynamic | `-D 1080` | SOCKS proxy for pivoting |