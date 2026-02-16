# 📦 Node.js Installation & NPX Usage Guide

> **Easy Vibe, Lazy Code. One Command to Rule Them All.** 🛰️🚀

The `npx` command is the fastest and safest way to experience **AntiGravity IDE** without a permanent global installation. This document guides you through setting up your environment from scratch.

---

## 1. What is NPX?
`npx` (Node Package Runner) is a tool that comes with **npm** (v5.2.0+). It allows you to:
- Run packages without installing them globally (`-g`).
- Ensure you always use the latest version.
- Avoid conflicts between old and new software versions.

---

## 2. Installation Steps

### Step 1: Download and Install Node.js
To get `npx`, you need to install **Node.js** (which includes npm).
1. Visit: [nodejs.org](https://nodejs.org/)
2. Select **LTS** (Recommended For Most Users) - This is the most stable version.
3. Run the installer (`.msi` on Windows, `.pkg` on Mac) and click **Next** until finished.

### Step 2: Verify Installation
Open your Terminal (Command Prompt or PowerShell on Windows) and type:
```bash
node -v
npm -v
npx -v
```
> [!TIP]
> If these commands return version numbers (e.g., `v20.x.x`), you have installed successfully!

### Step 3: Install Python (Optional - For AI/Data)
If you plan to use advanced features (Advanced AI, Data Science, Security Scanner), installing **Python** is recommended.
1. Visit: [python.org](https://www.python.org/downloads/)
2. Download the latest version and install.
3. **Important**: Check "Add Python to PATH" during installation.

---

## 3. Launching AntiGravity IDE (God Command)
You need only one command to handle all scenarios (Create, Update, Repair, Sync):

```bash
npx antigravity-ide [project_name]
```
- **If the folder is empty**: The system will **Create** a new project.
- **If it's an existing project**: The system will automatically **Repair** errors, **Update** latest Rules, and **Sync** DNA.

---

## 4. CLI Quick Reference

| Scenario | Command | Meaning |
| :--- | :--- | :--- |
| **First-time Install** | `npx antigravity-ide .` | Initialize in current directory. |
| **Repair/Update** | `npx antigravity-ide` | Auto-detect and fix issues (Repair & Update). |
| **Force Overwrite** | `npx antigravity-ide --force` | Force reset Rules to defaults. |
| **Check Version** | `npx antigravity-ide --version` | Check Engine version. |

### Common Flags:
- **`-s, --skip-prompts`**: Fast initialization with defaults.
- **`-t, --template <type>`**: Choose project template (`minimal`, `standard`, `full`).
- **`-f, --force`**: Force overwrite when fixing old projects.

---

## 5. Conflict Resolution
If you install into a folder with existing config files (like `GEMINI.md`, `package.json`), the system will ask how to handle them to protect old data.

### 🛡️ Interactive Mode (Default)
The system stops and asks you for each file:
```bash
⚠️  File "GEMINI.md" already exists. Overwrite? / File đã tồn tại. Ghi đè? [y/N]
```
- **Yes (y)**: Overwrite with the latest file.
- **No (n)**: Create a safe backup (e.g., `GEMINI.new.md`) and keep the old file.

### 🔥 Force Overwrite
If you want to reset the project and accept losing old configs, use the `--force` flag:
```bash
npx antigravity-ide . --force
```
> **Effect**: Skips all questions and overwrites all duplicate files to bring the project to a standard state.

---

## 6. Troubleshooting

### 1. `command not found: npx`
- **Cause**: Node.js is not installed or not added to PATH.
- **Fix**: Restart your computer after installing Node.js. If it persists, reinstall Node.js and ensure "Add to PATH" is checked.

### 2. Permission Errors (`EACCES` or `Permission Denied`)
- **Windows**: Run Terminal as **Administrator**.
- **Mac/Linux**: You may need `sudo`: `sudo npx antigravity-ide`.

### 3. Node.js Version Too Old
- **Requirement**: AntiGravity IDE works best on Node.js **v18** or higher.

---

## 💡 Always Updated?
You don't need to type `@latest` anymore. Every time you run `npx antigravity-ide`, the system automatically checks and upgrades to the latest version from NPM to ensure you have the most modern Skills and Agents.
