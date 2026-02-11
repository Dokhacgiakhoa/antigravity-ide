# Testing Strategy Selection

```
Test Type Required:
├─ Business logic → Unit tests with mocks
├─ API contracts → Integration tests with test database
├─ User flows → E2E tests with Supertest
├─ Performance → Load tests with k6 or Artillery
└─ Security → OWASP ZAP or security middleware tests
```