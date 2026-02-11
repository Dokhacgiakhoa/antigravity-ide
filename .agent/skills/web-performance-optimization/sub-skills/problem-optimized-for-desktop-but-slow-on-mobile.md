# Problem: Optimized for Desktop but Slow on Mobile

**Symptoms:** Good Lighthouse score on desktop, poor on mobile
**Solution:**
- Test on real mobile devices
- Use Chrome DevTools mobile throttling
- Optimize for 3G/4G networks
- Reduce JavaScript execution time
```bash
# Test with throttling
lighthouse https://yoursite.com --throttling.cpuSlowdownMultiplier=4
```