# Webhook Security & Idempotency

- **Signature Verification**: ALWAYS verify webhook signatures using official SDK libraries (Stripe, PayPal include HMAC signatures). Never process unverified webhooks.
- **Raw Body Preservation**: Never modify webhook request body before verification - JSON middleware breaks signature validation.
- **Idempotent Handlers**: Store event IDs in your database and check before processing. Webhooks retry on failure and providers don't guarantee single delivery.
- **Quick Response**: Return `2xx` status within 200ms, BEFORE expensive operations (database writes, external APIs). Timeouts trigger retries and duplicate processing.
- **Server Validation**: Re-fetch payment status from provider API. Never trust webhook payload or client response alone.