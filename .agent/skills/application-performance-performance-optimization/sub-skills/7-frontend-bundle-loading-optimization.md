# 7. Frontend Bundle & Loading Optimization

- Use Task tool with subagent_type="frontend-developer"
- Prompt: "Optimize frontend performance for: $ARGUMENTS targeting Core Web Vitals: {context_from_phase_1}. Implement code splitting, tree shaking, lazy loading, and dynamic imports. Optimize bundle sizes with webpack/rollup analysis. Implement resource hints (prefetch, preconnect, preload). Optimize critical rendering path and eliminate render-blocking resources."
- Context: UX analysis from phase 1, backend optimizations from phase 2
- Output: Optimized bundles, lazy loading implementation, improved Core Web Vitals