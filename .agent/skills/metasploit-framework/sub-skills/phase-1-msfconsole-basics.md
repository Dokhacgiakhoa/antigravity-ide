# Phase 1: MSFConsole Basics

Launch and navigate the Metasploit console:

```bash
# Start msfconsole
msfconsole

# Quiet mode (skip banner)
msfconsole -q

# Basic navigation commands
msf6 > help                    # Show all commands
msf6 > search [term]           # Search modules
msf6 > use [module]            # Select module
msf6 > info                    # Show module details
msf6 > show options            # Display required options
msf6 > set [OPTION] [value]    # Configure option
msf6 > run / exploit           # Execute module
msf6 > back                    # Return to main console
msf6 > exit                    # Exit msfconsole
```