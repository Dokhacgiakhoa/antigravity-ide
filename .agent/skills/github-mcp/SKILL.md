---
name: github-mcp
description: Official GitHub Model Context Protocol Server for repository management.
category: tools
version: 4.0.5
layer: master-skill
---

# GitHub MCP Skill

## 🎯 Goal
Enable the AI Agent to interact with GitHub repositories, issues, pull requests, and file contents using the official Model Context Protocol standard.

## 🛠️ Tools

### `create_issue`
Create a new issue in a repository.
- **owner**: Repository owner (string)
- **repo**: Repository name (string)
- **title**: Issue title (string)
- **body**: Issue body (string)

### `get_file_contents`
Get the contents of a file or directory from a repository.
- **owner**: Repository owner (string)
- **repo**: Repository name (string)
- **path**: Path to file or directory (string)
- **branch**: Branch name (optional, string)

### `create_pull_request`
Create a new pull request.
- **owner**: Repository owner (string)
- **repo**: Repository name (string)
- **title**: PR title (string)
- **body**: PR body (string)
- **head**: The name of the branch where your changes are implemented (string)
- **base**: The name of the branch you want the changes pulled into (string)

### `push_files`
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
