# Phase 3: WordPress Version Detection

Identify WordPress version:

```bash
# WPScan version detection
wpscan --url http://target.com

# Manual version checks
curl -s http://target.com/readme.html | grep -i version
curl -s http://target.com/feed/ | grep -i generator
curl -s http://target.com | grep "?ver="

# Check meta generator
curl -s http://target.com | grep 'name="generator"'

# Check RSS feeds
curl -s http://target.com/feed/
curl -s http://target.com/comments/feed/
```

Version sources:
- Meta generator tag in HTML
- readme.html file
- RSS/Atom feeds
- JavaScript/CSS file versions