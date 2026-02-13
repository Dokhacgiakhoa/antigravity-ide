<div align="center">

# 🛰️ AntiGravity IDE
### *Phiên bản Nâng cao • v4.1.30 Meta-Engine*

<!-- BADGES: Spaced & Tightly Wrapped to prevent Underlines -->
<p align="center">
  <a href="https://www.npmjs.com/package/antigravity-ide"><img src="https://img.shields.io/npm/v/antigravity-ide?color=2ea44f&logo=npm" alt="npm version" /></a>&nbsp;&nbsp;
  <a href="https://www.npmjs.com/package/antigravity-ide"><img src="https://img.shields.io/npm/dm/antigravity-ide?color=blueviolet&logo=npm" alt="npm downloads" /></a>&nbsp;&nbsp;
  <a href="https://github.com/Dokhacgiakhoa/antigravity-ide/actions"><img src="https://img.shields.io/github/actions/workflow/status/Dokhacgiakhoa/antigravity-ide/npm-publish.yml?logo=github&label=BUILD" alt="Build Status" /></a>&nbsp;&nbsp;
  <a href="LICENSE"><img src="https://img.shields.io/npm/l/antigravity-ide?color=orange" alt="License" /></a>
</p>

<!-- SECOND ROW: Stats -->
<p align="center">
  <a href="https://socket.dev/npm/package/antigravity-ide"><img src="https://socket.dev/api/badge/npm/package/antigravity-ide" alt="Socket Badge" /></a>&nbsp;&nbsp;
  <a href="https://github.com/Dokhacgiakhoa/antigravity-ide"><img src="https://img.shields.io/github/languages/code-size/Dokhacgiakhoa/antigravity-ide?color=blue" alt="Code Size" /></a>
</p>

<br>

**Vibe thoải mái, Code thảnh thơi. Một lệnh duy nhất cân cả thế giới.**

