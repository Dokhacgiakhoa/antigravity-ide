# Why It Happened

1. **Proximate Cause**: Code change in `PaymentRepository.java` replaced pooled `DataSource` with direct `DriverManager.getConnection()` calls.

2. **Contributing Factors**:
   - Code review did not catch the connection handling change
   - No integration tests specifically for connection pool behavior
   - Staging environment has lower traffic, masking the issue
   - Database connection metrics alert threshold was too high (90%)

3. **5 Whys Analysis**:
   - Why did the service fail? → Database connections exhausted
   - Why were connections exhausted? → Each request opened new connection
   - Why did each request open new connection? → Code bypassed connection pool
   - Why did code bypass connection pool? → Developer unfamiliar with codebase patterns
   - Why was developer unfamiliar? → No documentation on connection management patterns