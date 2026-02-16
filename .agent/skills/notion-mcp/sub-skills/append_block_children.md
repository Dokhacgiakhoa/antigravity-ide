# `append_block_children`

Add content to a page.
- **block_id**: Parent block ID (string)
- **children**: Array of block objects (JSON string)

## 🚀 Usage Rules
1.  **Authorization**: Requires `NOTION_API_KEY` with correct integration permissions.
2.  **Privacy**: Do not read private pages unless explicitly authorized.
3.  **Formatting**: Markdown is generally supported but Notion uses Block structure; complex formatting may need mapping.