# Problem: Slow Server Response Time

**Symptoms:** High TTFB (Time to First Byte)
**Solution:**
- Implement server-side caching
- Use CDN for static assets
- Optimize database queries
- Consider static site generation (SSG)
```javascript
// Next.js: Static generation
export async function getStaticProps() {
  const data = await fetchData();
  return {
    props: { data },
    revalidate: 60 // Regenerate every 60 seconds
  };
}
```

## Performance Checklist