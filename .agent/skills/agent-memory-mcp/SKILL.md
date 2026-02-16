---
version: 4.1.0-fractal
name: agent-memory-mcp
author: Amit Rathiesh
description: A hybrid memory system that provides persistent, searchable knowledge management for AI agents (Architecture, Patterns, Decisions).
---

# Agent Memory Skill

This skill provides a persistent, searchable memory bank that automatically syncs with project documentation. It runs as an MCP server to allow reading/writing/searching of long-term memories.

## Prerequisites

- Node.js (v18+)

## Setup

1. **Clone the Repository**:
   Clone the `agentMemory` project into your agent's workspace or a parallel directory:

   ```bash
   git clone https://github.com/webzler/agentMemory.git .agent/skills/agent-memory
   ```

2. **Install Dependencies**:

   ```bash
   cd .agent/skills/agent-memory
   npm install
   npm run compile
   ```

3. **Start the MCP Server**:
   Use the helper script to activate the memory bank for your current project:

   ```bash
   npm run start-server <project_id> <absolute_path_to_target_workspace>
   ```

   _Example for current directory:_

   ```bash
   npm run start-server my-project $(pwd)
   ```

## Capabilities (MCP Tools)

## 🧠 Knowledge Modules (Fractal Skills)

### 1. [`memory_search`](./sub-skills/memory_search.md)
### 2. [`memory_write`](./sub-skills/memory_write.md)
### 3. [`memory_read`](./sub-skills/memory_read.md)
### 4. [`memory_stats`](./sub-skills/memory_stats.md)
