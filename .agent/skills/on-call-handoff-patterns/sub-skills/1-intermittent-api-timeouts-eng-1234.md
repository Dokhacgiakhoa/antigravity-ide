# 1. Intermittent API Timeouts (ENG-1234)

**Status**: Investigating
**Started**: 2024-01-20
**Impact**: ~0.1% of requests timing out

**Context**:
- Timeouts correlate with database backup window (02:00-03:00 UTC)
- Suspect backup process causing lock contention
- Added extra logging in PR #567 (deployed 01/21)

**Next Steps**:
- [ ] Review new logs after tonight's backup
- [ ] Consider moving backup window if confirmed

**Resources**:
- Dashboard: [API Latency](https://grafana/d/api-latency)
- Thread: #platform-eng (01/20, 14:32)

---