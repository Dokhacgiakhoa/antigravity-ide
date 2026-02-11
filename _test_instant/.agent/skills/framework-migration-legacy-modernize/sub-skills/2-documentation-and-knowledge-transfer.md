# 2. Documentation and Knowledge Transfer

- Use Task tool with subagent_type="documentation-generation::docs-architect"
- Prompt: "Create comprehensive modernization documentation including: architectural diagrams (before/after), API documentation with migration guides, runbooks for dual-system operation, troubleshooting guides for common issues, and lessons learned report. Generate developer onboarding guide for modernized system. Document technical decisions and trade-offs made during migration."
- Context from previous: All migration artifacts and decisions
- Expected output: Complete modernization documentation package

## Configuration Options

- **--parallel-systems**: Keep both systems running indefinitely (for gradual migration)
- **--big-bang**: Full cutover after validation (higher risk, faster completion)
- **--by-feature**: Migrate complete features rather than technical components
- **--database-first**: Prioritize database modernization before application layer
- **--api-first**: Modernize API layer while maintaining legacy backend

## Success Criteria

- All high-priority components modernized with >80% test coverage
- Zero unplanned downtime during migration
- Performance metrics maintained or improved (P95 latency within 110% of baseline)
- Security vulnerabilities reduced by >90%
- Technical debt score improved by >60%
- Successful operation for 30 days post-migration without rollbacks
- Complete documentation enabling new developer onboarding in <1 week

Target: $ARGUMENTS