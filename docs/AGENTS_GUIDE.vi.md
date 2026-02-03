# 🕵️ Hướng Dẫn Về "Hệ Thống Agent" (Digital Employees)

> **Antigravity** vận hành như một công ty phần mềm thu nhỏ, với các nhân viên số (AI Agents) chuyên trách từng mảng.

---

## 1. Biệt Đội Chuyên Gia (The Squad)

Dưới đây là danh sách các nhân viên ảo sẽ phục vụ bạn:

### 🏗️ Ban Kiến Trúc & Kế Hoạch
*   **`project-planner`**:
    *   *Vai trò*: PM (Product Manager).
    *   *Nhiệm vụ*: Lên kế hoạch, chia nhỏ đầu việc, viết PRD.
    *   *Khi nào gọi*: Khi dùng `/plan`.
*   **`orchestrator`**:
    *   *Vai trò*: Tech Lead / Thư ký.
    *   *Nhiệm vụ*: Điều phối các agent khác, tổng hợp báo cáo.
    *   *Khi nào gọi*: Khi dùng `/orchestrate`.

### 💻 Ban Kỹ Thuật (Engineer)
*   **`frontend-specialist`**:
    *   *Vai trò*: Senior Frontend Dev.
    *   *Kỹ năng*: React, Vue, CSS Animation, Responsive.
*   **`backend-specialist`**:
    *   *Vai trò*: Senior Backend Dev.
    *   *Kỹ năng*: API Design, Database, Auth, Logic.
*   **`database-architect`**:
    *   *Vai trò*: DBA (Database Administrator).
    *   *Nhiệm vụ*: Thiết kế Schema, tối ưu câu Query.
*   **`mobile-developer`**:
    *   *Vai trò*: Mobile Dev.
    *   *Task*: Code iOS/Android (React Native/Flutter).
*   **`game-developer`**:
    *   *Vai trò*: Game Dev.
    *   *Task*: Phát triển game với Unity/Godot/WebGL.
*   **`code-archaeologist`** *(Mới)*:
    *   *Vai trò*: Legacy Code Explorer.
    *   *Nhiệm vụ*: Phân tích và hiểu mã nguồn cũ, tìm kiếm pattern.
*   **`explorer-agent`** *(Mới)*:
    *   *Vai trò*: Codebase Navigator.
    *   *Nhiệm vụ*: Khám phá cấu trúc dự án mới, mapping dependencies.

### 🛡️ Ban Chất Lượng & Vận Hành
*   **`security-auditor`**:
    *   *Vai trò*: Chuyên gia bảo mật.
    *   *Nhiệm vụ*: Tìm lỗ hổng, rà soát key lộ.
*   **`penetration-tester`** *(Mới)*:
    *   *Vai trò*: Ethical Hacker.
    *   *Nhiệm vụ*: Tấn công thử nghiệm, kiểm tra bảo mật.
*   **`test-engineer`**:
    *   *Vai trò*: QA/QC.
    *   *Nhiệm vụ*: Viết test case, chạy kiểm thử tự động.
*   **`qa-automation-engineer`** *(Mới)*:
    *   *Vai trò*: Test Automation Lead.
    *   *Nhiệm vụ*: Thiết kế framework tự động hóa kiểm thử.
*   **`devops-engineer`**:
    *   *Vai trò*: SysAdmin.
    *   *Nhiệm vụ*: Cấu hình Server, Docker, Deploy.

### 📊 Ban Sản Phẩm & Chiến Lược *(Mới)*
*   **`product-manager`** *(Mới)*:
    *   *Vai trò*: Product Manager.
    *   *Nhiệm vụ*: Lên chiến lược sản phẩm, viết PRD.
*   **`product-owner`** *(Mới)*:
    *   *Vai trò*: Product Owner.
    *   *Nhiệm vụ*: Quản lý Backlog, ưu tiên tính năng.

### 🎨 Ban Sáng Tạo & Growth
*   **`ui-ux-designer`**:
    *   *Vai trò*: Designer.
    *   *Nhiệm vụ*: Phối màu, chọn font, thiết kế trải nghiệm.
*   **`seo-specialist`**:
    *   *Vai trò*: SEO Marketing.
    *   *Nhiệm vụ*: Tối ưu từ khóa, đẩy Top Google.

---

## 2. Cách các Agent phối hợp

Khác với chat thông thường, các Agent này biết **"chia sẻ não bộ"** cho nhau:

1.  Bạn ra lệnh: *"Làm tính năng Đăng nhập"*.
2.  **Project Planner** nhảy vào trước: *"Ok, cần trang Login, API Auth, và Bảng User"*.
3.  Sau đó nó giao việc:
    *   Viết UI -> Giao cho **Frontend Specialist**.
    *   Viết API -> Giao cho **Backend Specialist**.
    *   Tạo Bảng -> Giao cho **DB Architect**.
4.  Cuối cùng **Test Engineer** sẽ vào kiểm tra xem mọi thứ có chạy đúng không.

> **Điều này đảm bảo code của bạn luôn có cấu trúc chặt chẽ, không bị "đầu voi đuôi chuột".**
