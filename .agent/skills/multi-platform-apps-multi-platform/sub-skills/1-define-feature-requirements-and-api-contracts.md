# 1. Define Feature Requirements and API Contracts

- Use Task tool with subagent_type="backend-architect"
- Prompt: "Design the API contract for feature: $ARGUMENTS. Create OpenAPI 3.1 specification with:
  - RESTful endpoints with proper HTTP methods and status codes
  - GraphQL schema if applicable for complex data queries
  - WebSocket events for real-time features
  - Request/response schemas with validation rules
  - Authentication and authorization requirements
  - Rate limiting and caching strategies
  - Error response formats and codes
  Define shared data models that all platforms will consume."
- Expected output: Complete API specification, data models, and integration guidelines