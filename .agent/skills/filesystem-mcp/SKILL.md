---
name: filesystem-mcp
description: Official Filesystem Model Context Protocol Server for local file operations.
category: tools
version: 4.0.5
layer: master-skill
---

# Filesystem MCP Skill

## 🎯 Goal
Enable the AI Agent to read, write, and manage files on the local filesystem securely using the official Model Context Protocol standard.

## 🛠️ Tools

### `read_file`
Read the complete contents of a file.
- **path**: Absolute or relative path to the file (string)

### `write_file`
Write content to a file.
- **path**: Absolute or relative path to the file (string)
- **content**: The content to write (string)

### `list_directory`
List files and directories within a path.
- **path**: Path to the directory (string)

### `move_file`
Move or rename a file or directory.
- **source**: Current path (string)
- **destination**: New path (string)

### `search_files`
Search for files matching a pattern.
- **directory**: Root directory to search (string)
- **pattern**: Regex or glob pattern (string)

## 🚀 Usage Rules
1.  **Scope**: Operations are typically restricted to the allowed directories configured in the server.
2.  **Safety**: Check if a file exists (using `list_directory` or `read_file` check) before overwriting if preserving data is important.
3.  **Paths**: Use absolute paths or consistent relative paths to avoid ambiguity.
