# Phase 3: User Management Scripts

**User Account Creation**
```bash
#!/bin/bash
username="newuser"

# Check if user exists; if not, create new user
if id "$username" &>/dev/null; then
    echo "User $username already exists."
else
    useradd -m -s /bin/bash "$username"
    echo "User $username created."
    
    # Set password interactively
    passwd "$username"
fi
```

**Password Expiry Checker**
```bash
#!/bin/bash
output_file="password_expiry_report.txt"

# Check password expiry for users with bash shell
echo "Password Expiry Report - $(date)" > "$output_file"
echo "=================================" >> "$output_file"

IFS=$'\n'
for user in $(grep "/bin/bash" /etc/passwd | cut -d: -f1); do
    password_expires=$(chage -l "$user" 2>/dev/null | grep "Password expires" | awk -F: '{print $2}')
    echo "User: $user - Password Expires: $password_expires" >> "$output_file"
done
unset IFS

echo "Password expiry report saved to $output_file"
```