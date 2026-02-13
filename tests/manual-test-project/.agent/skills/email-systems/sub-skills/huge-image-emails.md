# ❌ Huge image emails

**Why bad**: Images blocked by default. Spam trigger. Slow loading.

## ⚠️ Sharp Edges

| Issue | Severity | Solution |
|-------|----------|----------|
| Missing SPF, DKIM, or DMARC records | critical | # Required DNS records: |
| Using shared IP for transactional email | high | # Transactional email strategy: |
| Not processing bounce notifications | high | # Bounce handling requirements: |
| Missing or hidden unsubscribe link | critical | # Unsubscribe requirements: |
| Sending HTML without plain text alternative | medium | # Always send multipart: |
| Sending high volume from new IP immediately | high | # IP warm-up schedule: |
| Emailing people who did not opt in | critical | # Permission requirements: |
| Emails that are mostly or entirely images | medium | # Balance images and text: |