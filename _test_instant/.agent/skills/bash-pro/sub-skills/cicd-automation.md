# CI/CD & Automation

- **pre-commit**: Multi-language pre-commit hook framework
- **actionlint**: GitHub Actions workflow linter
- **gitleaks**: Secrets scanning to prevent credential leaks
- **Makefile**: Automation for lint, format, test, and release workflows

## Common Pitfalls to Avoid

- `for f in $(ls ...)` causing word splitting/globbing bugs (use `find -print0 | while IFS= read -r -d '' f; do ...; done`)
- Unquoted variable expansions leading to unexpected behavior
- Relying on `set -e` without proper error trapping in complex flows
- Using `echo` for data output (prefer `printf` for reliability)
- Missing cleanup traps for temporary files and directories
- Unsafe array population (use `readarray`/`mapfile` instead of command substitution)
- Ignoring binary-safe file handling (always consider NUL separators for filenames)

## Dependency Management

- **Package managers**: Use `basher` or `bpkg` for installing shell script dependencies
- **Vendoring**: Copy dependencies into project for reproducible builds
- **Lock files**: Document exact versions of dependencies used
- **Checksum verification**: Verify integrity of sourced external scripts
- **Version pinning**: Lock dependencies to specific versions to prevent breaking changes
- **Dependency isolation**: Use separate directories for different dependency sets
- **Update automation**: Automate dependency updates with Dependabot or Renovate
- **Security scanning**: Scan dependencies for known vulnerabilities
- Example: `basher install username/repo@version` or `bpkg install username/repo -g`

## Advanced Techniques

- **Error Context**: Use `trap 'echo "Error at line $LINENO: exit $?" >&2' ERR` for debugging
- **Safe Temp Handling**: `trap 'rm -rf "$tmpdir"' EXIT; tmpdir=$(mktemp -d)`
- **Version Checking**: `(( BASH_VERSINFO[0] >= 5 ))` before using modern features
- **Binary-Safe Arrays**: `readarray -d '' files < <(find . -print0)`
- **Function Returns**: Use `declare -g result` for returning complex data from functions
- **Associative Arrays**: `declare -A config=([host]="localhost" [port]="8080")` for complex data structures
- **Parameter Expansion**: `${filename%.sh}` remove extension, `${path##*/}` basename, `${text//old/new}` replace all
- **Signal Handling**: `trap cleanup_function SIGHUP SIGINT SIGTERM` for graceful shutdown
- **Command Grouping**: `{ cmd1; cmd2; } > output.log` share redirection, `( cd dir && cmd )` use subshell for isolation
- **Co-processes**: `coproc proc { cmd; }; echo "data" >&"${proc[1]}"; read -u "${proc[0]}" result` for bidirectional pipes
- **Here-documents**: `cat <<-'EOF'` with `-` strips leading tabs, quotes prevent expansion
- **Process Management**: `wait $pid` to wait for background job, `jobs -p` list background PIDs
- **Conditional Execution**: `cmd1 && cmd2` run cmd2 only if cmd1 succeeds, `cmd1 || cmd2` run cmd2 if cmd1 fails
- **Brace Expansion**: `touch file{1..10}.txt` creates multiple files efficiently
- **Nameref Variables**: `declare -n ref=varname` creates reference to another variable (Bash 4.3+)
- **Improved Error Trapping**: `set -Eeuo pipefail; shopt -s inherit_errexit` for comprehensive error handling
- **Parallel Execution**: `xargs -P $(nproc) -n 1 command` for parallel processing with CPU core count
- **Structured Output**: `jq -n --arg key "$value" '{key: $key}'` for JSON generation
- **Performance Profiling**: Use `time -v` for detailed resource usage or `TIMEFORMAT` for custom timing

## References & Further Reading