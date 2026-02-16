# Example 5: Python Automation Script

```python
#!/usr/bin/env python3
import shodan
import json

API_KEY = 'YOUR_API_KEY'
api = shodan.Shodan(API_KEY)

def recon_organization(org_name):
    """Perform reconnaissance on an organization"""
    try:
        # Search for organization
        query = f'org:"{org_name}"'
        results = api.search(query)
        
        print(f"[*] Found {results['total']} hosts for {org_name}")
        
        # Collect unique IPs and ports
        hosts = {}
        for result in results['matches']:
            ip = result['ip_str']
            port = result['port']
            product = result.get('product', 'unknown')
            
            if ip not in hosts:
                hosts[ip] = []
            hosts[ip].append({'port': port, 'product': product})
        
        # Output findings
        for ip, services in hosts.items():
            print(f"\n[+] {ip}")
            for svc in services:
                print(f"    - {svc['port']}/tcp ({svc['product']})")
        
        return hosts
        
    except shodan.APIError as e:
        print(f"Error: {e}")
        return None

if __name__ == '__main__':
    recon_organization("Target Company")
```