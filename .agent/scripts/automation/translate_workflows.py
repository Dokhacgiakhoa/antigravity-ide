"""
@script translate_workflows.py
@version 4.2.0
@layer automation
@protocol unified-protocol-v1
@description Translates workflow files between English and Vietnamese for the Hybrid Language Protocol.
"""

import os
import sys
from datetime import datetime
from pathlib import Path

def log_error(error, context):
    error_log_path = Path("ERRORS.md")
    timestamp = datetime.now().strftime('%Y-%m-%d %H:%M')
    entry = f"""
## [{timestamp}] - Translate-Workflows Script Failure

- **Type**: Runtime
- **Severity**: Medium
- **File**: \`.agent/scripts/automation/translate_workflows.py\`
- **Agent**: Global Intelligence Translator
- **Root Cause**: {context}
- **Error Message**: 
  \`\`\`
  {str(error)}
  \`\`\`
- **Fix Applied**: N/A
- **Prevention**: Verify API translation key and source file existence
- **Status**: Investigating

---
"""
    with open(error_log_path, "a", encoding="utf-8") as f:
        f.write(entry)
import re

def update_description(file_path, new_desc):
    if not os.path.exists(file_path):
        return False
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update frontmatter description
    pattern = r'^---\s*\ndescription:.*?\n---'
    replacement = f'---\ndescription: {new_desc}\n---'
    
    new_content = re.sub(pattern, replacement, content, count=1, flags=re.MULTILINE)
    
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

# Rút gọn, súc tích, phân tách bằng dấu phẩy
translations = {
    "brainstorm.md": "Lên ý tưởng, cấu trúc dự án, khám phá phương án",
    "create.md": "Khởi tạo dự án mới, xây dựng nền móng, App Builder",
    "debug.md": "Gỡ lỗi hệ thống, điều tra vấn đề, sửa lỗi",
    "deploy.md": "Triển khai Production, kiểm tra an toàn, phát hành",
    "enhance.md": "Cập nhật tính năng, phát triển lặp lại, nâng cấp app",
    "orchestrate.md": "Điều phối Agent, giải quyết phức tạp, đa cấu trúc",
    "plan.md": "Lập kế hoạch, phân rã tác vụ, project-planner",
    "preview.md": "Quản lý server, xem trước dự án, khởi động/dừng",
    "status.md": "Trạng thái dự án, tiến độ Agent, dashboard",
    "test.md": "Chạy kiểm thử, tự động hóa, đảm bảo chất lượng",
    "ui-ux-pro-max.md": "Thiết kế UI/UX, Premium, giao diện cao cấp"
}

paths = [
    os.path.expanduser("~/.antigravity/workflows/"),
    "d:/Github/antigravity-ide/.agent/workflows/"
]

for base_path in paths:
    print(f"Checking path: {base_path}")
    for filename, desc in translations.items():
        file_path = os.path.join(base_path, filename)
        if update_description(file_path, desc):
            print(f"✅ Updated {filename} in {base_path}")
        else:
            if os.path.exists(file_path):
                print(f"ℹ️ No change needed for {filename} in {base_path}")
            else:
                print(f"❌ File not found: {filename} in {base_path}")
