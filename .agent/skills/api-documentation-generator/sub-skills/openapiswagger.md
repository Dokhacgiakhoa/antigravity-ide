# OpenAPI/Swagger

Generate interactive documentation:
```yaml
openapi: 3.0.0
info:
  title: My API
  version: 4.1.0-fractal
paths:
  /users:
    post:
      summary: Create a new user
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateUserRequest'
```