# Required Tools

```bash
# Metasploit comes pre-installed on Kali Linux
# For other systems:
curl https://raw.githubusercontent.com/rapid7/metasploit-omnibus/master/config/templates/metasploit-framework-wrappers/msfupdate.erb > msfinstall
chmod 755 msfinstall
./msfinstall

# Start PostgreSQL for database support
sudo systemctl start postgresql
sudo msfdb init
```