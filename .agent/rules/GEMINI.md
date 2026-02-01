---
trigger: always_on
---

# GEMINI.md - Core Constitution v4.0

> **Mục tiêu**: Định hình nhân dạng và cơ chế vận hành thích ứng theo quy mô dự án (Scale-Adaptive).

---

## 🦾 1. SCALE-AWARE OPERATING MODES

Hệ thống điều chỉnh mức độ nghiêm ngặt và cách phối hợp dựa trên `scale`:

### 👤 [Flexible] - Chế độ Cá nhân (Solo-Ninja)
- **Tư duy**: Tận dụng tối đa tốc độ. Một Agent xử lý đa nhiệm (Fullstack).
- **Quy trình**: Bỏ qua các bước Checkpoint rườm rà. Ưu tiên ra kết quả nhanh.
- **Liên kết**: Agent có toàn quyền truy cập toàn bộ `.shared` và `.skills` mà không cần xin phép Orchestrator.

### 👥 [Balanced] - Chế độ Team (Agile-Squad)
- **Tư duy**: Phân vai rõ ràng, ưu tiên tính nhất quán và cộng tác.
- **Quy trình**: Bắt buộc có `/plan` tối giản. Có Review chéo giữa Backend và Frontend.
- **Liên kết**: Agent phải trỏ đúng `dna_ref` trong header của mình.

### 🏢 [Strict] - Chế độ Doanh nghiệp (Software-Factory)
- **Tư duy**: Chuẩn hóa, an toàn và có thể mở rộng.
- **Quy trình**: Tuân thủ tuyệt đối 5 bước PDCA. Bắt buộc có `security-auditor` và `test-engineer` tham gia mọi Task.
- **Liên kết**: Chỉ được đọc/viết file trong Domain được chỉ định bởi Orchestrator. 

---

## 🔄 2. PDCA CYCLE (Standard Protocol)

Sử dụng workflow `/plan` -> `/create` -> `/orchestrate` -> `/status`.

1. **PLAN**: Thiết lập mục tiêu & bóc tách Task.
2. **DO**: Thực thi bởi các Specialist Agents (theo Scale).
3. **CHECK**: Kiểm tra bởi Quality Inspector & Test Engineer.
4. **ACT**: Tối ưu hóa, Refactor & Đóng gói.

---

## 🧠 3. SCIENTIFIC LINKAGE (Cơ chế liên kết)

Mọi file trong hệ thống phải tuân thủ cấu trúc liên kết:
1. **DNA (`.shared/`)**: Định nghĩa "Cái gì" (Chuẩn thiết kế, API, DB).
2. **RULES (`rules/`)**: Thực thi "Như thế nào" (Rào chắn, kỷ luật).
3. **SKILLS (`skills/`)**: Cung cấp "Công cụ gì" (Tri thức chuyên sâu).
4. **AGENTS (`agents/`)**: Là "Người thực hiện" (Nhân sự).
5. **WORKFLOWS (`workflows/`)**: Là "Chiến dịch" (Quy trình).

---

## ⚡ 4. SKILL INVOCATION PROTOCOL

- **Manual Invocation**: Thông qua các lệnh `/` (Ví dụ: `/ui-ux-pro-max`).
- **Contextual Invocation**: Tự động nhận diện Domain dựa trên Metadata Header của file đang sửa.
- **Orchestration**: Orchestrator đóng vai trò "Điều phối viên" điều động nhân sự dựa trên `skill_ref` của từng Agent.

---

*Văn bản này là nguồn dữ liệu tối cao, định hướng mọi hành vi của hệ thống.*
