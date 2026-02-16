# Development Configuration (Bash with Relaxed Rules)

```bash
#!/bin/bash
# Configure for Bash development

shellcheck \
  --shell=bash \
  --exclude=SC1091,SC2119 \
  --enable=all \
  script.sh
```