# IDOR Testing Checklist

| Test | Method | Indicator of Vulnerability |
|------|--------|---------------------------|
| Increment/Decrement ID | Change `id=5` to `id=4` | Returns different user's data |
| Use Victim's ID | Replace with known victim ID | Access granted to victim's resources |
| Enumerate Range | Test IDs 1-1000 | Find valid records of other users |
| Negative Values | Test `id=-1` or `id=0` | Unexpected data or errors |
| Large Values | Test `id=99999999` | System information disclosure |
| String IDs | Change format `id=user_123` | Logic bypass |
| GUID Manipulation | Modify UUID portions | Predictable UUID patterns |