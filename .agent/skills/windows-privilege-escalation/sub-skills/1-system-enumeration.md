# 1. System Enumeration

#### Basic System Information
```powershell
# OS version and patches
systeminfo | findstr /B /C:"OS Name" /C:"OS Version"
wmic qfe

# Architecture
wmic os get osarchitecture
echo %PROCESSOR_ARCHITECTURE%

# Environment variables
set
Get-ChildItem Env: | ft Key,Value

# List drives
wmic logicaldisk get caption,description,providername
```

#### User Enumeration
```powershell
# Current user
whoami
echo %USERNAME%

# User privileges
whoami /priv
whoami /groups
whoami /all

# All users
net user
Get-LocalUser | ft Name,Enabled,LastLogon

# User details
net user administrator
net user %USERNAME%

# Local groups
net localgroup
net localgroup administrators
Get-LocalGroupMember Administrators | ft Name,PrincipalSource
```

#### Network Enumeration
```powershell
# Network interfaces
ipconfig /all
Get-NetIPConfiguration | ft InterfaceAlias,InterfaceDescription,IPv4Address

# Routing table
route print
Get-NetRoute -AddressFamily IPv4 | ft DestinationPrefix,NextHop,RouteMetric

# ARP table
arp -A

# Active connections
netstat -ano

# Network shares
net share

# Domain Controllers
nltest /DCLIST:DomainName
```

#### Antivirus Enumeration
```powershell
# Check AV products
WMIC /Node:localhost /Namespace:\\root\SecurityCenter2 Path AntivirusProduct Get displayName
```