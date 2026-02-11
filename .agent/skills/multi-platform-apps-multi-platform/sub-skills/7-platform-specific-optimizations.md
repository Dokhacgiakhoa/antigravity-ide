# 7. Platform-Specific Optimizations

- Use Task tool with subagent_type="application-performance::performance-engineer"
- Prompt: "Optimize each platform implementation:
  - Web: Bundle size, lazy loading, CDN setup, SEO
  - iOS: App size, launch time, memory usage, battery
  - Android: APK size, startup time, frame rate, battery
  - Desktop: Binary size, resource usage, startup time
  - API: Response time, caching, compression
  Maintain feature parity while leveraging platform strengths.
  Document optimization techniques and trade-offs."
- Context from previous: Test results, performance metrics
- Expected output: Optimized implementations, performance improvements

## Configuration Options

- **--platforms**: Specify target platforms (web,ios,android,desktop)
- **--api-first**: Generate API before UI implementation (default: true)
- **--shared-code**: Use Kotlin Multiplatform or similar (default: evaluate)
- **--design-system**: Use existing or create new (default: create)
- **--testing-strategy**: Unit, integration, e2e (default: all)

## Success Criteria

- API contract defined and validated before implementation
- All platforms achieve feature parity with <5% variance
- Performance metrics meet platform-specific standards
- Accessibility standards met (WCAG 2.2 AA minimum)
- Cross-platform testing shows consistent behavior
- Documentation complete for all platforms
- Code reuse >40% between platforms where applicable
- User experience optimized for each platform's conventions

## Platform-Specific Considerations

**Web**: PWA capabilities, SEO optimization, browser compatibility
**iOS**: App Store guidelines, TestFlight distribution, iOS-specific features
**Android**: Play Store requirements, Android App Bundles, device fragmentation
**Desktop**: Code signing, auto-updates, OS-specific installers

Initial feature specification: $ARGUMENTS