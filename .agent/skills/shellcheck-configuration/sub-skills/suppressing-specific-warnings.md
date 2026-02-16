# Suppressing Specific Warnings

```bash
#!/bin/bash

# Disable warning for entire line
# shellcheck disable=SC2086
for file in $(ls -la); do
    echo "$file"
done

# Disable for entire script
# shellcheck disable=SC1091,SC2119

# Disable multiple warnings (format varies)
command_that_fails() {
    # shellcheck disable=SC2015
    [ -f "$1" ] && echo "found" || echo "not found"
}

# Disable specific check for source directive
# shellcheck source=./helper.sh
source helper.sh
```