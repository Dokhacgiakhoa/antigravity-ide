# Phase 7: SSH Tunneling and Port Forwarding

#### Local Port Forwarding

Forward local port to remote service:

```bash
# Syntax: ssh -L <local_port>:<remote_host>:<remote_port> user@ssh_server

# Access internal web server through SSH
ssh -L 8080:192.168.1.50:80 user@192.168.1.100
# Now access http://localhost:8080

# Access internal database
ssh -L 3306:192.168.1.50:3306 user@192.168.1.100

# Multiple forwards
ssh -L 8080:192.168.1.50:80 -L 3306:192.168.1.51:3306 user@192.168.1.100
```

#### Remote Port Forwarding

Expose local service to remote network:

```bash
# Syntax: ssh -R <remote_port>:<local_host>:<local_port> user@ssh_server

# Expose local web server to remote
ssh -R 8080:localhost:80 user@192.168.1.100
# Remote can access via localhost:8080

# Reverse shell callback
ssh -R 4444:localhost:4444 user@192.168.1.100
```

#### Dynamic Port Forwarding (SOCKS Proxy)

Create SOCKS proxy for network pivoting:

```bash
# Create SOCKS proxy on local port 1080
ssh -D 1080 user@192.168.1.100

# Use with proxychains
echo "socks5 127.0.0.1 1080" >> /etc/proxychains.conf
proxychains nmap -sT -Pn 192.168.1.0/24

# Browser configuration
# Set SOCKS proxy to localhost:1080
```

#### ProxyJump (Jump Hosts)

Chain through multiple SSH servers:

```bash
# Jump through intermediate host
ssh -J user1@jump_host user2@target_host

# Multiple jumps
ssh -J user1@jump1,user2@jump2 user3@target

# With SSH config
# ~/.ssh/config
Host target
    HostName 192.168.2.50
    User admin
    ProxyJump user@192.168.1.100
```