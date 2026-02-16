# 2. "Circular dependency detected"

**Frequency**: HIGH | **Complexity**: HIGH
**Real Examples**: SO 65671318 (32 votes) | Multiple GitHub discussions
Community-proven solutions:
1. Use forwardRef() on BOTH sides of the dependency
2. Extract shared logic to a third module (recommended)
3. Consider if circular dependency indicates design flaw
4. Note: Community warns forwardRef() can mask deeper issues