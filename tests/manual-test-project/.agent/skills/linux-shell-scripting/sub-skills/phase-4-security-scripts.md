# Phase 4: Security Scripts

**Password Generator**
```bash
#!/bin/bash
length=${1:-16}

# Generate a random password
password=$(openssl rand -base64 48 | tr -dc 'a-zA-Z0-9!@#$%^&*' | head -c"$length")
echo "Generated password: $password"
```

**File Encryption Script**
```bash
#!/bin/bash
file="$1"
action="${2:-encrypt}"

if [ -z "$file" ]; then
    echo "Usage: $0 <file> [encrypt|decrypt]"
    exit 1
fi

if [ "$action" == "encrypt" ]; then
    # Encrypt file using AES-256-CBC
    openssl enc -aes-256-cbc -salt -pbkdf2 -in "$file" -out "$file.enc"
    echo "File encrypted: $file.enc"
elif [ "$action" == "decrypt" ]; then
    # Decrypt file
    output_file="${file%.enc}"
    openssl enc -aes-256-cbc -d -pbkdf2 -in "$file" -out "$output_file"
    echo "File decrypted: $output_file"
fi
```