# 2.1 Tool Schema

```python
class Tool:
    """Base class for agent tools"""

    @property
    def schema(self) -> dict:
        """JSON Schema for the tool"""
        return {
            "name": self.name,
            "description": self.description,
            "parameters": {
                "type": "object",
                "properties": self._get_parameters(),
                "required": self._get_required()
            }
        }

    def execute(self, **kwargs) -> ToolResult:
        """Execute the tool and return result"""
        raise NotImplementedError

class ReadFileTool(Tool):
    name = "read_file"
    description = "Read the contents of a file from the filesystem"

    def _get_parameters(self):
        return {
            "path": {
                "type": "string",
                "description": "Absolute path to the file"
            },
            "start_line": {
                "type": "integer",
                "description": "Line to start reading from (1-indexed)"
            },
            "end_line": {
                "type": "integer",
                "description": "Line to stop reading at (inclusive)"
            }
        }

    def _get_required(self):
        return ["path"]

    def execute(self, path: str, start_line: int = None, end_line: int = None) -> ToolResult:
        try:
            with open(path, 'r') as f:
                lines = f.readlines()

            if start_line and end_line:
                lines = lines[start_line-1:end_line]

            return ToolResult(
                success=True,
                output="".join(lines)
            )
        except FileNotFoundError:
            return ToolResult(
                success=False,
                error=f"File not found: {path}"
            )
```