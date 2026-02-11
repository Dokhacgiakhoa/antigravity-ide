# Example 1: Complete SMTP Assessment

**Scenario:** Full security assessment of mail server

```bash
# Step 1: Service discovery
nmap -sV -sC -p 25,465,587 mail.target.com

# Step 2: Banner grab
nc mail.target.com 25
EHLO test.com
QUIT

# Step 3: User enumeration
smtp-user-enum -M VRFY -U /usr/share/seclists/Usernames/top-usernames-shortlist.txt -t mail.target.com

# Step 4: Open relay test
nmap -p 25 --script smtp-open-relay mail.target.com

# Step 5: Authentication test
hydra -l admin -P /usr/share/wordlists/fasttrack.txt smtp://mail.target.com

# Step 6: TLS check
openssl s_client -connect mail.target.com:25 -starttls smtp

# Step 7: Check email authentication
dig TXT target.com | grep spf
dig TXT _dmarc.target.com
```