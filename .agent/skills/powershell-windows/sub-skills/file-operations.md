# File Operations

| Operation | Pattern |
|-----------|---------|
| Read | `Get-Content "file.json" -Raw | ConvertFrom-Json` |
| Write | `$data | ConvertTo-Json -Depth 10 | Out-File "file.json" -Encoding UTF8` |

---

## 9. Common Errors

| Error Message | Cause | Fix |
|---------------|-------|-----|
| "parameter 'or'" | Missing parentheses | Wrap cmdlets in () |
| "Unexpected token" | Unicode character | Use ASCII only |
| "Cannot find property" | Null object | Check null first |
| "Cannot convert" | Type mismatch | Use .ToString() |

---

## 10. Script Template

```powershell
# Strict mode
Set-StrictMode -Version Latest
$ErrorActionPreference = "Continue"

# Paths
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

# Main
try {
    # Logic here
    Write-Output "[OK] Done"
    exit 0
}
catch {
    Write-Warning "Error: $_"
    exit 1
}
```

---

> **Remember:** PowerShell has unique syntax rules. Parentheses, ASCII-only, and null checks are non-negotiable.