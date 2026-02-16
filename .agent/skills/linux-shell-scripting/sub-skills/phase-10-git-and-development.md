# Phase 10: Git and Development

**Git Repository Updater**
```bash
#!/bin/bash
git_repos=("/path/to/repo1" "/path/to/repo2")

for repo in "${git_repos[@]}"; do
    if [ -d "$repo/.git" ]; then
        echo "Updating repository: $repo"
        cd "$repo"
        git fetch --all
        git pull origin "$(git branch --show-current)"
        echo "Updated: $repo"
    else
        echo "Not a git repository: $repo"
    fi
done

echo "All repositories updated."
```

**Remote Script Execution**
```bash
#!/bin/bash
remote_server="${1:-user@remote-server}"
remote_script="${2:-/path/to/remote/script.sh}"

# Execute a script on a remote server via SSH
ssh "$remote_server" "bash -s" < "$remote_script"
echo "Remote script executed on $remote_server"
```

## Quick Reference