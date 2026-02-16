# Phase 8: Session Timeout Testing

Verify session expiration policies:

```bash
# Test idle timeout
1. Login and note session cookie
2. Wait without activity (15, 30, 60 minutes)
3. Attempt to use session
4. Check if session is still valid

# Test absolute timeout
1. Login and continuously use session
2. Check if forced logout after set period (8 hours, 24 hours)

# Test logout functionality
1. Login and note session
2. Click logout
3. Attempt to reuse old session cookie
4. Session should be invalidated server-side
```