[Trang chủ](https://antigravity-ide-cli.vercel.app/) • [Github](https://github.com/Dokhacgiakhoa/antigravity-ide) • [Báo lỗi](https://github.com/Dokhacgiakhoa/antigravity-ide/issues)

---

### 📊 Ma trận Năng lực Hệ thống

| **16** Quy tắc | **573** Kỹ năng | **2977** Chiến thuật | **30** Quy trình | **17** Core Libs |
| :---: | :---: | :---: | :---: | :---: |
| *Quản trị* | *Công cụ lõi* | *Mẫu AI Nâng cao* | *Chuẩn hóa* | *DNA Dùng chung* |

</div>

<br>

## ⚡ Cơ Chế Cài Đặt Thông Minh (Smart Sync)

Antigravity sử dụng chiến lược **Dual-Scope Installation** để đảm bảo sự ổn định:

1.  **Global Scope (Gốc Dự Án)**: Cài đặt `GEMINI.md` (Cấu hình định danh).
2.  **Workspace Scope (Thư mục .agent)**: Cài đặt Rules, Skills, Workflows (Bộ não).

```bash
# MỘT LỆNH DUY NHẤT CHO TẤT CẢ
npx antigravity-ide [ten-du-an]
```

> [!TIP]
> **Mới dùng npx?** Xem [Hướng dẫn Cài đặt](docs/INSTALL_NPX_GUIDE.vi.md) để bắt đầu.

---

## ✨ Điểm khác biệt (Phiên bản v4.1.30)

Tại sao nên chọn AntiGravity thay vì các AI wrapper thông thường?

| Tính năng | **AntiGravity IDE** | Wrapper AI thông thường |
| :--- | :--- | :--- |
| **🧠 Trí tuệ Fractal** | **573 Kỹ năng** với 2977 chiến thuật | Chỉ là các câu prompt rời rạc |
| **🛡️ Hệ thống Watchdog** | Phát hiện treo & Tự học từ lỗi dự án | Hay bị kẹt / Lỗi im lặng |
| **🌊 Scale Adaptive** | DNA linh hoạt cho Instant/Creative/SME | Một khuôn mẫu cho mọi dự án |
| **🛠️ Self-Healing** | Tự sửa lỗi cấu hình qua 1 lệnh duy nhất | Phải sửa JSON thủ công |
| **🔒 Provenance** | Build được ký số (NPM Sigstore) | Không xác thực nguồn gốc |

---

## 🎯 3 Bước để Bắt đầu

1.  **Mở Terminal**: Command Prompt hoặc Powershell.
2.  **Chạy Lệnh Vạn Năng**: `npx antigravity-ide ten-du-an`
3.  **Trò chuyện với AI**: Bắt đầu làm việc với đội ngũ ảo của bạn.

---

## 📂 Cấu trúc Dự án (Visual Tree)

Kiến trúc chuẩn hóa, dễ dàng mở rộng và bảo trì.

```text
du-an-cua-ban/
├── .agent/              # 🧠 BỘ NÃO (Fractal Core)
│   ├── .shared/         # ⛩️ Thư viện lõi (API/DB/Security Standards)
│   ├── rules/           # ⚖️ Quản trị (Compliance, Context)
│   ├── skills/          # 🛠️ Kỹ năng (573 Fractal Skills)
│   └── workflows/       # 🚀 Quy trình (/create, /debug, /audit)
└── GEMINI.md            # 📋 Cấu hình định danh Agent
```

> [!NOTE]
> **Định Nghĩa Phạm Vi (Scope)**:
> - **Global (Toàn cầu)**: Bộ công cụ CLI (`npx antigravity-ide`) dùng để cài đặt & quản lý.
> - **Workspace (Dự án)**: Toàn bộ Quy tắc (`.agent/rules`), Kỹ năng và Quy trình được cài đặt **Cục bộ** vào từng dự án riêng biệt. Đảm bảo trí tuệ của dự án này không bị rò rỉ sang dự án khác.

---

## 🚀 Lệnh Nâng Cao (Power Commands)

| Lệnh | Hành động | Logic Xử Lý |
| :--- | :--- | :--- |
| `npx antigravity-ide .` | **Sửa Chữa / Đồng Bộ** | Quét cả Global (`GEMINI.md`) & Workspace (`.agent`). Bù file thiếu. |
| `npx antigravity-ide validate` | **Kiểm Tra Sức Khỏe** | Xác minh tính toàn vẹn của cả 2 phạm vi. |
| `npx antigravity-ide update` | **Nâng Cấp** | Cập nhật Core DNA nhưng tôn trọng ranh giới Scope (không ghi đè ẩu). |

---

## ❓ Câu Hỏi Thường Gặp

<details>
<summary><strong>Q: Đây có phải chỉ là AI wrapper nữa không?</strong></summary>
A: Không. Wrapper thì vô tri (stateless). Antigravity cài đặt một **Hệ Thống Ký Ức Fractal** (thư mục .agent) trực tiếp vào dự án. Nó mang lại khả năng ghi nhớ dài hạn, nhận thức ngữ cảnh và tự sửa lỗi.
</details>

<details>
<summary><strong>Q: "Pure Install" là gì?</strong></summary>
A: Từ v4.1.23, chúng tôi loại bỏ hoàn toàn mã thừa. Không script nội bộ, không file rác. Bạn chỉ nhận được **đúng** những gì cần thiết để vận hành đội ngũ AI.
</details>

<details>
<summary><strong>Q: Tôi có thể tùy chỉnh Agent không?</strong></summary>
A: Có. "Agent" giờ đây là các vai trò động dựa trên **Kỹ năng (Skills)**. Bạn có thể dạy họ chiêu mới bằng cách thêm file vào `.agent/skills/` hoặc sửa `GEMINI.md`. Hệ thống sẽ tự học ngay lập tức.
</details>

<br>

---

- **[Hướng dẫn Gemini](docs/GEMINI_USAGE.md)**: Cách cấu hình và sử dụng với Google Gemini.
- **[Vận hành Master](docs/MASTER_OPERATIONS.vi.md)**: Tìm hiểu sâu về cơ chế cốt lõi.
- **[Hướng dẫn Phát hành](docs/PUBLISHING_GUIDE.md)**: Cách đóng gói và xuất bản Agent của riêng bạn.

---

<div align="center">
  Phát triển với 💡 bởi <strong>Dokhacgiakhoa</strong><br>
  <a href="LICENSE">MIT LICENSE</a>
</div>
