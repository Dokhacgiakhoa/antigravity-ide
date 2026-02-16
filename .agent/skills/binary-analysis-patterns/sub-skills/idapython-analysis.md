# IDAPython Analysis

```python
import idaapi
import idautils
import idc

# Find all function calls
def find_calls(func_name):
    for func_ea in idautils.Functions():
        for head in idautils.Heads(func_ea, idc.find_func_end(func_ea)):
            if idc.print_insn_mnem(head) == "call":
                target = idc.get_operand_value(head, 0)
                if idc.get_func_name(target) == func_name:
                    print(f"Call to {func_name} at {hex(head)}")

# Rename functions based on strings
def auto_rename():
    for s in idautils.Strings():
        for xref in idautils.XrefsTo(s.ea):
            func = idaapi.get_func(xref.frm)
            if func and "sub_" in idc.get_func_name(func.start_ea):
                # Use string as hint for naming
                pass
```

## Best Practices