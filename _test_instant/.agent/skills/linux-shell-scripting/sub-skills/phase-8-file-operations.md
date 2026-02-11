# Phase 8: File Operations

**Directory Synchronization**
```bash
#!/bin/bash
source_dir="/path/to/source"
destination_dir="/path/to/destination"

# Synchronize directories using rsync
rsync -avz --delete "$source_dir/" "$destination_dir/"
echo "Directories synchronized successfully."
```

**Data Cleanup Script**
```bash
#!/bin/bash
directory="${1:-/tmp}"
days="${2:-7}"

echo "Cleaning files older than $days days in $directory"

# Remove files older than specified days
find "$directory" -type f -mtime +"$days" -exec rm -v {} \;
echo "Cleanup completed."
```

**Folder Size Checker**
```bash
#!/bin/bash
folder_path="${1:-.}"

echo "Folder Size Analysis: $folder_path"
echo "===================================="

# Display sizes of subdirectories sorted by size
du -sh "$folder_path"/* 2>/dev/null | sort -rh | head -20
echo ""
echo "Total size:"
du -sh "$folder_path"
```