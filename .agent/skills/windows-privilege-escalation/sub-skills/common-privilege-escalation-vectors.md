# Common Privilege Escalation Vectors

| Vector | Check Command |
|--------|---------------|
| Unquoted paths | `wmic service get pathname \| findstr /i /v """` |
| Weak service perms | `accesschk.exe -uwcqv "Everyone" *` |
| AlwaysInstallElevated | `reg query HKCU\...\Installer /v AlwaysInstallElevated` |
| Stored credentials | `cmdkey /list` |
| Token privileges | `whoami /priv` |
| Scheduled tasks | `schtasks /query /fo LIST /v` |