# Phase 2: Authentication and Session Security

Assess authentication mechanism weaknesses:

**Session Fixation (14)**
- Definition: Attacker sets victim's session ID before authentication
- Root Cause: Session ID not regenerated after login
- Impact: Session hijacking, unauthorized account access
- Mitigation: Regenerate session ID on authentication, use secure session management

**Brute Force Attack (15)**
- Definition: Systematic password guessing using automated tools
- Root Cause: Lack of account lockout, rate limiting, or CAPTCHA
- Impact: Unauthorized access, credential compromise
- Mitigation: Account lockout policies, rate limiting, MFA, CAPTCHA

**Session Hijacking (16)**
- Definition: Attacker steals or predicts valid session tokens
- Root Cause: Weak session token generation, insecure transmission
- Impact: Account takeover, unauthorized access
- Mitigation: Secure random token generation, HTTPS, HttpOnly/Secure cookie flags

**Credential Stuffing and Reuse (22)**
- Definition: Using leaked credentials to access accounts across services
- Root Cause: Users reusing passwords, no breach detection
- Impact: Mass account compromise, data breaches
- Mitigation: MFA, breach password checks, unique credential requirements

**Insecure "Remember Me" Functionality (85)**
- Definition: Weak persistent authentication token implementation
- Root Cause: Predictable tokens, inadequate expiration controls
- Impact: Unauthorized persistent access, session compromise
- Mitigation: Strong token generation, proper expiration, secure storage

**CAPTCHA Bypass (86)**
- Definition: Circumventing bot detection mechanisms
- Root Cause: Weak CAPTCHA algorithms, improper validation
- Impact: Automated attacks, credential stuffing, spam
- Mitigation: reCAPTCHA v3, layered bot detection, rate limiting