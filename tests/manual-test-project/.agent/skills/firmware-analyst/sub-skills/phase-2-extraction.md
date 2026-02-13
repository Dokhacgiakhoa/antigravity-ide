# Phase 2: Extraction

```bash
# Binwalk v3 recursive extraction (matryoshka mode)
binwalk --extract --matryoshka firmware.bin
binwalk -eM firmware.bin  # Short form

# Extract to custom directory
binwalk -e -C ./extracted firmware.bin

# Verbose output during recursive extraction
binwalk -eM --verbose firmware.bin

# Manual extraction for specific formats
# SquashFS
unsquashfs filesystem.squashfs

# JFFS2
jefferson filesystem.jffs2 -d output/

# UBIFS
ubireader_extract_images firmware.ubi

# YAFFS
unyaffs filesystem.yaffs

# Cramfs
cramfsck -x output/ filesystem.cramfs
```