# 5.2 Checkpoint/Resume

```python
class CheckpointManager:
    """
    Save and restore agent state for long-running tasks.
    """

    def __init__(self, storage_dir: str):
        self.storage_dir = storage_dir
        os.makedirs(storage_dir, exist_ok=True)

    def save_checkpoint(self, session_id: str, state: dict) -> str:
        """Save current agent state"""
        checkpoint = {
            "timestamp": datetime.now().isoformat(),
            "session_id": session_id,
            "history": state["history"],
            "context": state["context"],
            "workspace_state": self._capture_workspace(state["workspace"]),
            "metadata": state.get("metadata", {})
        }

        path = os.path.join(self.storage_dir, f"{session_id}.json")
        with open(path, 'w') as f:
            json.dump(checkpoint, f, indent=2)

        return path

    def restore_checkpoint(self, checkpoint_path: str) -> dict:
        """Restore agent state from checkpoint"""
        with open(checkpoint_path, 'r') as f:
            checkpoint = json.load(f)

        return {
            "history": checkpoint["history"],
            "context": checkpoint["context"],
            "workspace": self._restore_workspace(checkpoint["workspace_state"]),
            "metadata": checkpoint["metadata"]
        }

    def _capture_workspace(self, workspace: str) -> dict:
        """Capture relevant workspace state"""
        # Git status, file hashes, etc.
        return {
            "git_ref": subprocess.getoutput(f"cd {workspace} && git rev-parse HEAD"),
            "git_dirty": subprocess.getoutput(f"cd {workspace} && git status --porcelain")
        }
```

---

## 6. MCP (Model Context Protocol) Integration