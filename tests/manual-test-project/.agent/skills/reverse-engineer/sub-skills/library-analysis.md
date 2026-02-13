# Library Analysis

```
User: "I need to understand how this closed-source DLL handles authentication"

Response: For authorized analysis of the DLL:

1. Static analysis:
   - List exports: dumpbin /exports library.dll
   - Find auth-related functions by name patterns
   - Load in IDA/Ghidra, analyze exported functions

2. Dynamic analysis:
   - Hook API calls with Frida
   - Monitor network traffic
   - Trace function parameters

3. Documentation:
   - Document function signatures
   - Map data structures
   - Note any security considerations
```