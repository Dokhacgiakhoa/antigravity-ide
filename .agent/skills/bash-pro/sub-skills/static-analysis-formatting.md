# Static Analysis & Formatting

- **ShellCheck**: Static analyzer with `enable=all` and `external-sources=true` configuration
- **shfmt**: Shell script formatter with standard config (`-i 2 -ci -bn -sr -kp`)
- **checkbashisms**: Detect bash-specific constructs for portability analysis
- **Semgrep**: SAST with custom rules for shell-specific security issues
- **CodeQL**: GitHub's security scanning for shell scripts