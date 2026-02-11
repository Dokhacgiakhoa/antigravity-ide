# Impersonating Accounts

```javascript
it("Should impersonate whale account", async function () {
  const whaleAddress = "0x...";

  await network.provider.request({
    method: "hardhat_impersonateAccount",
    params: [whaleAddress],
  });

  const whale = await ethers.getSigner(whaleAddress);

  // Use whale's tokens
  await dai
    .connect(whale)
    .transfer(addr1.address, ethers.utils.parseEther("1000"));
});
```

## Gas Optimization Testing

```javascript
const { expect } = require("chai");

describe("Gas Optimization", function () {
  it("Compare gas usage between implementations", async function () {
    const Implementation1 =
      await ethers.getContractFactory("OptimizedContract");
    const Implementation2 = await ethers.getContractFactory(
      "UnoptimizedContract",
    );

    const contract1 = await Implementation1.deploy();
    const contract2 = await Implementation2.deploy();

    const tx1 = await contract1.doSomething();
    const receipt1 = await tx1.wait();

    const tx2 = await contract2.doSomething();
    const receipt2 = await tx2.wait();

    console.log("Optimized gas:", receipt1.gasUsed.toString());
    console.log("Unoptimized gas:", receipt2.gasUsed.toString());

    expect(receipt1.gasUsed).to.be.lessThan(receipt2.gasUsed);
  });
});
```

## Coverage Reporting

```bash
# Generate coverage report
npx hardhat coverage

# Output shows:
# File                | % Stmts | % Branch | % Funcs | % Lines |
# -------------------|---------|----------|---------|---------|
# contracts/Token.sol |   100   |   90     |   100   |   95    |
```

## Contract Verification

```javascript
// Verify on Etherscan
await hre.run("verify:verify", {
  address: contractAddress,
  constructorArguments: [arg1, arg2],
});
```

```bash
# Or via CLI
npx hardhat verify --network mainnet CONTRACT_ADDRESS "Constructor arg1" "arg2"
```

## CI/CD Integration

```yaml
# .github/workflows/test.yml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: "16"

      - run: npm install
      - run: npx hardhat compile
      - run: npx hardhat test
      - run: npx hardhat coverage

      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v2
```

## Resources

- **references/hardhat-setup.md**: Hardhat configuration guide
- **references/foundry-setup.md**: Foundry testing framework
- **references/test-patterns.md**: Testing best practices
- **references/mainnet-forking.md**: Fork testing strategies
- **references/contract-verification.md**: Etherscan verification
- **assets/hardhat-config.js**: Complete Hardhat configuration
- **assets/test-suite.js**: Comprehensive test examples
- **assets/foundry.toml**: Foundry configuration
- **scripts/test-contract.sh**: Automated testing script

## Best Practices

1. **Test Coverage**: Aim for >90% coverage
2. **Edge Cases**: Test boundary conditions
3. **Gas Limits**: Verify functions don't hit block gas limit
4. **Reentrancy**: Test for reentrancy vulnerabilities
5. **Access Control**: Test unauthorized access attempts
6. **Events**: Verify event emissions
7. **Fixtures**: Use fixtures to avoid code duplication
8. **Mainnet Fork**: Test with real contracts
9. **Fuzzing**: Use property-based testing
10. **CI/CD**: Automate testing on every commit