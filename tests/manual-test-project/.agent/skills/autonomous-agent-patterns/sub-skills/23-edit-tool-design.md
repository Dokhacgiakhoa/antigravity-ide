# 2.3 Edit Tool Design

```python
class EditFileTool(Tool):
    """
    Precise file editing with conflict detection.
    Uses search/replace pattern for reliable edits.
    """

    name = "edit_file"
    description = "Edit a file by replacing specific content"

    def execute(
        self,
        path: str,
        search: str,
        replace: str,
        expected_occurrences: int = 1
    ) -> ToolResult:
        """
        Args:
            path: File to edit
            search: Exact text to find (must match exactly, including whitespace)
            replace: Text to replace with
            expected_occurrences: How many times search should appear (validation)
        """
        with open(path, 'r') as f:
            content = f.read()

        # Validate
        actual_occurrences = content.count(search)
        if actual_occurrences != expected_occurrences:
            return ToolResult(
                success=False,
                error=f"Expected {expected_occurrences} occurrences, found {actual_occurrences}"
            )

        if actual_occurrences == 0:
            return ToolResult(
                success=False,
                error="Search text not found in file"
            )

        # Apply edit
        new_content = content.replace(search, replace)

        with open(path, 'w') as f:
            f.write(new_content)

        return ToolResult(
            success=True,
            output=f"Replaced {actual_occurrences} occurrence(s)"
        )
```

---

## 3. Permission & Safety Patterns