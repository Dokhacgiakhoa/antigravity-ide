# Phase 4: Wireless Scanning Tools

#### Aircrack-ng Suite

Wireless network penetration testing:

```bash
# Check wireless interface
airmon-ng

# Enable monitor mode
sudo airmon-ng start wlan0

# Scan for networks
sudo airodump-ng wlan0mon

# Capture specific network
sudo airodump-ng -c <channel> --bssid <target_bssid> -w capture wlan0mon

# Deauthentication attack
sudo aireplay-ng -0 10 -a <bssid> wlan0mon

# Crack WPA handshake
aircrack-ng -w wordlist.txt -b <bssid> capture*.cap

# Crack WEP
aircrack-ng -b <bssid> capture*.cap
```

#### Kismet

Passive wireless detection:

```bash
# Start Kismet
kismet

# Specify interface
kismet -c wlan0

# Access web interface
# http://localhost:2501

# Detect hidden networks
# Kismet passively collects all beacon frames
# including those from hidden SSIDs
```