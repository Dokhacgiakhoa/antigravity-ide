# Token Expiration

Tokens expire after 1 hour. Use the refresh token to get a new access token:

**Endpoint:** `POST /api/v1/auth/refresh`

**Request:**
\`\`\`json
{
  "refreshToken": "refresh_token_here"
}
\`\`\`
```

## Best Practices