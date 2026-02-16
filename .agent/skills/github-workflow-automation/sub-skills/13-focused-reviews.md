# 1.3 Focused Reviews

```yaml
# Review only specific file types
- name: Filter code files
  run: |
    files=$(git diff --name-only origin/${{ github.base_ref }}...HEAD | \
            grep -E '\.(ts|tsx|js|jsx|py|go)$' || true)
    echo "code_files=$files" >> $GITHUB_OUTPUT

# Review with context
- name: AI Review with context
  run: |
    # Include relevant context files
    context=""
    for file in ${{ steps.changed.outputs.files }}; do
      if [[ -f "$file" ]]; then
        context+="=== $file ===\n$(cat $file)\n\n"
      fi
    done

    # Send to AI with full file context
````

---

## 2. Issue Triage Automation