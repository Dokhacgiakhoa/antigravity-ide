# 4.2 Create Context Documentation

- Use Task tool with subagent_type="c4-architecture::c4-context"
- Prompt: |
  Create comprehensive C4 Context-level documentation for the system.

  Container documentation: C4-Documentation/c4-container.md
  Component documentation: C4-Documentation/c4-component.md
  System documentation: [List of README, architecture docs, requirements, etc.]
  Test files: [List of test files that show system behavior]

  Create comprehensive C4 Context-level documentation following this structure:
  1. **System Overview Section**:
     - Short Description: [One-sentence description of what the system does]
     - Long Description: [Detailed description of system purpose, capabilities, problems solved]
  2. **Personas Section**:
     - For each persona (human users and programmatic "users"):
       - Persona name
       - Type (Human User / Programmatic User / External System)
       - Description (who they are, what they need)
       - Goals (what they want to achieve)
       - Key features used
  3. **System Features Section**:
     - For each high-level feature:
       - Feature name
       - Description (what this feature does)
       - Users (which personas use this feature)
       - Link to user journey map
  4. **User Journeys Section**:
     - For each key feature and persona:
       - Journey name: [Feature Name] - [Persona Name] Journey
       - Step-by-step journey:
         1. [Step 1]: [Description]
         2. [Step 2]: [Description]
            ...
       - Include all system touchpoints
     - For programmatic users (external systems, APIs):
       - Integration journey with step-by-step process
  5. **External Systems and Dependencies Section**:
     - For each external system:
       - System name
       - Type (Database, API, Service, Message Queue, etc.)
       - Description (what it provides)
       - Integration type (API, Events, File Transfer, etc.)
       - Purpose (why the system depends on this)
  6. **System Context Diagram**:
     - Mermaid C4Context diagram showing:
       - The system (as a box in the center)
       - All personas (users) around it
       - All external systems around it
       - Relationships and data flows
       - Use C4Context notation for proper C4 diagram
  7. **Related Documentation Section**:
     - Links to container documentation
     - Links to component documentation

  Save the output as: C4-Documentation/c4-context.md

  Ensure the documentation is:
  - Understandable by non-technical stakeholders
  - Focuses on system purpose, users, and external relationships
  - Includes comprehensive user journey maps
  - Identifies all external systems and dependencies

- Expected output: c4-context.md with complete system context
- Context: All container, component, and system documentation

## Configuration Options

- `target_directory`: Root directory to analyze (default: current repository root)
- `exclude_patterns`: Patterns to exclude (default: node_modules, .git, build, dist, etc.)
- `output_directory`: Where to write C4 documentation (default: C4-Documentation/)
- `include_tests`: Whether to analyze test files for context (default: true)
- `api_format`: Format for API specs (default: openapi)

## Success Criteria

- ✅ Every subdirectory has a corresponding c4-code-\*.md file
- ✅ All code-level documentation includes complete function signatures
- ✅ Components are logically grouped with clear boundaries
- ✅ All components have interface documentation
- ✅ Master component index created with relationship diagram
- ✅ Containers map to actual deployment units
- ✅ All container APIs documented with OpenAPI/Swagger specs
- ✅ Container diagram shows deployment architecture
- ✅ System context includes all personas (human and programmatic)
- ✅ User journeys documented for all key features
- ✅ All external systems and dependencies identified
- ✅ Context diagram shows system, users, and external systems
- ✅ Documentation is organized in C4-Documentation/ directory

## Output Structure

```
C4-Documentation/
├── c4-code-*.md              # Code-level docs (one per directory)
├── c4-component-*.md          # Component-level docs (one per component)
├── c4-component.md            # Master component index
├── c4-container.md            # Container-level docs
├── c4-context.md              # Context-level docs
└── apis/                      # API specifications
    ├── [container]-api.yaml   # OpenAPI specs for each container
    └── ...
```

## Coordination Notes

- **Bottom-up processing**: Process directories from deepest to shallowest
- **Incremental synthesis**: Each level builds on the previous level's documentation
- **Complete coverage**: Every directory must have code-level documentation before synthesis
- **Link consistency**: All documentation files link to each other appropriately
- **API documentation**: Container APIs must have OpenAPI/Swagger specifications
- **Stakeholder-friendly**: Context documentation should be understandable by non-technical stakeholders
- **Mermaid diagrams**: Use proper C4 Mermaid notation for all diagrams

## Example Usage

```bash
/c4-architecture:c4-architecture
```

This will:

1. Walk through all subdirectories bottom-up
2. Create c4-code-\*.md for each directory
3. Synthesize into components
4. Map to containers with API docs
5. Create system context with personas and journeys

All documentation written to: C4-Documentation/