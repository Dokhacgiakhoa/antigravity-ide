# Essential Commands

| Task | Command |
|------|---------|
| List all | `ls -la` |
| Find files | `find . -name "*.js" -type f` |
| File content | `cat file.txt` |
| First N lines | `head -n 20 file.txt` |
| Last N lines | `tail -n 20 file.txt` |
| Follow log | `tail -f log.txt` |
| Search in files | `grep -r "pattern" --include="*.js"` |
| File size | `du -sh *` |
| Disk usage | `df -h` |

---

## 3. Process Management

| Task | Command |
|------|---------|
| List processes | `ps aux` |
| Find by name | `ps aux \| grep node` |
| Kill by PID | `kill -9 <PID>` |
| Find port user | `lsof -i :3000` |
| Kill port | `kill -9 $(lsof -t -i :3000)` |
| Background | `npm run dev &` |
| Jobs | `jobs -l` |
| Bring to front | `fg %1` |

---

## 4. Text Processing