# Problem: Port already in use

**Symptoms:** "Port 3000 is already in use"
**Solution:**
- Find and kill process using the port
- Use a different port
```bash
# Find process on port 3000
lsof -i :3000

# Kill process
kill -9 <PID>

# Or use different port
PORT=3001 npm start
```