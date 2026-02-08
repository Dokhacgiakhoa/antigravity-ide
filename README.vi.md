# AntiGravity IDE (Phiên bản Nâng cao)

Vibe thoải mái, Code thảnh thơi. Một lệnh duy nhất cân cả thế giới. 🛰️🚀

**Trang chủ chính thức**: [antigravity-ide-cli.vercel.app](https://antigravity-ide-cli.vercel.app/)

> [!IMPORTANT]
> **AntiGravity IDE** là một bản mở rộng đột phá của framework Antigravity gốc, được tối ưu hóa cho kỹ thuật phần mềm cấp cao, bảo mật và phát triển web hiệu năng cao.

---

## ⚡ Cài đặt Toàn cầu (npx)

Cách tốt nhất để sử dụng Antigravity IDE là thông qua **npx**. Điều này đảm bảo bạn luôn có Engine và Master Skills mới nhất mà không làm rác máy bởi các gói cài đặt global.

```sh
# LỆNH VẠN NĂNG (Tất cả trong một): Tạo mới, Update, Sửa lỗi, Đồng bộ
npx antigravity-ide [tên-dự-án]

# Nếu chạy trong thư mục dự án cũ, nó sẽ tự động REPAIR & UPDATE
npx antigravity-ide .
```

> [!TIP]
> **Mới làm quen với npx?** Xem [Hướng dẫn Cài đặt NPX](file:///docs/INSTALL_NPX_GUIDE.vi.md) để bắt đầu.
> **Cần hỗ trợ?** Xem [FAQ](file:///docs/FAQ.vi.md) hoặc [Hướng dẫn Cập nhật](file:///docs/UPDATE_GUIDE.vi.md).

> [!WARNING]
> **Lưu ý quan trọng:** Không nên cài đặt Global (`npm install -g antigravity-ide`) vì sẽ gây xung đột. Xem [Hướng dẫn Gỡ cài đặt](file:///docs/UNINSTALL_GUIDE.vi.md) nếu đã lỡ cài.

### ✨ Unified God Command (v4.0.7 - Smart Repair)
Trải nghiệm một lệnh duy nhất để quản trị toàn bộ vòng đời dự án:

1.  **Kiến trúc Thích ứng theo Quy mô (Scale-Adaptive)**: 
    - Chọn giữa các mức độ **Instant (MVP)**, **Creative (Toàn diện AI)**, và **SME (Chuẩn doanh nghiệp)**.
    - Mỗi quy mô sẽ tự động nạp bộ Rules và Master Skills tương ứng.
2.  **Nhận diện Môi trường (Environment Awareness)**:
    - Tự động phát hiện môi trường Python cho các tính năng AI & Data nâng cao.
    - Bộ lọc cross-engine thông minh: Tự động loại bỏ file thừa nếu project chỉ dùng Node.js.
3.  **Đồng bộ DNA**:
    - Tự động tích hợp các tiêu chuẩn DNA cốt lõi (API, Database, Cloud, SEO/GEO) của hệ thống.
4.  **Hệ thống Giám sát "The Watchdog" (v4.0.8)**: 
    - Cơ chế tự động phát hiện treo (Hang Detection) và ngăn chặn vòng lặp vô hạn.
    - **Zero-Silent-Failure**: Mọi lỗi hệ thống và sai sót của Agent đều được lưu lại tại `ERRORS.md` để tự động học hỏi.

---

## 🧩 Hệ Sinh Thái Cốt Lõi

### 🧠 Kỹ Năng Bậc Thầy (72 Master Skills)
Chúng tôi cung cấp thư viện 72 kỹ năng "Senior-Grade" được phân loại theo domain. Mỗi kỹ năng là một "chuyên gia ảo" với quy trình tác chiến riêng.

- **Web Performance**: Next.js 15, React 19, Tailwind v4.
- **Security**: Kiểm định OWASP, Phân tích mã độc, Pentesting.
- **Infrastructure**: Docker, AWS, Vercel, Supabase.
- **AI Execution**: LangGraph, Hệ thống RAG, Điều phối đa Agent.

### 🎭 Hệ thống Agent Chuyên Gia
Đội ngũ nhân sự ảo của bạn bao gồm:
- **Lead Developer**: Thiết kế hệ thống & Đảm bảo chất lượng code.
- **Security Auditor**: Quét lỗ hổng bảo mật.
- **Product Manager**: Lập kế hoạch và ưu tiên Task.
- ...và hơn 19 nhân vật Senior khác.

---

#### v4.0.8 (Nâng cấp tài liệu & CLI)
- Đồng bộ hóa toàn bộ 30 Workflows và 22 Agents.
- Bổ sung tài liệu FAQ, Update và Uninstall.
- Tối ưu hóa cơ chế xử lý xung đột file (--force).

#### v4.0.5 (Đồng bộ cuối)
- Đổi tên thương hiệu thành AntiGravity IDE.
- Chuẩn hóa toàn bộ 72 Master Skills sang metadata v4.0.8.
- Tích hợp nhận diện môi trường Python.
- Nhất quán License & Credits.

#### v4.0.0 (Đại cập nhật)
- Ra mắt kiến trúc thích ứng quy mô (Instant/Creative/SME).
- Triển khai "Liên kết Khoa học" (Scientific Linking) giữa DNA, Skills và Agents.
- Viết lại toàn bộ CLI Setup Wizard.

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

## ️ Triết lý "Vỏ Việt - Lõi Anh"

- **Giao tiếp**: Tiếng Việt (Trực quan, súc tích).
- **Kỹ thuật**: Tiếng Anh (Biến, hàm, logic - Đảm bảo hiệu suất AI cao nhất).

---

**AntiGravity IDE** - Vibe thoải mái, Code thảnh thơi. Một lệnh duy nhất cân cả thế giới. 🛰️🚀

---

## 🙏 Ghi nhận & Tri ân (Credits)

**AntiGravity IDE** được phát triển và bảo trì chính bởi **Dokhacgiakhoa**. Xin chân thành cảm ơn cộng đồng mã nguồn mở và các dự án sau đã truyền cảm hứng:

- **Antigravity Kit** (bởi `vudovn`).
- **Awesome Skills** & **UI/UX Pro Max** (bởi `sickn33`).
- **Model Context Protocol** (bởi Anthropic).
- **Fabric** (bởi danielmiessler).

Phát triển bởi 💡 **Dokhacgiakhoa** • [Bản quyền](COPYRIGHT.md)
