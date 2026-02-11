# Example 2: Authentication Bypass

**Scenario**: Testing login form

1. Submit valid credentials, capture request in Repeater
2. Send to Repeater for testing
3. Try: `username=admin' OR '1'='1'--`
4. Observe successful login response

**Finding**: SQL injection in authentication.