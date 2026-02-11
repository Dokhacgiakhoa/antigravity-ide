# 2. Design System and UI/UX Consistency

- Use Task tool with subagent_type="ui-ux-designer"
- Prompt: "Create cross-platform design system for feature using API spec: [previous output]. Include:
  - Component specifications for each platform (Material Design, iOS HIG, Fluent)
  - Responsive layouts for web (mobile-first approach)
  - Native patterns for iOS (SwiftUI) and Android (Material You)
  - Desktop-specific considerations (keyboard shortcuts, window management)
  - Accessibility requirements (WCAG 2.2 Level AA)
  - Dark/light theme specifications
  - Animation and transition guidelines"
- Context from previous: API endpoints, data structures, authentication flows
- Expected output: Design system documentation, component library specs, platform guidelines