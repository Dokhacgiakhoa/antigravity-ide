# Example 2: GraphQL API Documentation

```markdown
## User Query

Fetch user information by ID.

**Query:**
\`\`\`graphql
query GetUser($id: ID!) {
  user(id: $id) {
    id
    email
    name
    role
    createdAt
    posts {
      id
      title
      publishedAt
    }
  }
}
\`\`\`

**Variables:**
\`\`\`json
{
  "id": "usr_1234567890"
}
\`\`\`

**Response:**
\`\`\`json
{
  "data": {
    "user": {
      "id": "usr_1234567890",
      "email": "user@example.com",
      "name": "John Doe",
      "role": "user",
      "createdAt": "2026-01-20T10:30:00Z",
      "posts": [
        {
          "id": "post_123",
          "title": "My First Post",
          "publishedAt": "2026-01-21T14:00:00Z"
        }
      ]
    }
  }
}
\`\`\`

**Errors:**
\`\`\`json
{
  "errors": [
    {
      "message": "User not found",
      "extensions": {
        "code": "USER_NOT_FOUND",
        "userId": "usr_1234567890"
      }
    }
  ]
}
\`\`\`
```