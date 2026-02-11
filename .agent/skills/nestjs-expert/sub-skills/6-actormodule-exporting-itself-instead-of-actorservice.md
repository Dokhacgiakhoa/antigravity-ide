# 6. "ActorModule exporting itself instead of ActorService"

**Frequency**: MEDIUM | **Complexity**: LOW
**Real Example**: GitHub #866
Module export configuration fix:
1. Export the SERVICE not the MODULE from exports array
2. Common mistake: exports: [ActorModule] → exports: [ActorService]
3. Check all module exports for this pattern
4. Validate with nest info command