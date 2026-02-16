# Cron Format

Minute(0-59) Hour(0-23) Day(1-31) Month(1-12) Weekday(0-7, 0/7=Sun)

## Constraints and Limitations

- Always test scripts in non-production first
- Use absolute paths to avoid errors
- Quote variables to handle spaces properly
- Many scripts require root/sudo privileges
- Use `bash -x script.sh` for debugging