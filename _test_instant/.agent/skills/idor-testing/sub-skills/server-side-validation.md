# Server-Side Validation

```python
# Always validate on server, never trust client input
def download_receipt(request, receipt_id):
    receipt = Receipt.objects.filter(
        id=receipt_id,
        user=request.user  # Critical: filter by current user
    ).first()
    
    if not receipt:
        return HttpResponseNotFound()
    
    return FileResponse(receipt.file)
```