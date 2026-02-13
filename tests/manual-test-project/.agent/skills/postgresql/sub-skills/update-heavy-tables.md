# Update-Heavy Tables

- **Separate hot/cold columns**—put frequently updated columns in separate table to minimize bloat.
- **Use `fillfactor=90`** to leave space for HOT updates that avoid index maintenance.
- **Avoid updating indexed columns**—prevents beneficial HOT updates.
- **Partition by update patterns**—separate frequently updated rows in a different partition from stable data.