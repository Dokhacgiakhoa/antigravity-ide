# 3. "Cannot test e2e because Nestjs doesn't resolve dependencies"

**Frequency**: HIGH | **Complexity**: MEDIUM
**Real Examples**: SO 75483101, 62942112, 62822943
Proven testing solutions:
1. Use @golevelup/ts-jest for createMock() helper
2. Mock JwtService in test module providers
3. Import all required modules in Test.createTestingModule()
4. For Bazel users: Special configuration needed (SO 62942112)