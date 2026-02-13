# `search_files`

Search for files matching a pattern.
- **directory**: Root directory to search (string)
- **pattern**: Regex or glob pattern (string)

## 🚀 Usage Rules
1.  **Scope**: Operations are typically restricted to the allowed directories configured in the server.
2.  **Safety**: Check if a file exists (using `list_directory` or `read_file` check) before overwriting if preserving data is important.
3.  **Paths**: Use absolute paths or consistent relative paths to avoid ambiguity.