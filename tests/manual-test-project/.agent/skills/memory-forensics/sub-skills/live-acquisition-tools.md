# Live Acquisition Tools

#### Windows
```powershell
# WinPmem (Recommended)
winpmem_mini_x64.exe memory.raw

# DumpIt
DumpIt.exe

# Belkasoft RAM Capturer
# GUI-based, outputs raw format

# Magnet RAM Capture
# GUI-based, outputs raw format
```

#### Linux
```bash
# LiME (Linux Memory Extractor)
sudo insmod lime.ko "path=/tmp/memory.lime format=lime"

# /dev/mem (limited, requires permissions)
sudo dd if=/dev/mem of=memory.raw bs=1M

# /proc/kcore (ELF format)
sudo cp /proc/kcore memory.elf
```

#### macOS
```bash
# osxpmem
sudo ./osxpmem -o memory.raw

# MacQuisition (commercial)
```