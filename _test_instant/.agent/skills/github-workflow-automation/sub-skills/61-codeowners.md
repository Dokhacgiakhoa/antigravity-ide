# 6.1 CODEOWNERS

```
# .github/CODEOWNERS

# Global owners
* @org/core-team

# Frontend
/src/frontend/ @org/frontend-team
*.tsx @org/frontend-team
*.css @org/frontend-team

# Backend
/src/api/ @org/backend-team
/src/database/ @org/backend-team

# Infrastructure
/.github/ @org/devops-team
/terraform/ @org/devops-team
Dockerfile @org/devops-team

# Docs
/docs/ @org/docs-team
*.md @org/docs-team

# Security-sensitive
/src/auth/ @org/security-team
/src/crypto/ @org/security-team
```