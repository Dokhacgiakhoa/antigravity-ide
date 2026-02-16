# 4. Permission Denied Errors

**Solution**:
- Call `self::validate_context($context)` early in execute()
- Check required capabilities match user's permissions
- Verify user has role assignments in the context