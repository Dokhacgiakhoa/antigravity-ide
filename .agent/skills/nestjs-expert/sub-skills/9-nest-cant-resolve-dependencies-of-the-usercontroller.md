# 9. "Nest can't resolve dependencies of the UserController (?, +)"

**Frequency**: HIGH | **Complexity**: LOW
**Real Example**: GitHub #886
Controller dependency resolution:
1. The "?" indicates missing provider at that position
2. Count constructor parameters to identify which is missing
3. Add missing service to module providers
4. Check service is properly decorated with @Injectable()