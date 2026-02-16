# 4. Search Filters Reference

#### Network Filters
```
ip:1.2.3.4                  # Specific IP address
net:192.168.0.0/24          # Network range (CIDR)
hostname:example.com        # Hostname contains
port:22                     # Specific port
asn:AS15169                 # Autonomous System Number
```

#### Geographic Filters
```
country:US                  # Two-letter country code
country:"United States"     # Full country name
city:"San Francisco"        # City name
state:CA                    # State/region
postal:94102                # Postal/ZIP code
geo:37.7,-122.4             # Lat/long coordinates
```

#### Organization Filters
```
org:"Google"                # Organization name
isp:"Comcast"               # ISP name
```

#### Service/Product Filters
```
product:nginx               # Software product
version:1.14.0              # Software version
os:"Windows Server 2019"    # Operating system
http.title:"Dashboard"      # HTTP page title
http.html:"login"           # HTML content
http.status:200             # HTTP status code
ssl.cert.subject.cn:*.example.com  # SSL certificate
ssl:true                    # Has SSL enabled
```

#### Vulnerability Filters
```
vuln:CVE-2019-0708          # Specific CVE
has_vuln:true               # Has any vulnerability
```

#### Screenshot Filters
```
has_screenshot:true         # Has screenshot available
screenshot.label:webcam     # Screenshot type
```