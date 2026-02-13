# Switch Statement Patterns

```asm
; Jump table pattern
mov eax, [switch_var]
cmp eax, max_case
ja default_case
jmp [jump_table + eax*8]

; Sequential comparison (small switch)
cmp eax, 1
je case_1
cmp eax, 2
je case_2
cmp eax, 3
je case_3
jmp default_case
```

## Data Structure Patterns