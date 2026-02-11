# Example 2: SNMP Testing Setup

```bash
# Quick SNMP configuration
sudo apt install snmpd
echo "rocommunity public" | sudo tee -a /etc/snmp/snmpd.conf
sudo systemctl restart snmpd

# Test enumeration
snmpwalk -c public -v1 localhost
```