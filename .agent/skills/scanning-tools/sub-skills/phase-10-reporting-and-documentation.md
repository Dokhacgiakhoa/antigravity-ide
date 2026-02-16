# Phase 10: Reporting and Documentation

Generate professional reports:

```bash
# Nmap XML to HTML
xsltproc nmap-output.xml -o report.html

# OpenVAS report export
gvm-cli socket --xml '<get_reports report_id="<id>" format_id="<pdf_format>"/>'

# Combine multiple scan results
# Use tools like Faraday, Dradis, or custom scripts

# Executive summary template:
# 1. Scope and methodology
# 2. Key findings summary
# 3. Risk distribution chart
# 4. Critical vulnerabilities
# 5. Remediation recommendations
# 6. Detailed technical findings
```

## Quick Reference