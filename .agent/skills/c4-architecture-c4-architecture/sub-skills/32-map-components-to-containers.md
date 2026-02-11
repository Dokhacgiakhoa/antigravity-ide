# 3.2 Map Components to Containers

- Use Task tool with subagent_type="c4-architecture::c4-container"
- Prompt: |
  Synthesize components into containers based on deployment definitions.

  Component documentation:
  [List of all c4-component-*.md file paths]

  Deployment definitions found:
  [List of deployment config files: Dockerfiles, K8s manifests, etc.]

  Create comprehensive C4 Container-level documentation following this structure:
  1. **Containers Section** (for each container):
     - Name: [Container name]
     - Description: [Short description of container purpose and deployment]
     - Type: [Web Application, API, Database, Message Queue, etc.]
     - Technology: [Primary technologies: Node.js, Python, PostgreSQL, etc.]
     - Deployment: [Docker, Kubernetes, Cloud Service, etc.]
  2. **Purpose Section** (for each container):
     - Detailed description of what this container does
     - How it's deployed
     - Its role in the system
  3. **Components Section** (for each container):
     - List all components deployed in this container
     - Link to component documentation
  4. **Interfaces Section** (for each container):
     - Document all container APIs and interfaces:
       - API/Interface name
       - Protocol (REST, GraphQL, gRPC, Events, etc.)
       - Description
       - Link to OpenAPI/Swagger/API Spec file
       - List of endpoints/operations
  5. **API Specifications**:
     - For each container API, create an OpenAPI 3.1+ specification
     - Save as: C4-Documentation/apis/[container-name]-api.yaml
     - Include:
       - All endpoints with methods (GET, POST, etc.)
       - Request/response schemas
       - Authentication requirements
       - Error responses
  6. **Dependencies Section** (for each container):
     - Containers used (other containers this depends on)
     - External systems (databases, third-party APIs, etc.)
     - Communication protocols
  7. **Infrastructure Section** (for each container):
     - Link to deployment config (Dockerfile, K8s manifest, etc.)
     - Scaling strategy
     - Resource requirements (CPU, memory, storage)
  8. **Container Diagram**:
     - Mermaid diagram showing all containers and their relationships
     - Show communication protocols
     - Show external system dependencies

  Save the output as: C4-Documentation/c4-container.md

- Expected output: c4-container.md with all containers and API specifications
- Context: All component documentation and deployment definitions

## Phase 4: Context-Level Documentation