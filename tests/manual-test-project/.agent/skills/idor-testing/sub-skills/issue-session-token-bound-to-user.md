# Issue: Session Token Bound to User

**Cause**: Application validates session against requested resource
**Solution**:
```
# Advanced bypass attempts:
1. Test for IDOR in unauthenticated endpoints
2. Check password reset/email verification flows
3. Look for IDOR in file upload/download
4. Test API versioning: /api/v1/ vs /api/v2/
5. Check mobile API endpoints (often less protected)
```