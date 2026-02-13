# Problem: Large JavaScript Bundle

**Symptoms:** Long Time to Interactive (TTI), high FID
**Solution:**
- Analyze bundle with webpack-bundle-analyzer
- Remove unused dependencies
- Implement code splitting
- Lazy load non-critical code
```bash
# Analyze bundle
npx webpack-bundle-analyzer dist/stats.json
```