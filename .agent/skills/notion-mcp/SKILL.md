---
name: notion-mcp
description: Official Notion Model Context Protocol Server for workspace interaction.
category: tools
version: 4.0.5
layer: master-skill
---

# Notion MCP Skill

## 🎯 Goal
Enable the AI Agent to interact with Notion workspaces (Pages, Databases, Comments) to retrieve context or document findings.

## 🛠️ Tools

### `search`
Search for pages or databases in the workspace.
- **query**: Search term (string)

### `retrieve_block_children`
Get the content (blocks) of a page or block.
- **block_id**: The ID of the page or block (string)

### `retrieve_database`
Get database metadata.
- **database_id**: The ID of the database (string)

### `query_database`
Filter and sort a database.
- **database_id**: The ID of the database (string)
- **filter**: Filter object (JSON string)

### `append_block_children`
Add content to a page.
- **block_id**: Parent block ID (string)
- **children**: Array of block objects (JSON string)

## 🚀 Usage Rules
1.  **Authorization**: Requires `NOTION_API_KEY` with correct integration permissions.
2.  **Privacy**: Do not read private pages unless explicitly authorized.
3.  **Formatting**: Markdown is generally supported but Notion uses Block structure; complex formatting may need mapping.
