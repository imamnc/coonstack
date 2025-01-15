#!/bin/bash

# Check if the cron file exists
if [ -f /etc/crontabs/jobs ]; then
    echo "Cron file found. Adding to crontab..."
    crontab -u root /etc/crontabs/jobs
    crond
else
    echo "Cron file not found. Skipping crontab setup."
fi

# Run the default command (e.g., php-fpm)
exec "$@"
