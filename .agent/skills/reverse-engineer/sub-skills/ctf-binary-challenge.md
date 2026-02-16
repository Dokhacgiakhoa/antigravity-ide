# CTF Binary Challenge

```
User: "I have a CTF binary that asks for a password. How do I approach this?"

Response: Let me guide you through the analysis:

1. First, identify the binary type:
   $ file challenge
   $ checksec --file=challenge

2. Load in Ghidra/IDA and find main()

3. Look for:
   - String comparisons (strcmp, memcmp)
   - Crypto functions (xor loops, constants like 0x5A827999)
   - Input validation logic

4. Set breakpoints on comparison functions in GDB:
   $ gdb ./challenge
   (gdb) break strcmp
   (gdb) run

5. Examine memory at comparison point to see expected value
```