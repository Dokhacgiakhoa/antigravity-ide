# 3. Shared Business Logic Architecture

- Use Task tool with subagent_type="comprehensive-review::architect-review"
- Prompt: "Design shared business logic architecture for cross-platform feature. Define:
  - Core domain models and entities (platform-agnostic)
  - Business rules and validation logic
  - State management patterns (MVI/Redux/BLoC)
  - Caching and offline strategies
  - Error handling and retry policies
  - Platform-specific adapter patterns
  Consider Kotlin Multiplatform for mobile or TypeScript for web/desktop sharing."
- Context from previous: API contracts, data models, UI requirements
- Expected output: Shared code architecture, platform abstraction layers, implementation guide

## Phase 2: Parallel Platform Implementation