# Conditional Branches

```asm
; if (a == b)
cmp eax, ebx
jne skip_block
; ... if body ...
skip_block:

; if (a < b) - signed
cmp eax, ebx
jge skip_block    ; Jump if greater or equal
; ... if body ...
skip_block:

; if (a < b) - unsigned
cmp eax, ebx
jae skip_block    ; Jump if above or equal
; ... if body ...
skip_block:
```