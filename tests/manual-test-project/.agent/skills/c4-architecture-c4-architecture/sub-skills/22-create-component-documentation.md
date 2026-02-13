# 2.2 Create Component Documentation

For each identified component:

- Use Task tool with subagent_type="c4-architecture::c4-component"
- Prompt: |
  Synthesize the following C4 Code-level documentation files into a logical component:

  Code files to analyze:
  [List of c4-code-*.md file paths]

  Create comprehensive C4 Component-level documentation following this structure:
  1. **Overview Section**:
     - Name: [Component name - descriptive and meaningful]
     - Description: [Short description of component purpose]
     - Type: [Application, Service, Library, etc.]
     - Technology: [Primary technologies used]
  2. **Purpose Section**:
     - Detailed description of what this component does
     - What problems it solves
     - Its role in the system
  3. **Software Features Section**:
     - List all software features provided by this component
     - Each feature with a brief description
  4. **Code Elements Section**:
     - List all c4-code-\*.md files contained in this component
     - Link to each file with a brief description
  5. **Interfaces Section**:
     - Document all component interfaces:
       - Interface name
       - Protocol (REST, GraphQL, gRPC, Events, etc.)
       - Description
       - Operations (function signatures, endpoints, etc.)
  6. **Dependencies Section**:
     - Components used (other components this depends on)
     - External systems (databases, APIs, services)
  7. **Component Diagram**:
     - Mermaid diagram showing this component and its relationships

  Save the output as: C4-Documentation/c4-component-[component-name].md
  Use a sanitized component name for the filename.

- Expected output: c4-component-<name>.md file for each component
- Context: All relevant c4-code-\*.md files for this component