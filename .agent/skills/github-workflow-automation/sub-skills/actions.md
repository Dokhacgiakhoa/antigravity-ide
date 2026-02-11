# Actions:

- [ ] Review each branch
- [ ] Delete branches that are no longer needed
- Comment \`/keep branch-name\` to preserve specific branches
`;

            await github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: 'Stale Branch Cleanup',
              body: body,
              labels: ['housekeeping']
            });
```

---

## 5. On-Demand Assistance