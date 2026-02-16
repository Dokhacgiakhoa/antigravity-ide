# Use Indirect References

```python
# Instead of: /api/address/123
# Use: /api/address/current-user/billing

def get_address(request):
    # Always filter by authenticated user
    address = Address.objects.filter(user=request.user).first()
    return address
```