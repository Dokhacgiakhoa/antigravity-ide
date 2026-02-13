# 7. "secretOrPrivateKey must have a value" (JWT)

**Frequency**: HIGH | **Complexity**: LOW
**Real Examples**: Multiple community reports
JWT configuration fixes:
1. Set JWT_SECRET in environment variables
2. Check ConfigModule loads before JwtModule
3. Verify .env file is in correct location
4. Use ConfigService for dynamic configuration