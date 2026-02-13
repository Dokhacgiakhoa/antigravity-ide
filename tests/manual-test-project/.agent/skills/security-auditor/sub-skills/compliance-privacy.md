# ⚖️ Compliance & Privacy (GDPR/SOC2)

## 🎯 Purpose
Ensuring software adheres to legal regulations and data privacy standards.

## 🌍 Key Regulations

### GDPR (EU) / CCPA (California)
- **Right to be Forgotten**: Must have a mechanism to delete ALL user data.
- **Data Portability**: Users can export their data (JSON/CSV).
- **Consent**: Explicit opt-in for cookies/tracking.

### SOC2 / ISO 27001
- **Audit Logs**: Who did what, when? (Immutable logs).
- **Access Control**: Least Privilege Principle.
- **Encryption**: At Rest (AES-256) and In Transit (TLS 1.3).

## 实施 (Implementation)

### PII (Personally Identifiable Information) Handling
1.  **Identification**: Mark columns/fields as PII in Schema.
2.  **Masking**: Never log PII in plain text (Mask emails: `u***@gmail.com`).
3.  **Retention**: Auto-delete data after X days (TTL).

```javascript
// Example: Logging without leaking PII
logger.info('User login', { userId: user.id, email: maskEmail(user.email) });
```
