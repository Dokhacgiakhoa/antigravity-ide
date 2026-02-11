# Write-1-to-Clear (W1C) Register Pattern

Many status registers (especially i.MX RT, STM32) clear by writing 1, not 0:

```cpp
uint32_t status = mmio_read(&USB1_USBSTS);
mmio_write(&USB1_USBSTS, status);  // Write bits back to clear them
```

**Common W1C:** `USBSTS`, `PORTSC`, CCM status. **Wrong:** `status &= ~bit` does nothing on W1C registers.