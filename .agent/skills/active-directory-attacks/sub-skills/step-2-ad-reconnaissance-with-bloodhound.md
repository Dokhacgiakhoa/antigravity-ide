# Step 2: AD Reconnaissance with BloodHound

```bash
# Start BloodHound
neo4j console
bloodhound --no-sandbox

# Collect data with SharpHound
.\SharpHound.exe -c All
.\SharpHound.exe -c All --ldapusername user --ldappassword pass

# Python collector (from Linux)
bloodhound-python -u 'user' -p 'password' -d domain.local -ns 10.10.10.10 -c all
```