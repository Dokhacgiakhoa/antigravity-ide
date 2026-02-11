# Example 3: IoT Device Discovery

```bash
# Find exposed webcams
shodan search 'webcam has_screenshot:true country:US'

# Find industrial control systems
shodan search 'port:502 product:modbus'

# Find exposed printers
shodan search '"HP-ChaiSOE" port:80'

# Find smart home devices
shodan search 'product:nest'
```