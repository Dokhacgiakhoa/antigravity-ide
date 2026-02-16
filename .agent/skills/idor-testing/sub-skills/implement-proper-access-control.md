# Implement Proper Access Control

```python
# Django example - validate ownership
def update_address(request, address_id):
    address = Address.objects.get(id=address_id)
    
    # Verify ownership before allowing update
    if address.user != request.user:
        return HttpResponseForbidden("Unauthorized")
    
    # Proceed with update
    address.update(request.data)
```