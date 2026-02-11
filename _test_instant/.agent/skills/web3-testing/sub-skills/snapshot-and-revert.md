# Snapshot and Revert

```javascript
describe("Complex State Changes", function () {
  let snapshotId;

  beforeEach(async function () {
    snapshotId = await network.provider.send("evm_snapshot");
  });

  afterEach(async function () {
    await network.provider.send("evm_revert", [snapshotId]);
  });

  it("Test 1", async function () {
    // Make state changes
  });

  it("Test 2", async function () {
    // State reverted, clean slate
  });
});
```