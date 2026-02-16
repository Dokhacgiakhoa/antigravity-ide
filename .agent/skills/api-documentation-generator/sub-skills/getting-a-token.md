# Getting a Token

**Endpoint:** `POST /api/v1/auth/login`

**Request:**
\`\`\`json
{
  "email": "user@example.com",
  "password": "your-password"
}
\`\`\`

**Response:**
\`\`\`json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresIn": 3600,
  "refreshToken": "refresh_token_here"
}
\`\`\`