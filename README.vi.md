# Google Antigravity

[English](./README.md) | [Tiếng Việt](./README.vi.md)

> **Antigravity IDE: Hệ điều hành Trí tuệ cho Kỹ sư AI & Project Squad.**  
> *Biến AI của bạn từ một trợ lý thông thường thành một Đội ngũ Chuyên gia (Specialist Squad) chuyên nghiệp với quy trình vận hành tiêu chuẩn.*

[![Giấy Phép: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Google Antigravity** không chỉ là một bộ skill, mà là một **Khung vận hành (Orchestration Framework)** toàn diện. Nó cung cấp một môi trường "Phòng tác chiến AI" giúp các AI Agent phối hợp theo dây chuyền sản xuất chuyên nghiệp (PDCA), đảm bảo mọi dòng code ra đời đều qua thẩm định và tối ưu hóa.

| **22** Bộ Kỹ năng (Skills) | **15** Agent Chuyên gia | **11** Quy trình (Workflows) | **13** Mô-đun DNA (Shared) |
| :---: | :---: | :---: | :---: |
| Chứa 550+ Năng lực | Role-Based Personas | Chu kỳ PDCA | Tri thức nghiệp vụ mẫu |

---

## 🚀 1. Khởi tạo nhanh (Scaffolding)

Sử dụng CLI để thiết lập môi trường tác chiến trong 30 giây:

```sh
# 1. Tạo dự án mới (Khuyên dùng - Luôn tải bản mới nhất)
npx antigravity-ide@latest ten_du_an

# 2. Cài đặt trực tiếp vào thư mục hiện tại
npx antigravity-ide@latest
```

> [!WARNING]
> **Lưu ý quan trọng:** Không nên cài đặt Global (`npm install -g antigravity-ide`) vì sẽ gây xung đột phiên bản cũ/mới. Luôn dùng `npx ...@latest` để đảm bảo project được khởi tạo với Engine mới nhất.

### ✨ Tính năng Setup Wizard (v3.5.61)
Trải nghiệm dòng lệnh (CLI) đẳng cấp Premium với quy trình **4 bước cấu hình** được tối ưu hóa:

> **Lưu ý**: Bạn có thể nhập tên dự án ngay trong lệnh: `npx antigravity-ide@latest <tên-dự-án>`

1.  **Chọn Ngôn ngữ (Language)**:
    - 🇻🇳 **Tiếng Việt**: Tối ưu hiển thị và tư duy ngữ nghĩa cho người Việt.
    - 🇺🇸 **English**: Chuẩn quốc tế.

2.  **Lựa chọn Quy mô (Scale)**:
    - **👤 Cá nhân (Flexible)**: Tự do sáng tạo, ít ràng buộc.
    - **👥 Team (Balanced)**: Cân bằng giữa tốc độ và kiểm soát.
    - **🏢 Enterprise (Strict)**: Nghiêm ngặt tuyệt đối, tuân thủ Compliance.

3.  **Lĩnh vực chuyên sâu (Industry)**:
    - Tự động nạp bộ Workflows & Skills: **Tài chính, Y tế, F&B, Logistics**, v.v.

4.  **Định danh Agent**:
    - Đặt tên riêng cho trợ lý (ví dụ: *Jarvis, Friday*) để tạo "linh hồn" cho AI.

### 🤖 Hướng dẫn Kích hoạt (Activation Protocol)
Sau khi cài đặt xong, hãy "đánh thức" bộ não AI trong **IDE AI Chat** của bạn:

1.  **Mở khung chat** (Cursor/Windsurf/VSCode...).
2.  **Cấu hình**: Chọn Mode `Planing` (hoặc Normal) và Model `Gemini 2.0` (Ưu tiên) hoặc Claude 3.5.
3.  **Gửi lệnh kích hoạt**:

    > **"thức dậy đi [tên-agent]"**
    
    *(Ví dụ: "thức dậy đi Jarvis" hoặc "wake up Jarvis")*

Ai sẽ tự động đọc file cấu hình `.agent/GEMINI.md` và tải toàn bộ kỹ năng vào bộ nhớ đệm.

---

## 🧠 2. Trái tim của hệ thống: Thư mục `.agent`

Thư mục `.agent` là nơi chứa toàn bộ "não bộ" của hệ thống:

- **Hệ thống Agent Chuyên gia**: Planner (Lập kế hoạch), Backend/Frontend Specialists, Security Auditor và Orchestrator (Thuyền trưởng).
- **Quy trình PDCA (Plan-Do-Check-Act)**: AI không tự tiện code. Nó phải Lập kế hoạch -> Thi công -> Kiểm tra chất lượng -> Phê duyệt.
- **Kho tri thức Shared (`.shared/`)**: Chứa DNA của dự án như chuẩn API, Schema DB, tài liệu Compliance và các Domain Blueprints (Fintech, Edtech, v.v.).

---

## ⚡ 3. Lệnh Slash Command (`/`) & Cập nhật

Kích hoạt các Workflow chuyên sâu ngay trong khung chat:

- `/plan`: Lập kế hoạch và phân rã tác vụ (Project Planner).
- `/create`: Xây dựng cấu trúc nền móng dự án.
- `/ui-ux-pro-max`: Thiết kế giao diện cao cấp & Micro-interactions.
- `/orchestrate`: Điều phối đa Agent giải quyết bài toán phức tạp.

### Cập nhật hệ thống
Để cập nhật bộ não Antigravity lên bản mới nhất mà không mất các cấu hình custom:
```sh
npx antigravity-ide update
```

---

## 📂 Cấu trúc dự án

```text
ten-du-an/
├── .agent/           # 🧠 BỘ NÃO: Agent DNA, Skills & Quy tắc
│   ├── .shared/      # ⛩️ Master Knowledge (API, DB, Design)
│   ├── agents/       # 🎭 Hệ thống nhân vật Chuyên gia
│   └── skills/       # 🛠️ 550+ Công cụ tác chiến
└── cli/              # ⚡ CLI: Quản lý scaffolding
```

---

## �️ Triết lý "Vỏ Việt - Lõi Anh"

- **Giao tiếp**: Tiếng Việt (Trực quan, súc tích).
- **Kỹ thuật**: Tiếng Anh (Biến, hàm, logic - Đảm bảo hiệu suất AI cao nhất).

---

**Antigravity IDE** - Phá bỏ mọi giới hạn, đưa dự án của bạn lên tầm cao mới. 🛰️🚀
