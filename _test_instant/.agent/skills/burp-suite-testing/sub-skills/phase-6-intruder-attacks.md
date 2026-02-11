# Phase 6: Intruder Attacks

#### Configure Intruder
Set up automated attack:

1. Send request to Intruder (right-click > Send to Intruder)
2. Go to **Intruder** tab
3. Define payload positions using § markers
4. Select attack type

#### Attack Types

| Type | Description | Use Case |
|------|-------------|----------|
| Sniper | Single position, iterate payloads | Fuzzing one parameter |
| Battering ram | Same payload all positions | Credential testing |
| Pitchfork | Parallel payload iteration | Username:password pairs |
| Cluster bomb | All payload combinations | Full brute force |

#### Configure Payloads

```
Positions Tab:
POST /login HTTP/1.1
...
username=§admin§&password=§password§

Payloads Tab:
Set 1: admin, user, test, guest
Set 2: password, 123456, admin, letmein
```

#### Analyze Results
Review attack output:

- Sort by response length to find anomalies
- Filter by status code for successful attempts
- Use grep to search for specific strings
- Export results for documentation

## Quick Reference