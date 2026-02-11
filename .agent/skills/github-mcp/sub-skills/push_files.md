# `push_files`

Push one or more files to a repository (creates a commit).
- **owner**: Repository owner (string)
- **repo**: Repository name (string)
- **branch**: Branch to push to (string)
- **files**: Array of objects with `path` and `content` (string)
- **message**: Commit message (string)

## 🚀 Usage Rules
1.  **Authentication**: Ensure `GITHUB_TOKEN` is set in the environment.
2.  **Safety**: Always verify the `owner` and `repo` before performing write operations.
3.  **Context**: Use `get_file_contents` to understand the codebase before making changes.