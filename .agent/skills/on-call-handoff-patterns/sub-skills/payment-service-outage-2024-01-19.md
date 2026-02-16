# Payment Service Outage (2024-01-19)

- **Duration**: 23 minutes
- **Root Cause**: Database connection exhaustion
- **Resolution**: Rolled back v2.3.4, increased pool size
- **Postmortem**: [POSTMORTEM-89](https://docs/postmortem-89)
- **Follow-up tickets**: ENG-1230, ENG-1231

---

## 📋 Recent Changes