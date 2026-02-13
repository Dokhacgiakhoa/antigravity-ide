# Example 3: DOM-Based XSS via Hash Fragment

**Scenario**: JavaScript reads URL hash and inserts into DOM

**Vulnerable Code**:
```javascript
document.getElementById('welcome').innerHTML = 'Hello, ' + location.hash.slice(1);
```

**Attack URL**:
```
https://app.example.com/dashboard#<img src=x onerror=alert(document.cookie)>
```

**Result**: Script executes entirely client-side; payload never touches server.