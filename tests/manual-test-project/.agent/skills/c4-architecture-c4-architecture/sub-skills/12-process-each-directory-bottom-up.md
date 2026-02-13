# 1.2 Process Each Directory (Bottom-Up)

For each directory, starting from the deepest:

- Use Task tool with subagent_type="c4-architecture::c4-code"
- Prompt: |
  Analyze the code in directory: [directory_path]

  Create comprehensive C4 Code-level documentation following this structure:
  1. **Overview Section**:
     - Name: [Descriptive name for this code directory]
     - Description: [Short description of what this code does]
     - Location: [Link to actual directory path relative to repo root]
     - Language: [Primary programming language(s) used]
     - Purpose: [What this code accomplishes]
  2. **Code Elements Section**:
     - Document all functions/methods with complete signatures:
       - Function name, parameters (with types), return type
       - Description of what each function does
       - Location (file path and line numbers)
       - Dependencies (what this function depends on)
     - Document all classes/modules:
       - Class name, description, location
       - Methods and their signatures
       - Dependencies
  3. **Dependencies Section**:
     - Internal dependencies (other code in this repo)
     - External dependencies (libraries, frameworks, services)
  4. **Relationships Section**:
     - Optional Mermaid diagram if relationships are complex

  Save the output as: C4-Documentation/c4-code-[directory-name].md
  Use a sanitized directory name (replace / with -, remove special chars) for the filename.

  Ensure the documentation includes:
  - Complete function signatures with all parameters and types
  - Links to actual source code locations
  - All dependencies (internal and external)
  - Clear, descriptive names and descriptions

- Expected output: c4-code-<directory-name>.md file in C4-Documentation/
- Context: All files in the directory and its subdirectories

**Repeat for every subdirectory** until all directories have corresponding c4-code-\*.md files.

## Phase 2: Component-Level Synthesis