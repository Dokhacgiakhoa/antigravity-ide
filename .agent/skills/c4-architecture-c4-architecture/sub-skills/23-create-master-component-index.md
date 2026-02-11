# 2.3 Create Master Component Index

- Use Task tool with subagent_type="c4-architecture::c4-component"
- Prompt: |
  Create a master component index that lists all components in the system.

  Based on all c4-component-\*.md files created, generate:
  1. **System Components Section**:
     - List all components with:
       - Component name
       - Short description
       - Link to component documentation
  2. **Component Relationships Diagram**:
     - Mermaid diagram showing all components and their relationships
     - Show dependencies between components
     - Show external system dependencies

  Save the output as: C4-Documentation/c4-component.md

- Expected output: Master c4-component.md file
- Context: All c4-component-\*.md files

## Phase 3: Container-Level Synthesis