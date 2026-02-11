# Full System Emulation with Firmadyne

```bash
# Extract firmware
./sources/extractor/extractor.py -b brand -sql 127.0.0.1 \
    -np -nk "firmware.bin" images

# Identify architecture and create QEMU image
./scripts/getArch.sh ./images/1.tar.gz
./scripts/makeImage.sh 1

# Infer network configuration
./scripts/inferNetwork.sh 1

# Run emulation
./scratch/1/run.sh
```

## Security Assessment