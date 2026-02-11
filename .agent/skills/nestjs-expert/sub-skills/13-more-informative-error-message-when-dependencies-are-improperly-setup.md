# 13. "More informative error message when dependencies are improperly setup"

**Frequency**: N/A | **Complexity**: N/A
**Real Example**: GitHub #223 (Feature Request)
Debugging dependency injection:
1. NestJS errors are intentionally generic for security
2. Use verbose logging during development
3. Add custom error messages in your providers
4. Consider using dependency injection debugging tools