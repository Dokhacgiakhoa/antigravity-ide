# Google Antigravity

[English](./README.md) | [Tiếng Việt](./README.vi.md)

> **Antigravity IDE: Hệ điều hành Trí tuệ cho Kỹ sư AI & Project Squad.**  
> *Biến AI của bạn từ một trợ lý thông thường thành một Đội ngũ Chuyên gia (Specialist Squad) chuyên nghiệp với quy trình vận hành tiêu chuẩn.*

[![Giấy Phép: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Google Antigravity** không chỉ là một bộ skill, mà là một **Khung vận hành (Orchestration Framework)** toàn diện. Nó cung cấp một môi trường "Phòng tác chiến AI" giúp các AI Agent phối hợp theo dây chuyền sản xuất chuyên nghiệp (PDCA), đảm bảo mọi dòng code ra đời đều qua thẩm định và tối ưu hóa.

| **27** Bộ Kỹ năng (Skills) | **15** Agent Chuyên gia | **22** Quy trình (Workflows) | **17** Mô-đun DNA (Shared) |
| :---: | :---: | :---: | :---: |
| Chứa 600+ Năng lực | Role-Based Personas | Chu kỳ PDCA | Tri thức nghiệp vụ mẫu |

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

### ✨ Tính năng Setup Wizard (v4.0.0 - Big Update)
Trải nghiệm dòng lệnh (CLI) đẳng cấp Premium với **Cơ chế Thích ứng theo Quy mô**:

1.  **Kiến trúc Thích ứng theo Quy mô (Scale-Adaptive)**:
    - **👤 Cá nhân (Solo-Ninja)**: Tối ưu tốc độ. Agent đa nhiệm "Hybrid" với khả năng xử lý đa domain.
    - **👥 Team (Agile-Squad)**: Quy trình phối hợp có xác thực kế hoạch. Các Agent chuyên biệt hóa.
    - **🏢 Doanh nghiệp (Software-Factory)**: Chuẩn hóa cấp độ Enterprise. Bắt buộc Audit bảo mật và kiểm soát chất lượng.

2.  **Liên kết Metadata Khoa học (Scientific Linkage)**:
    - **Kết nối Nhất thể**: Mọi file trong `.agent` đều được liên kết qua Metadata YAML tới **DNA** (`.shared`), **Luật** (`rules/`), và **Kỹ năng** (`skills/`).
    - **Triệu hồi Ngữ cảnh**: Agent tự động nạp tri thức đúng dựa trên Domain của file và Quy mô dự án.

3.  **Cấp phát Kỹ năng Thông minh**:
    - **Dựa trên Sản phẩm**: Tự động nạp đúng bộ Skills & Workflows bạn cần:
        - 📱 **User Application**: Web/Mobile/Testing/UIUX.
        - 🛠️ **Developer Tool**: DevOps/Testing/Performance.
        - 🤖 **AI Agent**: AI/Maker/Research (Fabric).
        - 🎨 **Digital Asset**: GameDev/SEO/UIUX.

4.  **Định danh Agent**:
    - Đặt tên riêng cho trợ lý (ví dụ: *Jarvis, Friday*) để tạo "linh hồn" cho AI.
    - Phối hợp đa Agent (lên đến 15 chuyên gia) qua một bộ chỉ huy thống nhất.

5.  **Hệ thống Bảo vệ & Cập nhật Thông minh**:
    - **🛡️ Malware Protection**: Tự động rà soát link độc hại và mã độc trước khi tải tài nguyên bên ngoài.
    - **🔄 Auto-Update Chat**: Agent chủ động kiểm tra phiên bản mới nhất trên NPM và hỏi ý kiến bạn để nâng cấp hệ thống ngay trong khung chat.

6.  **Hệ thống Học tập từ Lỗi (Mới - v4.0.2)**:
    - **🐛 Error Logging**: AI tự động ghi lại mọi lỗi xảy ra vào `ERRORS.md` để phân tích và học tập.
    - **📊 Thống kê & Phòng ngừa**: Phân loại lỗi theo Type/Severity, đề xuất cách khắc phục và ngăn chặn lặp lại.
    - **🎓 Học tự động**: Lỗi lặp lại ≥ 2 lần → AI tự tạo Rule hoặc Test case mới.

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
- `/update`: Kiểm tra và nâng cấp Antigravity IDE lên bản mới nhất.
- `/log-error`: Hệ thống ghi lỗi tự động (chạy ngầm, không cần gọi thủ công).

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
│   └── skills/       # 🛠️ 600+ Công cụ tác chiến
└── cli/              # ⚡ CLI: Quản lý scaffolding
```

---

## �️ Triết lý "Vỏ Việt - Lõi Anh"

- **Giao tiếp**: Tiếng Việt (Trực quan, súc tích).
- **Kỹ thuật**: Tiếng Anh (Biến, hàm, logic - Đảm bảo hiệu suất AI cao nhất).

---

**Antigravity IDE** - Phá bỏ mọi giới hạn, đưa dự án của bạn lên tầm cao mới. 🛰️🚀
