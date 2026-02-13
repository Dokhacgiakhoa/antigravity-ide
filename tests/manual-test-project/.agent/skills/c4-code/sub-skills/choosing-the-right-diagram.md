# Choosing the Right Diagram

| Code Style                       | Primary Diagram                  | When to Use                                             |
| -------------------------------- | -------------------------------- | ------------------------------------------------------- |
| OOP (classes, interfaces)        | `classDiagram`                   | Show inheritance, composition, interface implementation |
| FP (pure functions, pipelines)   | `flowchart`                      | Show data transformations and function composition      |
| FP (modules with exports)        | `classDiagram` with `<<module>>` | Show module structure and dependencies                  |
| Procedural (structs + functions) | `classDiagram`                   | Show data structures and associated functions           |
| Mixed                            | Combination                      | Use multiple diagrams if needed                         |

**Note**: According to the [C4 model](https://c4model.com/diagrams), code diagrams are typically only created when needed for complex components. Most teams find system context and container diagrams sufficient. Choose the diagram type that best communicates the code structure regardless of paradigm.

## Notes

[Any additional context or important information]

```

## Example Interactions