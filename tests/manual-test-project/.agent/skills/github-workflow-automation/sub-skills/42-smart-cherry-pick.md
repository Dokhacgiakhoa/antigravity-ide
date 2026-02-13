# 4.2 Smart Cherry-Pick

```typescript
// AI-assisted cherry-pick that handles conflicts
async function smartCherryPick(commitHash: string, targetBranch: string) {
  // Get commit info
  const commitInfo = await exec(`git show ${commitHash} --stat`);

  // Check for potential conflicts
  const targetDiff = await exec(
    `git diff ${targetBranch}...HEAD -- ${affectedFiles}`
  );

  // AI analysis
  const analysis = await ai.analyze(`
    I need to cherry-pick this commit to ${targetBranch}:
    
    ${commitInfo}
    
    Current state of affected files on ${targetBranch}:
    ${targetDiff}
    
    Will there be conflicts? If so, suggest resolution strategy.
  `);

  if (analysis.willConflict) {
    // Create branch for manual resolution
    await exec(
      `git checkout -b cherry-pick-${commitHash.slice(0, 7)} ${targetBranch}`
    );
    const result = await exec(`git cherry-pick ${commitHash}`, {
      allowFail: true,
    });

    if (result.failed) {
      // AI-assisted conflict resolution
      const conflicts = await getConflicts();
      for (const conflict of conflicts) {
        const resolution = await ai.resolveConflict(conflict);
        await applyResolution(conflict.file, resolution);
      }
    }
  } else {
    await exec(`git checkout ${targetBranch}`);
    await exec(`git cherry-pick ${commitHash}`);
  }
}
```