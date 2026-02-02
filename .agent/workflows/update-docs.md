---
description: Tự động cập nhật tài liệu khi có tính năng mới
---

# /update-docs - Hệ thống Cập nhật Tài liệu Tự động

Workflow này đảm bảo tất cả tài liệu được đồng bộ khi thêm Skills/Workflows/Rules mới.

## 📋 Khi nào sử dụng

- Khi tạo mới một Skill trong `.agent/skills/`
- Khi tạo mới một Workflow trong `.agent/workflows/`
- Khi tạo mới một Rule trong `.agent/rules/`
- Sau khi merge tính năng lớn

## 🔄 Quy trình tự động

### Bước 1: Thu thập Metadata
// turbo
- Chạy script: `node .agent/scripts/update-docs.js`
- Lấy số lượng Skills, Workflows, Rules hiện tại
- Quét file mới được tạo để lấy name và description

### Bước 2: Phát hiện thay đổi
- So sánh với số liệu cũ trong README
- Liệt kê các file mới: Skills/Workflows/Rules

### Bước 3: Cập nhật các file docs

#### 3.1. README.vi.md & README.md
- Cập nhật bảng thống kê (dòng ~12):
  ```markdown
  | **XX** Bộ Kỹ năng | **XX** Workflows | ...
  ```
- Nếu có tính năng nổi bật mới → Thêm vào phần "Tính năng"

#### 3.2. SKILLS_GUIDE.vi.md
- Nếu có Skill mới:
  - Xác định nhóm (Development/Security/AI/...)
  - Thêm vào danh sách tương ứng với format:
    ```markdown
    *   **`skill-name`**: Mô tả ngắn gọn
    ```

#### 3.3. WORKFLOW_GUIDE.vi.md
- Nếu có Workflow mới:
  - Xác định nhóm (Core/Builder/Security/...)
  - Thêm section mới:
    ```markdown
    ### `/workflow-name` - Tiêu đề
    - **Khi nào dùng**: ...
    - **Cách dùng**: ...
    ```

#### 3.4. RULES_GUIDE.vi.md
- Nếu có Rule mới:
  - Kiểm tra trigger type (always_on/glob/model_decision)
  - Thêm vào bảng tương ứng

### Bước 4: Verify & Commit
- Review các thay đổi
- Tạo commit với message: `docs: update with new features`

## 💡 Ví dụ

**Khi thêm Skill `malware-analyst`:**

1. Script phát hiện: `+1 Skill`
2. Đọc metadata từ `SKILL.md`:
   ```yaml
   name: malware-analyst
   description: Threat intelligence and URL scanning
   ```
3. Tự động cập nhật:
   - README: 26 → 27 Skills
   - SKILLS_GUIDE: Thêm vào nhóm Security

## ⚙️ Cấu hình

File `.agent/scripts/update-docs.js` chứa logic tự động.
Có thể mở rộng để hỗ trợ:
- Tự động tạo changelog
- Generate skill index
- Update version badges

---

**Lưu ý**: Workflow này giúp Agent không bỏ sót việc cập nhật docs. Luôn chạy sau khi thêm tính năng mới!
