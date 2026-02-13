# Example 1: Complete HTTP Lab Setup

```bash
# Install and configure
sudo apt install apache2
sudo systemctl start apache2

# Create login page
cat << 'EOF' | sudo tee /var/www/html/login.html
<html>
<body>
<form method="POST" action="login.php">
Username: <input type="text" name="user"><br>
Password: <input type="password" name="pass"><br>
<input type="submit" value="Login">
</form>
</body>
</html>
EOF

# Allow through firewall
sudo ufw allow 80/tcp
```