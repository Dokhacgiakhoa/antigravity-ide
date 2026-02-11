# Phase 10: Prevention Measures

Secure coding practices:

```php
// PHP: Use basename() to strip paths
$filename = basename($_GET['file']);
$path = "/var/www/files/" . $filename;

// PHP: Validate against whitelist
$allowed = ['report.pdf', 'manual.pdf', 'guide.pdf'];
if (in_array($_GET['file'], $allowed)) {
    include("/var/www/files/" . $_GET['file']);
}

// PHP: Canonicalize and verify base path
$base = "/var/www/files/";
$realBase = realpath($base);
$userPath = $base . $_GET['file'];
$realUserPath = realpath($userPath);

if ($realUserPath && strpos($realUserPath, $realBase) === 0) {
    include($realUserPath);
}
```

```python
# Python: Use os.path.realpath() and validate
import os

def safe_file_access(base_dir, filename):
    # Resolve to absolute path
    base = os.path.realpath(base_dir)
    file_path = os.path.realpath(os.path.join(base, filename))
    
    # Verify file is within base directory
    if file_path.startswith(base):
        return open(file_path, 'r').read()
    else:
        raise Exception("Access denied")
```

## Quick Reference