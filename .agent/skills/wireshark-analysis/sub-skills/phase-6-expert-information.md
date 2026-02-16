# Phase 6: Expert Information

#### Access Expert Analysis
View Wireshark's automated findings:

```
Analyze > Expert Information

Categories:
- Errors: Critical issues
- Warnings: Potential problems
- Notes: Informational items
- Chats: Normal conversation events
```

#### Common Expert Findings
| Finding | Meaning | Action |
|---------|---------|--------|
| TCP Retransmission | Packet resent | Check for packet loss |
| Duplicate ACK | Possible loss | Investigate network path |
| Zero Window | Buffer full | Check receiver performance |
| RST | Connection reset | Check for blocks/errors |
| Out-of-Order | Packets reordered | Usually normal, excessive is issue |

## Quick Reference