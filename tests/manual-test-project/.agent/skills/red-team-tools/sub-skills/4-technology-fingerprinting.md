# 4. Technology Fingerprinting

Identify technologies for targeted attacks:

```bash
# Whatweb scanning
whatweb -i hosts.txt -a 3 -v > tech_stack.txt

# Nuclei technology detection
nuclei -l hosts.txt -t technologies/ -o tech_nuclei.txt

# Wappalyzer (if available)
# Browser extension for manual review
```