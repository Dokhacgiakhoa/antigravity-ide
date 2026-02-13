# Platform Safety & Gotchas

**⚠️ Voltage Tolerances:**

- Most platforms: GPIO max 3.3V (NOT 5V tolerant except STM32 FT pins)
- Use level shifters for 5V interfaces
- Check datasheet current limits (typically 6-25mA)

**Teensy 4.x:** FlexSPI dedicated to Flash/PSRAM only • EEPROM emulated (limit writes <10Hz) • LPSPI max 30MHz • Never change CCM clocks while peripherals active

**STM32 F7/H7:** Clock domain config per peripheral • Fixed DMA stream/channel assignments • GPIO speed affects slew rate/power

**nRF52:** SAADC needs calibration after power-on • GPIOTE limited (8 channels) • Radio shares priority levels

**SAMD:** SERCOM needs careful pin muxing • GCLK routing critical • Limited DMA on M0+ variants