# Address Validation Helper (Debug Builds)

**Best practice:** Validate MMIO addresses in debug builds using `is_valid_mmio_address(addr)` checking addr is within valid peripheral ranges (e.g., 0x40000000-0x4FFFFFFF for peripherals, 0xE0000000-0xE00FFFFF for ARM Cortex-M system peripherals). Use `#ifdef DEBUG` guards and halt on invalid addresses.