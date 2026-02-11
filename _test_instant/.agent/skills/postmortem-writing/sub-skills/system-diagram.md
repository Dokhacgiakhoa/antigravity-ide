# System Diagram

```
[Client] → [Load Balancer] → [Payment Service] → [Database]
                                    ↓
                            Connection Pool (broken)
                                    ↓
                            Direct connections (cause)
```

## Detection