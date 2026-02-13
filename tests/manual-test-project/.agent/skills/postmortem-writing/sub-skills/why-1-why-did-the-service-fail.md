# Why #1: Why did the service fail?

**Answer**: Database connections were exhausted, causing all new requests to fail.

**Evidence**: Metrics showed connection count at 100/100 (max), with 500+ pending requests.

---