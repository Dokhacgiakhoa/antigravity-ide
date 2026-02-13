# Phase 7: Session Fixation Testing

Test if session is regenerated after authentication:

```bash
# Step 1: Get session before login
GET /login HTTP/1.1
Response: Set-Cookie: SESSIONID=abc123

# Step 2: Login with same session
POST /login HTTP/1.1
Cookie: SESSIONID=abc123
username=valid&password=valid

# Step 3: Check if session changed
# VULNERABLE if SESSIONID remains abc123
# SECURE if new session assigned after login
```

Attack scenario:

```bash
# Attacker workflow:
1. Attacker visits site, gets session: SESSIONID=attacker_session
2. Attacker sends link to victim with fixed session:
   https://target.com/login?SESSIONID=attacker_session
3. Victim logs in with attacker's session
4. Attacker now has authenticated session
```