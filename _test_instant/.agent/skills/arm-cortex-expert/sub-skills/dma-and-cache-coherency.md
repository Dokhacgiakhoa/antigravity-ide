# DMA and Cache Coherency

**CRITICAL:** ARM Cortex-M7 devices (Teensy 4.x, STM32 F7/H7) have data caches. DMA and CPU can see different data without cache maintenance.

**Alignment Requirements (CRITICAL):**

- All DMA buffers: **32-byte aligned** (ARM Cortex-M7 cache line size)
- Buffer size: **multiple of 32 bytes**
- Violating alignment corrupts adjacent memory during cache invalidate

**Memory Placement Strategies (Best to Worst):**

1. **DTCM/SRAM** (Non-cacheable, fastest CPU access)
   - C++: `__attribute__((section(".dtcm.bss"))) __attribute__((aligned(32))) static uint8_t buffer[512];`
   - Rust: `#[link_section = ".dtcm"] #[repr(C, align(32))] static mut BUFFER: [u8; 512] = [0; 512];`

2. **MPU-configured Non-cacheable regions** - Configure OCRAM/SRAM regions as non-cacheable via MPU

3. **Cache Maintenance** (Last resort - slowest)
   - Before DMA reads from memory: `arm_dcache_flush_delete()` or `cortex_m::cache::clean_dcache_by_range()`
   - After DMA writes to memory: `arm_dcache_delete()` or `cortex_m::cache::invalidate_dcache_by_range()`