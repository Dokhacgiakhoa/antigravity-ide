# 2. PR Metadata and Automation Setup

- Use Task tool with subagent_type="cicd-automation::deployment-engineer"
- Prompt: "Configure PR metadata: 1) Assign appropriate reviewers based on CODEOWNERS, 2) Add labels (type, priority, component), 3) Link related issues, 4) Set milestone if applicable, 5) Configure merge strategy (squash/merge/rebase), 6) Set up auto-merge if all checks pass. Consider draft status: [--draft-pr flag]. Include test status: [insert test summary]."
- Context from previous: PR description, test results, review status
- Expected output: PR configuration commands and automation rules

## Success Criteria

- ✅ All critical and high-severity code issues resolved
- ✅ Test coverage maintained or improved (target: >80%)
- ✅ All tests passing (unit, integration, e2e)
- ✅ Commit messages follow Conventional Commits format
- ✅ No merge conflicts with target branch
- ✅ PR description complete with all required sections
- ✅ Branch protection rules satisfied
- ✅ Security scanning completed with no critical vulnerabilities
- ✅ Performance benchmarks within acceptable thresholds
- ✅ Documentation updated for any API changes

## Rollback Procedures

In case of issues after merge:

1. **Immediate Revert**: Create revert PR with `git revert <commit-hash>`
2. **Feature Flag Disable**: If using feature flags, disable immediately
3. **Hotfix Branch**: For critical issues, create hotfix branch from main
4. **Communication**: Notify team via designated channels
5. **Root Cause Analysis**: Document issue in postmortem template

## Best Practices Reference

- **Commit Frequency**: Commit early and often, but ensure each commit is atomic
- **Branch Naming**: `(feature|bugfix|hotfix|docs|chore)/<ticket-id>-<brief-description>`
- **PR Size**: Keep PRs under 400 lines for effective review
- **Review Response**: Address review comments within 24 hours
- **Merge Strategy**: Squash for feature branches, merge for release branches
- **Sign-Off**: Require at least 2 approvals for main branch changes