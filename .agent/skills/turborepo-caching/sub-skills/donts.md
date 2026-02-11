# Don'ts

- **Don't cache dev servers** - Use `persistent: true`
- **Don't include secrets in env** - Use runtime env vars
- **Don't ignore dependsOn** - Causes race conditions
- **Don't over-filter** - May miss dependencies

## Resources

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Caching Guide](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)