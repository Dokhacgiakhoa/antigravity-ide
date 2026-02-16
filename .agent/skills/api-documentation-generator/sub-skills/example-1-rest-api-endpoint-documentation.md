# Example 1: REST API Endpoint Documentation

```markdown
## Create User

Creates a new user account.

**Endpoint:** `POST /api/v1/users`

**Authentication:** Required (Bearer token)

**Request Body:**
\`\`\`json
{
  "email": "user@example.com",      // Required: Valid email address
  "password": "SecurePass123!",     // Required: Min 8 chars, 1 uppercase, 1 number
  "name": "John Doe",               // Required: 2-50 characters
  "role": "user"                    // Optional: "user" or "admin" (default: "user")
}
\`\`\`

**Success Response (201 Created):**
\`\`\`json
{
  "id": "usr_1234567890",
  "email": "user@example.com",
  "name": "John Doe",
  "role": "user",
  "createdAt": "2026-01-20T10:30:00Z",
  "emailVerified": false
}
\`\`\`

**Error Responses:**

- `400 Bad Request` - Invalid input data
  \`\`\`json
  {
    "error": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "field": "email"
  }
  \`\`\`

- `409 Conflict` - Email already exists
  \`\`\`json
  {
    "error": "EMAIL_EXISTS",
    "message": "An account with this email already exists"
  }
  \`\`\`

- `401 Unauthorized` - Missing or invalid authentication token

**Example Request (cURL):**
\`\`\`bash
curl -X POST https://api.example.com/api/v1/users \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "SecurePass123!",
    "name": "John Doe"
  }'
\`\`\`

**Example Request (JavaScript):**
\`\`\`javascript
const response = await fetch('https://api.example.com/api/v1/users', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'SecurePass123!',
    name: 'John Doe'
  })
});

const user = await response.json();
console.log(user);
\`\`\`

**Example Request (Python):**
\`\`\`python
import requests

response = requests.post(
    'https://api.example.com/api/v1/users',
    headers={
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    },
    json={
        'email': 'user@example.com',
        'password': 'SecurePass123!',
        'name': 'John Doe'
    }
)

user = response.json()
print(user)
\`\`\`
```