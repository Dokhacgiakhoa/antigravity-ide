# Testing Frameworks

- **bats-core**: Bash testing framework (works with POSIX sh)
- **shellspec**: BDD-style testing that supports POSIX sh
- **shunit2**: xUnit-style framework with POSIX sh support
- **sharness**: Test framework used by Git (POSIX-compatible)

## Common Pitfalls to Avoid

- Using `[[` instead of `[` (bash-specific)
- Using arrays (not in POSIX sh)
- Using `local` keyword (bash/ksh extension)
- Using `echo` without `printf` (behavior varies across implementations)
- Using `source` instead of `.` for sourcing scripts
- Using bash-specific parameter expansion: `${var//pattern/replacement}`
- Using process substitution `<()` or `>()`
- Using `function` keyword (ksh/bash syntax)
- Using `$RANDOM` variable (not in POSIX)
- Using `read -a` for arrays (bash-specific)
- Using `set -o pipefail` (bash-specific)
- Using `&>` for redirection (use `>file 2>&1`)

## Advanced Techniques

- **Error Trapping**: `trap 'echo "Error at line $LINENO" >&2; exit 1' EXIT; trap - EXIT` on success
- **Safe Temp Files**: `tmpfile=$(mktemp) || exit 1; trap 'rm -f "$tmpfile"' EXIT INT TERM`
- **Simulating Arrays**: `set -- item1 item2 item3; for arg; do process "$arg"; done`
- **Field Parsing**: `IFS=:; while read -r user pass uid gid; do ...; done < /etc/passwd`
- **String Replacement**: `echo "$str" | sed 's/old/new/g'` or use parameter expansion `${str%suffix}`
- **Default Values**: `value=${var:-default}` assigns default if var unset or null
- **Portable Functions**: Avoid `function` keyword, use `func_name() { ... }`
- **Subshell Isolation**: `(cd dir && cmd)` changes directory without affecting parent
- **Here-documents**: `cat <<'EOF'` with quotes prevents variable expansion
- **Command Existence**: `command -v cmd >/dev/null 2>&1 && echo "found" || echo "missing"`

## POSIX-Specific Best Practices

- Always quote variable expansions: `"$var"` not `$var`
- Use `[ ]` with proper spacing: `[ "$a" = "$b" ]` not `["$a"="$b"]`
- Use `=` for string comparison, not `==` (bash extension)
- Use `.` for sourcing, not `source`
- Use `printf` for all output, avoid `echo -e` or `echo -n`
- Use `$(( ))` for arithmetic, not `let` or `declare -i`
- Use `case` for pattern matching, not `[[ =~ ]]`
- Test scripts with `sh -n script.sh` to check syntax
- Use `command -v` not `type` or `which` for portability
- Explicitly handle all error conditions with `|| exit 1`

## References & Further Reading