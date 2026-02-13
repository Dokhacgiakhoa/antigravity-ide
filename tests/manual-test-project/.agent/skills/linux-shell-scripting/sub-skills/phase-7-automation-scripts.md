# Phase 7: Automation Scripts

**Automated Package Installation**
```bash
#!/bin/bash
packages=("vim" "htop" "curl" "wget" "git")

echo "Installing packages..."

for package in "${packages[@]}"; do
    if dpkg -l | grep -q "^ii  $package"; then
        echo "[SKIP] $package is already installed"
    else
        sudo apt-get install -y "$package"
        echo "[INSTALLED] $package"
    fi
done

echo "Package installation completed."
```

**Task Scheduler (Cron Setup)**
```bash
#!/bin/bash
scheduled_task="/path/to/your_script.sh"
schedule_time="0 2 * * *"  # Run at 2 AM daily

# Add task to crontab
(crontab -l 2>/dev/null; echo "$schedule_time $scheduled_task") | crontab -
echo "Task scheduled: $schedule_time $scheduled_task"
```

**Service Restart Script**
```bash
#!/bin/bash
service_name="${1:-apache2}"

# Restart a specified service
if systemctl is-active --quiet "$service_name"; then
    echo "Restarting $service_name..."
    sudo systemctl restart "$service_name"
    echo "Service $service_name restarted."
else
    echo "Service $service_name is not running. Starting..."
    sudo systemctl start "$service_name"
    echo "Service $service_name started."
fi
```