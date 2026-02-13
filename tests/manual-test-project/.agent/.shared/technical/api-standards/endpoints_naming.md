# 🛣️ API Endpoint Naming Standards

## 1. Naming Conventions
- **Format**: Always use `kebab-case` for URLs.
- **Nouns**: Use plural nouns only (e.g., `/users`, NOT `/getUser`).
- **Verbs**: HTTP Methods define the action, not the URL.
  - `GET /posts` -> List posts
  - `POST /posts` -> Create post
  - `GET /posts/:id` -> Get post details
  - `PUT /posts/:id` -> Replace post
  - `PATCH /posts/:id` -> Update post
  - `DELETE /posts/:id` -> Remove post

## 2. Resource Nesting
- Limit nesting to 2 levels: `/posts/:id/comments` is okay.
- Avoid `/users/:id/posts/:id/comments/:id` (Use flat structure with filters).

## 3. Versioning
- Always use prefix: `/api/v1/...`
