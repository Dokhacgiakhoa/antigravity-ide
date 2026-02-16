# Modern Rust: Never Use `static mut`

**CORRECT Patterns:**

```rust
static READY: AtomicBool = AtomicBool::new(false);
static STATE: Mutex<RefCell<Option<T>>> = Mutex::new(RefCell::new(None));
// Access: critical_section::with(|cs| STATE.borrow_ref_mut(cs))
```

**WRONG:** `static mut` is undefined behavior (data races).

**Atomic Ordering:** `Relaxed` (CPU-only) • `Acquire/Release` (shared state) • `AcqRel` (CAS) • `SeqCst` (rarely needed)

---

## 🎯 Interrupt Priorities & NVIC Configuration

**Platform-Specific Priority Levels:**

- **M0/M0+**: 2-4 priority levels (limited)
- **M3/M4/M7**: 8-256 priority levels (configurable)

**Key Principles:**

- **Lower number = higher priority** (e.g., priority 0 preempts priority 1)
- **ISRs at same priority level cannot preempt each other**
- Priority grouping: preemption priority vs sub-priority (M3/M4/M7)
- Reserve highest priorities (0-2) for time-critical operations (DMA, timers)
- Use middle priorities (3-7) for normal peripherals (UART, SPI, I2C)
- Use lowest priorities (8+) for background tasks

**Configuration:**

- C/C++: `NVIC_SetPriority(IRQn, priority)` or `HAL_NVIC_SetPriority()`
- Rust: `NVIC::set_priority()` or use PAC-specific functions

---

## 🔒 Critical Sections & Interrupt Masking

**Purpose:** Protect shared data from concurrent access by ISRs and main code.

**C/C++:**

```cpp
__disable_irq(); /* critical section */ __enable_irq();  // Blocks all

// M3/M4/M7: Mask only lower-priority interrupts
uint32_t basepri = __get_BASEPRI();
__set_BASEPRI(priority_threshold << (8 - __NVIC_PRIO_BITS));
/* critical section */
__set_BASEPRI(basepri);
```

**Rust:** `cortex_m::interrupt::free(|cs| { /* use cs token */ })`

**Best Practices:**

- **Keep critical sections SHORT** (microseconds, not milliseconds)
- Prefer BASEPRI over PRIMASK when possible (allows high-priority ISRs to run)
- Use atomic operations when feasible instead of disabling interrupts
- Document critical section rationale in comments

---

## 🐛 Hardfault Debugging Basics

**Common Causes:**

- Unaligned memory access (especially on M0/M0+)
- Null pointer dereference
- Stack overflow (SP corrupted or overflows into heap/data)
- Illegal instruction or executing data as code
- Writing to read-only memory or invalid peripheral addresses

**Inspection Pattern (M3/M4/M7):**

- Check `HFSR` (HardFault Status Register) for fault type
- Check `CFSR` (Configurable Fault Status Register) for detailed cause
- Check `MMFAR` / `BFAR` for faulting address (if valid)
- Inspect stack frame: `R0-R3, R12, LR, PC, xPSR`

**Platform Limitations:**

- **M0/M0+**: Limited fault information (no CFSR, MMFAR, BFAR)
- **M3/M4/M7**: Full fault registers available

**Debug Tip:** Use hardfault handler to capture stack frame and print/log registers before reset.

---

## 📊 Cortex-M Architecture Differences

| Feature            | M0/M0+                   | M3       | M4/M4F                | M7/M7F               |
| ------------------ | ------------------------ | -------- | --------------------- | -------------------- |
| **Max Clock**      | ~50 MHz                  | ~100 MHz | ~180 MHz              | ~600 MHz             |
| **ISA**            | Thumb-1 only             | Thumb-2  | Thumb-2 + DSP         | Thumb-2 + DSP        |
| **MPU**            | M0+ optional             | Optional | Optional              | Optional             |
| **FPU**            | No                       | No       | M4F: single precision | M7F: single + double |
| **Cache**          | No                       | No       | No                    | I-cache + D-cache    |
| **TCM**            | No                       | No       | No                    | ITCM + DTCM          |
| **DWT**            | No                       | Yes      | Yes                   | Yes                  |
| **Fault Handling** | Limited (HardFault only) | Full     | Full                  | Full                 |

---

## 🧮 FPU Context Saving

**Lazy Stacking (Default on M4F/M7F):** FPU context (S0-S15, FPSCR) saved only if ISR uses FPU. Reduces latency for non-FPU ISRs but creates variable timing.

**Disable for deterministic latency:** Configure `FPU->FPCCR` (clear LSPEN bit) in hard real-time systems or when ISRs always use FPU.

---

## 🛡️ Stack Overflow Protection

**MPU Guard Pages (Best):** Configure no-access MPU region below stack. Triggers MemManage fault on M3/M4/M7. Limited on M0/M0+.

**Canary Values (Portable):** Magic value (e.g., `0xDEADBEEF`) at stack bottom, check periodically.

**Watchdog:** Indirect detection via timeout, provides recovery. **Best:** MPU guard pages, else canary + watchdog.

---

## 🔄 Workflow

1. **Clarify Requirements** → target platform, peripheral type, protocol details (speed, mode, packet size)
2. **Design Driver Skeleton** → constants, structs, compile-time config
3. **Implement Core** → init(), ISR handlers, buffer logic, user-facing API
4. **Validate** → example usage + notes on timing, latency, throughput
5. **Optimize** → suggest DMA, interrupt priorities, or RTOS tasks if needed
6. **Iterate** → refine with improved versions as hardware interaction feedback is provided

---

## 🛠 Example: SPI Driver for External Sensor

**Pattern:** Create non-blocking SPI drivers with transaction-based read/write:

- Configure SPI (clock speed, mode, bit order)
- Use CS pin control with proper timing
- Abstract register read/write operations
- Example: `sensorReadRegister(0x0F)` for WHO_AM_I
- For high throughput (>500 kHz), use DMA transfers

**Platform-specific APIs:**

- **Teensy 4.x**: `SPI.beginTransaction(SPISettings(speed, order, mode))` → `SPI.transfer(data)` → `SPI.endTransaction()`
- **STM32**: `HAL_SPI_Transmit()` / `HAL_SPI_Receive()` or LL drivers
- **nRF52**: `nrfx_spi_xfer()` or `nrf_drv_spi_transfer()`
- **SAMD**: Configure SERCOM in SPI master mode with `SERCOM_SPI_MODE_MASTER`