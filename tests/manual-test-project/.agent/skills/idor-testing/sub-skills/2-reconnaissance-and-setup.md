# 2. Reconnaissance and Setup

#### Create Multiple Test Accounts
```
Account 1: "attacker" - Primary testing account
Account 2: "victim" - Account whose data we attempt to access
```

#### Identify Object References
Capture and analyze requests containing:
- Numeric IDs in URLs: `/api/user/123`
- Numeric IDs in parameters: `?id=123&action=view`
- Numeric IDs in request body: `{"userId": 123}`
- File paths: `/download/receipt_123.pdf`
- GUIDs/UUIDs: `/profile/a1b2c3d4-e5f6-...`

#### Map User IDs
```
# Access user ID endpoint (if available)
GET /api/user-id/

# Note ID patterns:
# - Sequential integers (1, 2, 3...)
# - Auto-incremented values
# - Predictable patterns
```