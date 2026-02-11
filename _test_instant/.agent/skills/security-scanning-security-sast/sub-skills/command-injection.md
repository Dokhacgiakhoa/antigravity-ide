# Command Injection

**VULNERABLE**: os.system() or subprocess with shell=True and user input

**SECURE**:
```python
subprocess.run(['ping', '-c', '4', user_input])  # Array args
import shlex
safe_input = shlex.quote(user_input)  # Input validation
```