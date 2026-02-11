# Phase 3: File System Analysis

```bash
# Explore extracted filesystem
find . -name "*.conf" -o -name "*.cfg"
find . -name "passwd" -o -name "shadow"
find . -type f -executable

# Find hardcoded credentials
grep -r "password" .
grep -r "api_key" .
grep -rn "BEGIN RSA PRIVATE KEY" .

# Analyze web interface
find . -name "*.cgi" -o -name "*.php" -o -name "*.lua"

# Check for vulnerable binaries
checksec --dir=./bin/
```