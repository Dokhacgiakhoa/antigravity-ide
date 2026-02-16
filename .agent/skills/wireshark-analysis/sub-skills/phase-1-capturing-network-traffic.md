# Phase 1: Capturing Network Traffic

#### Start Live Capture
Begin capturing packets on network interface:

```
1. Launch Wireshark
2. Select network interface from main screen
3. Click shark fin icon or double-click interface
4. Capture begins immediately
```

#### Capture Controls
| Action | Shortcut | Description |
|--------|----------|-------------|
| Start/Stop Capture | Ctrl+E | Toggle capture on/off |
| Restart Capture | Ctrl+R | Stop and start new capture |
| Open PCAP File | Ctrl+O | Load existing capture file |
| Save Capture | Ctrl+S | Save current capture |

#### Capture Filters
Apply filters before capture to limit data collection:

```
# Capture only specific host
host 192.168.1.100

# Capture specific port
port 80

# Capture specific network
net 192.168.1.0/24

# Exclude specific traffic
not arp

# Combine filters
host 192.168.1.100 and port 443
```