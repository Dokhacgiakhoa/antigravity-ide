# External Systems

- [External System]: [How it's used]

## Component Diagram

Use proper Mermaid C4Component syntax. Component diagrams show components **within a single container**:

```mermaid
C4Component
    title Component Diagram for [Container Name]

    Container_Boundary(container, "Container Name") {
        Component(component1, "Component 1", "Type", "Description")
        Component(component2, "Component 2", "Type", "Description")
        ComponentDb(component3, "Component 3", "Database", "Description")
    }
    Container_Ext(externalContainer, "External Container", "Description")
    System_Ext(externalSystem, "External System", "Description")

    Rel(component1, component2, "Uses")
    Rel(component2, component3, "Reads from and writes to")
    Rel(component1, externalContainer, "Uses", "API")
    Rel(component2, externalSystem, "Uses", "API")
```
````

**Key Principles** (from [c4model.com](https://c4model.com/diagrams/component)):

- Show components **within a single container** (zoom into one container)
- Focus on **logical components** and their responsibilities
- Show **component interfaces** (what they expose)
- Show how components **interact** with each other
- Include **external dependencies** (other containers, external systems)

````

## Master Component Index Template

```markdown
# C4 Component Level: System Overview

## System Components