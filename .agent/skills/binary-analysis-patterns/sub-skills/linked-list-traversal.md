# Linked List Traversal

```asm
; while (node != NULL)
list_loop:
test rdi, rdi          ; node == NULL?
jz list_done
; ... process node ...
mov rdi, [rdi+8]       ; node = node->next (assuming next at offset 8)
jmp list_loop
list_done:
```

## Common Code Patterns