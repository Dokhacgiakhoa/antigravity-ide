"""
@script sync_to_global.py
@version 4.2.0
@layer internal
@protocol unified-protocol-v1
@description Synchronizes local agent changes with the global knowledge base.
"""

import os
import sys
import shutil
from datetime import datetime
from pathlib import Path

def log_error(error, context):
    error_log_path = Path("ERRORS.md")
    timestamp = datetime.now().strftime('%Y-%m-%d %H:%M')
    entry = f"""
## [{timestamp}] - Sync-To-Global Script Failure

- **Type**: Runtime
- **Severity**: Medium
- **File**: \`.agent/scripts/internal/sync_to_global.py\`
- **Agent**: Global Knowledge Architect
- **Root Cause**: {context}
- **Error Message**: 
  \`\`\`
  {str(error)}
  \`\`\`
- **Fix Applied**: N/A
- **Prevention**: Verify Git sync and workspace write permissions
- **Status**: Investigating

---
"""
    with open(error_log_path, "a", encoding="utf-8") as f:
        f.write(entry)
import shutil
import sys
from pathlib import Path

def sync_to_global():
    # 1. Setup paths
    workspace_agent_dir = Path("d:/Github/antigravity-ide/.agent")
    global_dir = Path(os.path.expanduser("~/.antigravity"))
    
    if not workspace_agent_dir.exists():
        print(f"Error: Workspace agent directory not found at {workspace_agent_dir}")
        return

    # Define what to sync: (Source relative to .agent, Destination relative to ~/.antigravity)
    sync_map = {
        "rules": "rules",
        "workflows": "workflows",
        "agents": "agents",
        "skills/ai-engineer": "skills/ai-engineer",
        "skills/security-auditor": "skills/security-auditor",
        "skills/performance-engineer": "skills/performance-engineer",
        "skills/modern-web-architect": "skills/modern-web-architect",
        "skills/seo-expert-kit": "skills/seo-expert-kit",
        "skills/tdd-master-workflow": "skills/tdd-master-workflow",
        "skills/production-code-audit": "skills/production-code-audit",
        "skills/cro-expert-kit": "skills/cro-expert-kit",
        "skills/cloud-architect-master": "skills/cloud-architect-master",
        "skills/database-migration": "skills/database-migration",
        "skills/penetration-tester-master": "skills/penetration-tester-master",
        "skills/git-collaboration-master": "skills/git-collaboration-master",
        "skills/deployment-engineer": "skills/deployment-engineer",
        "skills/api-documenter": "skills/api-documenter",
        "skills/full-stack-scaffold": "skills/full-stack-scaffold",
        "skills/incident-responder": "skills/incident-responder",
        "skills/legacy-modernizer": "skills/legacy-modernizer",
        ".shared/database-master": ".shared/database-master",
        ".shared/metrics": ".shared/metrics",
        ".shared/api-standards": ".shared/api-standards",
        ".shared/i18n-master": ".shared/i18n-master",
        ".shared/ai-master": ".shared/ai-master",
        ".shared/domain-blueprints": ".shared/domain-blueprints",
        ".shared/security-armor": ".shared/security-armor",
        ".shared/testing-master": ".shared/testing-master",
        ".shared/infra-blueprints": ".shared/infra-blueprints",
        ".shared/vitals-templates": ".shared/vitals-templates",
        ".shared/design-system": ".shared/design-system",
        ".shared/compliance": ".shared/compliance",
        "core": "core",
    }

    print(f"🚀 Starting Sync from Workspace to Global (~/.antigravity)...")

    for src_rel, dest_rel in sync_map.items():
        src_path = workspace_agent_dir / src_rel
        dest_path = global_dir / dest_rel
        
        if src_path.exists():
            # Create parent dirs for destination
            dest_path.parent.mkdir(parents=True, exist_ok=True)
            
            if src_path.is_dir():
                # Remove dest if exists to ensure clean sync
                if dest_path.exists():
                    shutil.rmtree(dest_path)
                shutil.copytree(src_path, dest_path)
                print(f"✅ Synced Directory: {src_rel} -> Global")
            else:
                shutil.copy2(src_path, dest_path)
                print(f"✅ Synced File: {src_rel} -> Global")
        else:
            print(f"⚠️ Warning: Source {src_rel} not found in workspace.")

    print(f"\n✨ Global Synchronization Complete!")
    print(f"Your global Antigravity IDE is now powered by this project's Master Skills and Rules.")

if __name__ == "__main__":
    sync_to_global()
