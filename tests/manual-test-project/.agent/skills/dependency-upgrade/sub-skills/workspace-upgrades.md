# Workspace Upgrades

```bash
# Update all workspace packages
npm install --workspaces

# Update specific workspace
npm install package@latest --workspace=packages/app
```

## Resources

- **references/semver.md**: Semantic versioning guide
- **references/compatibility-matrix.md**: Common compatibility issues
- **references/staged-upgrades.md**: Incremental upgrade strategies
- **references/testing-strategy.md**: Comprehensive testing approaches
- **assets/upgrade-checklist.md**: Step-by-step checklist
- **assets/compatibility-matrix.csv**: Version compatibility table
- **scripts/audit-dependencies.sh**: Dependency audit script

## Best Practices

1. **Read Changelogs**: Understand what changed
2. **Upgrade Incrementally**: One major version at a time
3. **Test Thoroughly**: Unit, integration, E2E tests
4. **Check Peer Dependencies**: Resolve conflicts early
5. **Use Lock Files**: Ensure reproducible installs
6. **Automate Updates**: Use Renovate or Dependabot
7. **Monitor**: Watch for runtime errors post-upgrade
8. **Document**: Keep upgrade notes

## Upgrade Checklist

```markdown
Pre-Upgrade:
- [ ] Review current dependency versions
- [ ] Read changelogs for breaking changes
- [ ] Create feature branch
- [ ] Backup current state (git tag)
- [ ] Run full test suite (baseline)

During Upgrade:
- [ ] Upgrade one dependency at a time
- [ ] Update peer dependencies
- [ ] Fix TypeScript errors
- [ ] Update tests if needed
- [ ] Run test suite after each upgrade
- [ ] Check bundle size impact

Post-Upgrade:
- [ ] Full regression testing
- [ ] Performance testing
- [ ] Update documentation
- [ ] Deploy to staging
- [ ] Monitor for errors
- [ ] Deploy to production
```

## Common Pitfalls

- Upgrading all dependencies at once
- Not testing after each upgrade
- Ignoring peer dependency warnings
- Forgetting to update lock file
- Not reading breaking change notes
- Skipping major versions
- Not having rollback plan