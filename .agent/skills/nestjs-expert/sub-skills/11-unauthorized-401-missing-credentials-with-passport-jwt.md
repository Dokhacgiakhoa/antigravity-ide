# 11. "Unauthorized 401 (Missing credentials)" with Passport JWT

**Frequency**: HIGH | **Complexity**: LOW
**Real Example**: SO 74763077
JWT authentication debugging:
1. Verify Authorization header format: "Bearer [token]"
2. Check token expiration (use longer exp for testing)
3. Test without nginx/proxy to isolate issue
4. Use jwt.io to decode and verify token structure