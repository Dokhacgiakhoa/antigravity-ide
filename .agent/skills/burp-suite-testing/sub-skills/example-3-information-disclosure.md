# Example 3: Information Disclosure

**Scenario**: Error-based information gathering

1. Navigate to product page, observe `productId` parameter
2. Send request to Repeater
3. Change `productId=1` to `productId=test`
4. Observe verbose error revealing framework version

**Finding**: Apache Struts 2.5.12 disclosed in stack trace.

## Troubleshooting